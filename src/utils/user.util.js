import bcrypt from 'bcrypt'
import User from '../models/user.model';


export const checkEmail = async (body, data) => {
    const {LastName,  Email, Password,FirstName } = body
    if (data === null) {
        const hashedPassword = await bcrypt.hash(Password, 10)
        const data = await User.create({
            FirstName,
            LastName,
            Email,
            Password: hashedPassword
        })
        return data;

    } else   {
        throw new Error("Email already registered")
    }
   
}