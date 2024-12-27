// ============================
//   Database Connection Page
// ============================

const mongoose = require("mongoose");

async function databaseConnect(username, password) {
  // const db = `mongodb+srv://${username}:${password}@cluster0.a1yo0fh.mongodb.net/myDatabase?retryWrites=true&w=majority`;
  const db = `mongodb+srv://${username}:${password}@cluster0.azjd7rl.mongodb.net/EduWeb_Online?retryWrites=true&w=majority&appName=Cluster0`;
  await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("MongoDB connected..."))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = databaseConnect;
