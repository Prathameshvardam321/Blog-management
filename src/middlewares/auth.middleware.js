import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
  try {
    console.log("Entering ================");
    let bearerToken = req.header('Authorization');
    console.log("Req of auth----->", req.body);
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    console.log("User",user,"-------->>>>");
    req.body.Email = user.Email
    // userName = user.Id
    next();
  } catch (error) {
    next(error);
  }
};
