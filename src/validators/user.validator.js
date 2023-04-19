import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(2).required(),
    LastName:Joi.string().min(3).required(),
    Email: Joi.string().min(4).required().email(),
    Password: Joi.string().min(8).max(12).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};