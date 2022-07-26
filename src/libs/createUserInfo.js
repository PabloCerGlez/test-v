import Data from "../models/Data.js";

export const createInfoUser = async () => {
  const infoFound = await Data.findOne({ user: "admin@localhost" });

  if (infoFound) return;

  const newData = new Data({
    description: "test",
    user: "admin@localhost",
  });


  const info = await newData.save();

  console.log("info user created", info);
};
