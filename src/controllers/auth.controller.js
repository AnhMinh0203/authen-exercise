const { authService } = require('../services');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ message: 'Đăng nhập thành công', token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Đăng nhập thất bại', error: error.message });
  }
}

const register = async (req, res) => {
  try {
    console.log('📥 Body:', req.body); // Thêm dòng này
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'Đăng ký thành công', userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Đăng ký thất bại', error: error.message });
  }
}

module.exports = {
  login,
  register
};