import localStorageMemory from 'metaplex/utils/memoryLocalStorage';

type UseStorageReturnValue = {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => boolean;
  removeItem: (key: string) => void;
};

export const useLocalStorage = (): UseStorageReturnValue => {
  const getItem = (key: string): string => {
    return localStorageMemory.getItem(key);
  };

  const setItem = (key: string, value: string): boolean => {
    try {
      localStorageMemory.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  };

  const removeItem = (key: string): void => {
    localStorageMemory.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
