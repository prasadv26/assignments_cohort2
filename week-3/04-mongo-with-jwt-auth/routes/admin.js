const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
// TODO: implement zod
// const z = require("zod");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const isAdminExists = await Admin.findOne({ username });
  if (isAdminExists)
    return res.status(403).send("Admin with this username already exists");
  const newAdmin = Admin({
    username,
    password,
  });
  const saveAdmin = newAdmin.save();
  if (!saveAdmin) return res.status(500).send("Error while saving admin");
  return res.status(201).send("Admin created successfully");
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  console.log("admin confirm");
  const newCourse = Course({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: req.body.published,
  });
  const savedCourse = newCourse.save();
  if (!savedCourse) return res.status(500).send("Error while saving course");
  return res.status(201).send("Course created : ");
});

router.get("/users", adminMiddleware, async (req, res) => {
  // Implement fetching all users logic
  const users = await User.find({});
  if (!users) return res.status(404).send("No users found");
  return res.status(200).json({ users });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
