function isEmpty(obj) {
  for (let key in obj) {
    // als de loop is begonnen is er een property
    return false;
  }
  return true;
}
