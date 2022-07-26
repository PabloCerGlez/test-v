import User from "../models/User.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "pablo@correo.com" });

  if (userFound) return;

  const newUser = new User({
    username: "adm",
    email: "pablo@correo.com",
  });

  newUser.password = await newUser.encryptPassword("pass");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
