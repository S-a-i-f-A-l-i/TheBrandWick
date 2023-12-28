// set localStorage
export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined" && window !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// remove localStorage
export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined" && window !== undefined) {
    localStorage.removeItem(key);
  }
};
// get from localStorage
export const getFromLocal = (key) => {
  if (typeof window !== "undefined" && window !== undefined) {
    return JSON.parse(localStorage.getItem(key));
  }
};
