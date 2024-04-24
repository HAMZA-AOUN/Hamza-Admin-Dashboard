import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "igdmsvy");

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({
      username: { $regex: regex },
    })
      .limit(3)
      .skip(3 * (page - 1));

    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch Users!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch user!");
  }
};
