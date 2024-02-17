const mongoose = require("mongoose");
const { User } = require("../db");

async function runMigration() {
  try {
    await mongoose.connect(
      "mongodb+srv://prasad:prasad123@cluster0.ab2htwf.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = mongoose.connection.useDb("test");

    const user = await User.findOne({ username: "prasad@gmail.com" });
    console.log(user);

    const result = await db
      .collection("users")
      .updateMany({}, { $set: { purchasedCourses: [] } });

    // const result = await User.updateMany(
    //   {},
    //   { $set: { purchasedCourses: [] } }
    // );
    console.log(result);
    console.log(`${result.n} documents matched the query.`);
    console.log(`${result.nModified} documents were modified.`);
    console.log(
      "Migration complete: added purchasedCourses array field to User model"
    );
  } catch (error) {
    console.error("Error while performing migration:", error);
  } finally {
    await mongoose.disconnect();
  }
}

runMigration();
