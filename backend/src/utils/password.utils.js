export const validatePassword = async (password, res) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonAlphas = /\W/.test(password);

  if (password.length < minLength) {
    if (res) {
      return res
        .status(400)
        .json({ message: `Password must be at least ${minLength} characters` });
    }
    return false;
  }

  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonAlphas) {
    if (res) {
      return res.status(400).json({
        message:
          "Password must contain upper case, lower case, number and special character",
      });
    }
    return false;
  }

  return true;
};
