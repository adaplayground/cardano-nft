export type themeType = {
  colors: {
    white: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey: string;
    grey700: string;
    grey800: string;
    grey900: string;
    greyDark: string;
    black: string;

    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;

    primary: string;
    secondary: string;
    accent: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;

    bodyBackgroundColor: string;
    bodyColor: string;
    bodySecondaryColor: string;
    navLinkDefault: string;
  };

  fonts: {
    fontUrl: string;
    fontName: string;
  };

  accordion: {
    iconBackgroundColor: string;
  };
};

export const defaultTheme: themeType = {
  colors: {
    white: '#ffffff',
    grey100: '#f6f9fc',
    grey200: '#f3f5f9',
    grey300: '#e3e9ef',
    grey400: '#dae1e7',
    grey500: '#aeb4be',
    grey600: '#7d879c',
    grey700: '#4b566b',
    grey800: '#373f50',
    grey900: '#2b3445',
    black: '#000000',

    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',

    primary: '#fe696a',
    secondary: '#f3f5f9', //grey200,
    success: '#42d697',
    info: '#69b3fe',
    warning: '#fea569',
    danger: '#f34770',
    light: '#ffffff', //grey100,
    dark: '#373f50', //grey800,

    accent: '#4e54c8',
    grey: '#7d879c', //grey600,
    greyDark: '#373f50', ////grey800
    bodyBackgroundColor: '#f6f9fcs',
    bodyColor: '#000000', //light
    bodySecondaryColor: '#212529', //grey900
    navLinkDefault: '#000000',
  },
  fonts: {
    fontUrl:
      'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
    fontName: 'vremenagrotesk',
  },

  accordion: {
    iconBackgroundColor: '#f3f5f9',
  },
};

export type allThemeType = { [key: string]: themeType };
