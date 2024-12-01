require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();

const prisma = new PrismaClient();

// Increase payload size limit to 10MB
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Watch your steps this is unauthorized territory");
});

app.post("/api/users", async (req, res) => {
  const {
    fullName,
    dateOfBirth,
    gender,
    email,
    phoneNumber,
    address,
    city,
    state,
    postalCode,
    country,
    currentJobTitle,
    resume,
    linkedInUrl,
    coverLetter,
    profilePicture,
    jobTypePreferences,
    availabilityStart,
    willingToRelocate,
  } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        fullName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        email,
        phoneNumber,
        address,
        city,
        state,
        postalCode,
        country,
        currentJobTitle,
        resume: resume ? Buffer.from(resume.split(",")[1], "base64") : null,
        linkedInUrl,
        coverLetter: coverLetter ? Buffer.from(coverLetter.split(",")[1], "base64") : null,
        profilePicture: profilePicture ? Buffer.from(profilePicture.split(",")[1], "base64") : null,
        jobTypePreferences,
        availabilityStart: availabilityStart ? new Date(availabilityStart) : null,
        willingToRelocate,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Error adding user: " + error.message });
  }
});

app.get("/get-users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users: " + error.message });
  }
});

const resumeData = require("./resume-data.json");
app.get("/get-resume-data", async (req, res) => {
  res.send(resumeData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
