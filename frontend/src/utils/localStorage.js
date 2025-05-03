const PREFIX = process.env.REACT_APP_LOCAL_STORAGE_PREFIX;

const getLs = (key) => {
  return window.localStorage.getItem(PREFIX + key);
};

const setLs = (key, value) => {
  window.localStorage.setItem(PREFIX + key, value);
};

const getOrDefault = (key, value) => {
  const storedValue = getLs(key);
  if (storedValue == null) {
    setLs(key, value);
    return value;
  }
  return storedValue;
};

const popLS = (key) => {
  const value = window.localStorage.getItem(PREFIX + key);
  window.localStorage.removeItem(PREFIX + key);
  return value;
};

export { getLs, setLs, getOrDefault, popLS };
