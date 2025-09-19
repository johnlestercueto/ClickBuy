// Import ng User model (schema mula sa mongoose)
const User = require('../auth/User');

// Import ng bcrypt para sa hashing at pag-compare ng password
const bcrypt = require('bcrypt')


// ======================== REGISTER FUNCTION ========================
/**
 * Ginagamit kapag magrerehistro ang bagong user
 * Tatanggap siya ng object na may {username, email, password}
 */
const register = async ({username, email, password}) => {

    // 1. Validation: check kung may kulang sa fields
    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    // 2. Check kung may existing user na gamit ang email
    const existing = await User.findOne({ email })
    if(existing) throw new Error('Email is already exists')

    // 3. Hashing ng password para hindi plain text ang mase-save
    const saltRounds = 10; // gaano karaming beses iha-hash (mas mataas = mas secure pero mas mabagal)
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // 4. Gumawa ng bagong user gamit ang hashed password
    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    // 5. I-save ang user sa database
    await user.save();

    // 6. Ibalik ang user object (pero naka-hash na yung password)
    return user;
}



// ======================== LOGIN FUNCTION ========================
/**
 * Ginagamit para mag-login ang user
 * Tatanggap siya ng object na may {email, password}
 */
const login = async ({email, password}) => {
    
    // 1. Hanapin ang user sa database gamit ang email
    const user = await User.findOne({ email }) // object search kaya { email }
    if(!user) throw new Error('user not found')
    
    // 2. I-compare ang plaintext password na in-input at yung naka-hash na nasa DB
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error ('invalid credentials')

    // 3. Kung tama ang password, ibalik ang user object
    return user;
}



// ======================== EXPORTS ========================
/**
 * I-export ang functions para magamit sa controllers
 */
module.exports = {
    register,
    login
};
