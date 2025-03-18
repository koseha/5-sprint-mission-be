import userService from "../service/user.service.js";

const signup = async (req, res) => {
  const { nickname, email, password } = req.body;

  try {
    if (await userService.existUserByEmail(email))
      return res.status(400).send({ message: "사용 중인 이메일입니다." });

    const user = userService.signup(nickname, email, password);

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(500).send({ message: "서버 에러" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(`login email::${email}, password::${password}`);

  try {
    if (!(await userService.existUserByEmail(email, password)))
      return res.status(400).send({ message: "비밀번호가 일치하지 않습니다." });

    res.cookie("SPRINT-LOGIN", "codeit-sprint-mission", {
      maxAge: 900000,
      httpOnly: true,
    });

    return res.status(200).send({ message: "login" });
  } catch (err) {}
};

const logout = () => {};

const userController = {
  signup,
  login,
  logout,
};

export default userController;
