const jwt = require("jsonwebtoken");
const JWT_SECRET = "Outcomeba$ededucation";
const fetchuser = (req, res, next) => {
  //Get user from jwt token and add id to request

  const token = req.header("auth-token");
  if (!token) {
     res.status(401).send({ error: "Please authentiacte with valid token" });
  }

try {
  const data = jwt.verify(token, JWT_SECRET);
  req.user = data.user;
  next();
} catch (error) {
 res.status(401).send({ error: "Please authentiacte with valid token" });
}
};
module.exports = fetchuser;
