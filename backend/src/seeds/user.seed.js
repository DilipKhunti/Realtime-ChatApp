import { config } from "dotenv";
import { connectDB } from "../config/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ananya.verma@example.com",
    fullName: "Ananya Verma",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "meera.patil@example.com",
    fullName: "Meera Patil",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isha.nair@example.com",
    fullName: "Isha Nair",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "radhika.mishra@example.com",
    fullName: "Radhika Mishra",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "tanvi.reddy@example.com",
    fullName: "Tanvi Reddy",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "simran.singh@example.com",
    fullName: "Simran Singh",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "arjun.sharma@example.com",
    fullName: "Arjun Sharma",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.verma@example.com",
    fullName: "Rahul Verma",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "rishi.iyer@example.com",
    fullName: "Rishi Iyer",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "vishal.patil@example.com",
    fullName: "Vishal Patil",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "kartik.nair@example.com",
    fullName: "Kartik Nair",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "manish.mishra@example.com",
    fullName: "Manish Mishra",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "siddharth.reddy@example.com",
    fullName: "Siddharth Reddy",
    password: "Qwer@1234",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
