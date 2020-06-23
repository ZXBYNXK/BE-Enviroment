// BH users.js
const { Router } = require("express");
const router = Router();
const Profile = require("../6-18-profile-model/Profile");
router.post("/profile", async (req, res) => {
  try {
    const profile = await Profile.create(req.body, (err, profile) => {
      if (err) return err;
      return profile;
    });
    return res.status(201).json({ profile });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: { message: error } });
  }
});
