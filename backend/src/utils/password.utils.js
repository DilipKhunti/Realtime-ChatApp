//function to validate password
export const validatePassword = async (password, res) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonAlphas = /\W/.test(password);

  if (
    password.length < minLength ||
    !hasUpperCase ||
    !hasLowerCase ||
    !hasNumbers ||
    !hasNonAlphas
  ) {
    return false;
  }

  return true;
};
