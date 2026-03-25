const jwt = require('jsonwebtoken');
const jwtSecret = "abc123@"

const Auth = (req)=>{
    let token = req.headers.authorization;
    if(!token){
        return null
    }
    let decoded = jwt.verify(token , jwtSecret);
    return decoded
}

module.exports = Auth;