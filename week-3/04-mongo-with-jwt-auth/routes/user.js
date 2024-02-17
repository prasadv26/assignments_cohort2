const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtSecret = "JWTSecret123";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  const isUserExist = await User.findOne({ username });
  if (isUserExist) return res.status(404).json({ msg: "User already exists" });
  const newUser = User({
    username,
    password,
  });

  const savedUser = await newUser.save();
  const token = jwt.sign({ username }, jwtSecret, { expiresIn: "10m" });
  if (!savedUser) return res.status(500).json({ msg: "somethong werong" });

  return res.status(201).json({ msg: "User created success", token });
  // try {
  //   const username = req.body.username;
  //   const isUserExists = await User.findOne({ username });
  //   if (isUserExists) return res.status(403).send("User already exists");
  //   const newUser = User({
  //     username,
  //     password: req.body.password,
  //   });
  //   const savedUser = await newUser.save();
  //   if (!savedUser) return res.status(500).send("Error while saving user");
  //   return res.status(201).send("User created successfully");
  // } catch (error) {
  //   res.status(500).json({ msg: "Oops! Something went wrong" });
  // }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const jwtToken = jwt.sign({ username }, jwtSecret, { expiresIn: "1h" });

    const isUserExists = await User.findOne({ username });
    if (!isUserExists) return res.status(403).json("Invalid username");
    if (isUserExists.password !== password)
      return res.status(400).json("Incorrect user credentials.");
    return res.status(200).json({ msg: "JWT Token ", tokrn: jwtToken });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  if (!allCourses) return res.status(404).send("No Courses found");
  res.status(200).json({
    allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const verifyJWTToken = jwt.verify(req.headers["x-auth-token"], jwtSecret);
    const username = verifyJWTToken.username;

    const courseId = req.params.courseId;

    const course = await Course.findOne({ id: courseId });
    if (!course) {
      return res.status(404).json({ msg: "Course with this id doesn't exist" });
    }

    const user = await User.findOne({ username });
    if (!user || !user.purchasedCourses) {
      return res.status(500).json({ msg: "Invalid header: username missing" });
    }

    // Check if course is already purchased by user
    const isPurchasedAlready = user.purchasedCourses.some(
      (purchasedCourse) => purchasedCourse.id === course.id
    );

    if (isPurchasedAlready) {
      return res
        .status(403)
        .json({ msg: "You have already purchased this course" });
    }

    // Add the course to the purchasedCourses array
    user.purchasedCourses.push(course);
    await user.save();

    return res.status(200).json({ msg: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const verifyJWTToken = jwt.verify(req.headers["x-auth-token"], jwtSecret);
    const username = verifyJWTToken.username;
    const user = await User.findOne({ username });
    if (user.purchasedCourses.length < 1)
      return res.status(404).json({
        msg: "You have not purchased any course",
      });
    return res.status(200).json({
      courses: user.purchasedCourses,
    });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

module.exports = router;
