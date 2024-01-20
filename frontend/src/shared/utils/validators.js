export const validateLoginForm = (mail, password) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  return  isMailValid && isPasswordValid
}

const validateMail = (mail) => {
  const mailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return mailPattern.test(mail);
}
const validatePassword = (password) => {
  return password.length > 7
}