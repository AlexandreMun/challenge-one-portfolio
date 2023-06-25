// validação do email
export function isEmailValid(email) {
  const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

  if (regex.test(email)) {
    return true;
  }

  return false;
}
