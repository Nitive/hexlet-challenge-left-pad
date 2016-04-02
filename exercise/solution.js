// BEGIN
module.exports = function leftPad(text, len) {
  if (text.length >= len) {
    return text;
  }
  return leftPad(` ${text}`, len);
};
// END
