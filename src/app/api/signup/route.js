// // handler.js

// import ConnectDb from "../../../../middleware/mongooes";
// import user from "../../../../models/User";

// const CryptoJS = require("crypto-js");

// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     const { name, email, password } = req.body;

//     try {
//       // Create a new user instance
//       let newUser = new user({
//         name,
//         email,
//         password: password,
//       });

//       await newUser.save();

//       res.status(200).json({ success: "success" });
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ error: "Server error" });
//     }
//   } else {
//     res.status(400).json({ error: "Not allowed" });
//   }
// };

// export default ConnectDb(handler);
