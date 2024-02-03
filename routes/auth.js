const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");
const requireLogin = require("../middlewares/requireLogin");
const nodemailer = require("nodemailer");

// Load environmental variables
// require('dotenv').config();

// Replace these with your email configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// router.post("/forgot-password", async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await USER.findOne({ email });

//     if (!user) {
//       return res.status(422).json({ error: "User not found with this email" });
//     }

//     // Generate a unique token for password reset
//     const token = jwt.sign({ _id: user._id }, Jwt_secret, { expiresIn: '1h' });

//     // Save the token in the user document (optional)
//     user.resetToken = token;
//     user.expireToken = Date.now() + 3600000; // Token expires in 1 hour
//     await user.save();

//     // Send an email with the reset link
//     const resetLink = `http://localhost:3000/reset-password/${token}`;
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Password Reset',
//       html: `Click on the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
//     };

//     await transporter.sendMail(mailOptions);

//     console.log('Password reset link sent to your email');
//     res.json({ message: 'Password reset link sent to your email' });
//   } catch (error) {
//     console.error('Error in /forgot-password:', error);
//     res.status(500).json({ error: `Internal Server Error: ${error.message}` });
//   }
// });

// Route to handle password reset
// router.post("/reset-password/:token", async (req, res) => {
//   const { newPassword, confirmPassword } = req.body;
//   const resetToken = req.params.token;

//   if (!newPassword || !confirmPassword) {
//     return res.status(422).json({ error: "Please enter both passwords" });
//   }

//   try {
//     // Find the user by resetToken and check if the token is still valid
//     const user = await USER.findOne({ resetToken, expireToken: { $gt: Date.now() } });

//     if (!user) {
//       return res.status(422).json({ error: "Invalid or expired token" });
//     }

//     // Update the user's password
//     const hashedPassword = await bcrypt.hash(newPassword, 12);
//     user.password = hashedPassword;
//     user.resetToken = undefined;
//     user.expireToken = undefined;

//     await user.save();

//     res.json({ message: "Password reset successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });







router.post("/signup", (req, res) => {
    const { name, email, password, cPassword } = req.body;
    if (!name || !email || !password || !cPassword) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    USER.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "User already exists with that email" });
        }
        bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new USER({
                name,
                email,
                password: hashedPassword,
                cPassword,
            });
            user.save()
                .then((user) => {
                    res.json({ message: "Registered successfully" });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please add email and password" });
  }
  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          // return res.status(200).json({ message: "Signed in Successfully" })
          const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
          const { _id, name, email, userName } = savedUser;

          res.json({ token, user: { _id, name, email, userName } });

          // console.log({ token, user: { _id, name, email, userName } });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
