const Secret = require('../../config/dev').Secret;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../users/users.model');


// Authenticate Users
async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const {password, ...userWithoutPassword } = user.toObject();
        const token = jwt.sign({ sub: user.id }, Secret);

        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = {
    authenticate
};

