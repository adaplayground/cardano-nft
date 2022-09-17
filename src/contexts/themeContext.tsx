import React, { createContext, useContext, useState } from 'react';
import { randomIntFromInterval } from 'metaplex/utils/helpers';
import { themeNames } from 'styles/themes';
import {
  getApplicationConfInfo,
  getImageMetaSummaryInfo,
} from 'store/nftFireStore';

const themeIndex = randomIntFromInterval(0, themeNames.length);
const randomThemeName: string = 'sketchy'; //themeNames[themeIndex % themeNames.length];

const themeContext = createContext({
  themeName: randomThemeName.toLowerCase(),
  setThemeName: (name: string) => {},
});

function useTheme() {
  return useContext(themeContext);
}

export function ThemeProvider({ children }) {
  const [themeName, setNewTheme] = useState(randomThemeName.toLowerCase());

  // @ts-ignore
  React.useEffect(async () => {
    const appConf = await getApplicationConfInfo();
    if (appConf) {
      setNewTheme(appConf.themeName);
    }
  }, []);

  const setThemeName = (name: string) => {
    setNewTheme(name);
  };
  return (
    <themeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </themeContext.Provider>
  );
}

export default useTheme;
