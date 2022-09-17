let cache = {};

const localStorageMemory = {
  length: 0,
  getItem: key => {
    if (key in cache) {
      return cache[key];
    }

    return null;
  },
  setItem: (key, value) => {
    if (typeof value === 'undefined') {
      localStorageMemory.removeItem(key);
    } else {
      if (!cache.hasOwnProperty(key)) {
        localStorageMemory.length++;
      }

      cache[key] = '' + value;
    }
  },
  removeItem: key => {
    if (cache.hasOwnProperty(key)) {
      delete cache[key];
      localStorageMemory.length--;
    }
  },
  key: index => {
    return Object.keys(cache)[index] || null;
  },
  clear: () => {
    cache = {};
    localStorageMemory.length = 0;
  },
};

export default localStorageMemory;
export { cache };
