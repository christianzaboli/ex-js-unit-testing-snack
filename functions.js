const getInitials = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
};
const average = (arr) => {
  const sum = arr.reduce((tot, curr) => tot + curr, 0);
  return sum / arr.length;
};

const createSlug = (str) => {
  if (!str.trim()) throw new Error("stringa non valida");

  if (!str.split(" ")[1]) {
    return str.toLowerCase();
  }

  return str.replace(/ /g, "-").toLowerCase().replace("è", "e");
};

const isPalindrome = (str) => {
  const chars = str.trim().split("");
  const reversedChars = chars.toReversed();
  return chars.join("") === reversedChars.join("");
};

const findPostById = (arr, id) => {
  return arr.find((post) => post.id === id);
};

module.exports = {
  getInitials,
  createSlug,
  isPalindrome,
  findPostById,
  average,
};
