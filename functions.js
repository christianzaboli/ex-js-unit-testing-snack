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

const createSlug = (str, arr) => {
  if (!str.trim()) throw new Error("stringa non valida");
  if (!str.split(" ")[1]) {
    return str.toLowerCase();
  }
  let stringFixed = str.replaceAll(" ", "-").toLowerCase().replace("è", "e");
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].slug === stringFixed) {
        return (stringFixed += -1);
      }
    }
    return stringFixed;
  }
  return stringFixed;
};

const isPalindrome = (str) => {
  const chars = str.trim().split("");
  const reversedChars = chars.toReversed();
  return chars.join("") === reversedChars.join("");
};

const findPostById = (arr, id) => {
  if (isNaN(id)) {
    throw new Error(`"${id}" non va bene`);
  }
  if (
    arr.forEach((element) => {
      element.id === undefined ||
        element.title === undefined ||
        element.slug === undefined;
    })
  ) {
    return null;
  }
  return arr.find((post) => post.id === id) || null;
};

const addPost = (arr, post) => {
  if (arr.find((p) => p.id === post.id)) throw new Error("id presente");
  if (arr.find((p) => p.slug === post.slug)) throw new Error("slug presente");
  arr.push(post);
};

const removePost = (arr, id) => {
  const index = arr.findIndex((p) => p.id === id);
  arr.splice(index, 1);
};
module.exports = {
  getInitials,
  createSlug,
  isPalindrome,
  findPostById,
  average,
  addPost,
  removePost,
};
