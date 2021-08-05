const jwt = require('jsonwebtoken')

const secret = 'dJBRr3g2xkEXey#Bdet8avAaVV!RP0j^'
const token = jwt.sign(
  {
    id: 'ellie',
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
)

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  })
}, 3000)

console.log(token);