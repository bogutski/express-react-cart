import jwt from 'jsonwebtoken';

const userCheckAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(token);
    console.log(decoded);
    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};

export default userCheckAuth;
