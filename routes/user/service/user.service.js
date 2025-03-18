import prisma from "../../../prismaClient.js";

const existUserByEmail = async (email, password = null) => {
  const whereClause = password ? { email, password } : { email };

  return await prisma.Users.findUnique({
    where: whereClause,
  });
};

const signup = async (nickname, email, password) => {
  return await prisma.Users.create({
    data: {
      email,
      password,
      nickname,
    },
  });
};

const userService = { existUserByEmail, signup };

export default userService;
