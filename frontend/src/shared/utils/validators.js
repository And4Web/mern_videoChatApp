export const validateLoginForm = (mail, password) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  return  isMailValid && isPasswordValid
}
export const validateRegisterForm = (name, mail, password) => {
  const isNameValid = validateName(name)
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  return  isMailValid && isPasswordValid && isNameValid
}

export const validateName = (name) => {
  return name.length > 2
}

export const validateMail = (mail) => {
  const mailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return mailPattern.test(mail);
}
const validatePassword = (password) => {
  return password.length > 7
}