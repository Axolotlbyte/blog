const extractToken = (str) => str.split("=")[1].split(";")[0];
export default extractToken;
