import jwt_Decode from "jwt-decode";
export function getToken() {
  return localStorage.getItem("token");
}
export function setToken(token) {
  localStorage.setItem("token", token);
}
export function getUserName() {
  const token = getToken();
  if (token == null || token.length < 1) return "Login";
  const decoded = jwt_Decode(token);
  return decoded.Name;
}
export function getRole() {
  const token = getToken();
  if (token == null || token.length < 1) return "";
  const decoded = jwt_Decode(token);
  return decoded.Role;
}
export function getUserId() {
  const token = getToken();
  if (token == null || token.length < 1) return -1;
  const decoded = jwt_Decode(token);
  return decoded.UserId;
}
