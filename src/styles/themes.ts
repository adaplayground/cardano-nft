import { allThemeType, defaultTheme } from 'styles/themeTypes';

export const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

export const themeNames = [
  'Cerulean',
  'Cyborg',
  'Flatly',
  'Litera',
  'Lux',
  'Minty',
  'Pulse',
  'Sandstone',
  'Sketchy',
  'Solar',
  'Superhero',
  'Vapor',
  'Zephyr',
  'Cosmo',
  'Darkly',
  'Journal',
  'Lumen',
  'Materia',
  'Morph',
  'Quartz',
  'Simplex',
  'Slate',
  'Spacelab',
  'United',
  'Yeti',
];
export const themes: allThemeType = {
  default: defaultTheme,

  cerulean: {
    ...defaultTheme,
    colors: {
      white: '#ffffff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#868e96',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000000',
      blue: '#033c73',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#c71c22',
      orange: '#fd7e14',
      yellow: '#dd5600',
      green: '#73a839',
      teal: '#20c997',
      cyan: '#2fa4e7',

      primary: '#2fa4e7', //cyan
      secondary: '#e9ecef', //grey200,
      success: '#73a839', //green,
      info: '#033c73', //blue,
      warning: '#dd5600', //yellow
      danger: '#c71c22', //red
      light: '#f8f9fa', //grey100,
      dark: '#343a40', //grey800,

      accent: '#6f42c1', //6f42c1
      grey: '#868e96', //grey600,
      greyDark: '#343a40', ////grey800
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#000000', //black
      bodySecondaryColor: '#212529', //grey900
      navLinkDefault: '#000000',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
      fontName: 'Rubik',
    },
  },

  cosmo: {
    ...defaultTheme,
    colors: {
      white: '#ffffff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#868e96',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000000',

      blue: '#2780e3',
      indigo: '#6610f2',
      purple: '#613d7c',
      pink: '#e83e8c',
      red: '#ff0039',
      orange: '#f0ad4e',
      yellow: '#ff7518',
      green: '#3fb618',
      teal: '#20c997',
      cyan: '#9954bb',

      primary: '#2780e3', //blue
      secondary: '#343a40', //grey800,
      success: '#3fb618', //green,
      info: '#9954bb', //cyan,
      warning: '#ff7518', //yellow
      danger: '#ff0039', //red
      light: '#f8f9fa', //grey100,
      dark: '#343a40', //grey800,

      accent: '#6f42c1', //indigo
      grey: '#868e96', //grey600,
      greyDark: '#343a40', ////grey800
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#000000', //black
      bodySecondaryColor: '#212529', //grey900
      navLinkDefault: '#000000',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap',
      fontName: 'Source Sans Pro',
    },
  },

  cyborg: {
    ...defaultTheme,
    colors: {
      white: '#000000',
      grey100: '#212529',
      grey200: '#343a40',
      grey300: '#495057',
      grey400: '#868e96',
      grey500: '#adb5bd',
      grey600: '#ced4da',
      grey700: '#dee2e6',
      grey800: '#e9ecef',
      grey900: '#f8f9fa',
      black: '#ffffff',

      blue: '#2a9fd6',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#cc0000',
      orange: '#fd7e14',
      yellow: '#ff8800',
      green: '#77b300',
      teal: '#20c997',
      cyan: '#9933cc',

      primary: '#2a9fd6', //blue
      secondary: '#555555', //grey600,
      success: '#77b300', //green,
      info: '#9933cc', //cyan,
      warning: '#ff8800', //yellow
      danger: '#cc0000', //red
      light: '#212529', //grey800,
      dark: '#ced4da', //grey400,

      accent: '#6f42c1', //indigo
      grey: '#868e96', //grey600,
      greyDark: '#343a40', ////grey800
      bodyBackgroundColor: '#060606',
      bodyColor: '#ffffff', //grey200
      bodySecondaryColor: '#f8f9fa', //grey200
      navLinkDefault: '#ffffff',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      fontName: 'Roboto',
    },
  },

  darkly: {
    ...defaultTheme,
    colors: {
      white: '#222222',
      grey100: '#f8f9fa',
      grey200: '#ebebeb',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#888888',
      grey700: '#444444',
      grey800: '#303030',
      grey900: '#222222',
      black: '#ebebeb',

      blue: '#3498db',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#e74c3c',
      orange: '#fd7e14',
      yellow: '#f39c12',
      green: '#00bc8c',
      teal: '#20c997',
      cyan: '#3498db',

      primary: '#3498db', //blue
      secondary: '#444444', //grey600,
      success: '#00bc8c', //green,
      info: '#3498db', //cyan,
      warning: '#f39c12', //yellow
      danger: '#e74c3c', //red
      light: '#303030', //grey800,
      dark: '#adb5bd', //grey400,

      accent: '#6f42c1', //indigo
      grey: '#303030', //grey600,
      greyDark: '#888888', ////grey800
      bodyBackgroundColor: '#303030',
      bodyColor: '#ffffff', //grey200
      bodySecondaryColor: '#f8f9fa', //grey200
      navLinkDefault: '#ffffff',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap',
      fontName: 'Lato',
    },
  },

  flatly: {
    ...defaultTheme,
    colors: {
      white: '#343a40',
      grey100: '#f8f9fa',
      grey200: '#ecf0f1',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#b4bcc2',
      grey600: '#95a5a6',
      grey700: '#7b8a8b',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#f8f9fa',

      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#e74c3c',
      orange: '#fd7e14',
      yellow: '#f39c12',
      green: '#18bc9c',
      teal: '#20c997',
      cyan: '#3498db',

      primary: '#3498db', //blue
      secondary: '#95a5a6', //grey600,
      success: '#18bc9c', //green,
      info: '#3498db', //cyan,
      warning: '#f39c12', //yellow
      danger: '#e74c3c', //red
      light: '#7b8a8b', //grey800,
      dark: '#adb5bd', //grey400,

      accent: '#6f42c1', //indigo
      grey: '#95a5a6', //grey600,
      greyDark: '#343a40', ////grey800
      bodyBackgroundColor: '#343a40',
      bodyColor: '#ffffff', //grey200
      bodySecondaryColor: '#f8f9fa', //grey200
      navLinkDefault: '#ffffff',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap',
      fontName: 'Lato',
    },
  },
  journal: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#eee',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#aaa',
      grey600: '#777',
      grey700: '#495057',
      grey800: '#333',
      grey900: '#222',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#f57a00',
      orange: '#fd7e14',
      yellow: '#f5e625',
      green: '#22b24c',
      teal: '#20c997',
      cyan: '#369',
      primary: '#2c3e50',
      secondary: '#aaa',
      success: '#22b24c',
      info: '#369',
      warning: '#f5e625',
      danger: '#f57a00',
      light: '#f8f9fa',
      dark: '#222',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#333333',
      bodySecondaryColor: '#888888',
      navLinkDefault: '#333333',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap',
      fontName: 'system-ui',
    },
  },
  litera: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#ddd',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#868e96',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#d9534f',
      orange: '#fd7e14',
      yellow: '#f0ad4e',
      green: '#02b875',
      teal: '#20c997',
      cyan: '#17a2b8',
      primary: '#2c3e50',
      secondary: '#adb5bd',
      success: '#02b875',
      info: '#17a2b8',
      warning: '#f0ad4e',
      danger: '#d9534f',
      light: '#f8f9fa',
      dark: '#343a40',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#343a40',
      bodySecondaryColor: '#868e96',
      navLinkDefault: '#212529',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
      fontName: 'Rubik',
    },
  },
  lumen: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f6f6f6',
      grey200: '#f0f0f0',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#999',
      grey700: '#555',
      grey800: '#333',
      grey900: '#222',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#ff4136',
      orange: '#fd7e14',
      yellow: '#ff851b',
      green: '#28b62c',
      teal: '#20c997',
      cyan: '#75caeb',
      primary: '#2c3e50',
      secondary: '#f0f0f0',
      success: '#28b62c',
      info: '#75caeb',
      warning: '#ff851b',
      danger: '#ff4136',
      light: '#f6f6f6',
      dark: '#555',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#222222',
      bodySecondaryColor: '#adb5bd',
      navLinkDefault: '#222222',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap',
      fontName: 'Source Sans Pro',
    },
  },
  lux: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#f7f7f9',
      grey300: '#eceeef',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#919aa1',
      grey700: '#55595c',
      grey800: '#343a40',
      grey900: '#1a1a1a',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#d9534f',
      orange: '#fd7e14',
      yellow: '#f0ad4e',
      green: '#4bbf73',
      teal: '#20c997',
      cyan: '#1f9bcf',
      primary: '#1a1a1a',
      secondary: '#fff',
      success: '#4bbf73',
      info: '#1f9bcf',
      warning: '#f0ad4e',
      danger: '#d9534f',
      light: '#fff',
      dark: '#343a40',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#55595c',
      bodySecondaryColor: '#919aa1',
      navLinkDefault: '#55595c',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap',
      fontName: 'Nunito Sans',
    },
  },
  materia: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#eee',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#bbb',
      grey600: '#666',
      grey700: '#444',
      grey800: '#222',
      grey900: '#212121',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#e51c23',
      orange: '#fd7e14',
      yellow: '#ff9800',
      green: '#4caf50',
      teal: '#20c997',
      cyan: '#9c27b0',
      primary: '#2c3e50',
      secondary: '#fff',
      success: '#4caf50',
      info: '#9c27b0',
      warning: '#ff9800',
      danger: '#e51c23',
      light: '#f8f9fa',
      dark: '#222',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#444444',
      bodySecondaryColor: '#aaaaaa',
      navLinkDefault: '#444444',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      fontName: 'Roboto',
    },
  },
  minty: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#f7f7f9',
      grey300: '#eceeef',
      grey400: '#ced4da',
      grey500: '#aaa',
      grey600: '#888',
      grey700: '#5a5a5a',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#ff7851',
      orange: '#fd7e14',
      yellow: '#ffce67',
      green: '#56cc9d',
      teal: '#20c997',
      cyan: '#6cc3d5',
      primary: '#78c2ad',
      secondary: '#f3969a',
      success: '#56cc9d',
      info: '#6cc3d5',
      warning: '#ffce67',
      danger: '#ff7851',
      light: '#f8f9fa',
      dark: '#343a40',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#888888',
      bodySecondaryColor: '#777777',
      navLinkDefault: '#888888',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap',
      fontName: 'system-ui',
    },
  },
  morph: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f0f5fa',
      grey200: '#d9e3f1',
      grey300: '#dee2e6',
      grey400: '#bed1e6',
      grey500: '#adb5bd',
      grey600: '#7f8a99',
      grey700: '#7b8ab8',
      grey800: '#444b40',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#5b62f4',
      pink: '#d63384',
      red: '#e52527',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#43cc29',
      teal: '#20c997',
      cyan: '#0dcaf0',
      primary: '#2c3e50',
      secondary: '#d9e3f1',
      success: '#43cc29',
      info: '#5b62f4',
      warning: '#ffc107',
      danger: '#e52527',
      light: '#f0f5fa',
      dark: '#212529',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#d9e3f1',
      bodyColor: '#7b8ab8',
      bodySecondaryColor: '#7f8a99',
      navLinkDefault: '#7b8ab8',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
      fontName: 'Nunito',
    },
  },
  pulse: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#fafafa',
      grey200: '#f9f8fc',
      grey300: '#ededed',
      grey400: '#cbc8d0',
      grey500: '#adb5bd',
      grey600: '#868e96',
      grey700: '#444',
      grey800: '#343a40',
      grey900: '#17141f',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#593196',
      pink: '#e83e8c',
      red: '#fc3939',
      orange: '#fd7e14',
      yellow: '#efa31d',
      green: '#13b955',
      teal: '#20c997',
      cyan: '#009cdc',
      primary: '#593196',
      secondary: '#a991d4',
      success: '#13b955',
      info: '#009cdc',
      warning: '#efa31d',
      danger: '#fc3939',
      light: '#f9f8fc',
      dark: '#17141f',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#444444',
      bodySecondaryColor: '#868e96',
      navLinkDefault: '#444444',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
      fontName: 'Rubik',
    },
  },
  quartz: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#e9e9e8',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#6c757d',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#686dc3',
      pink: '#e83283',
      red: '#fc346f',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#41d7a7',
      teal: '#528fb3',
      cyan: '#39cbfb',
      primary: '#e83283',
      secondary: '#444444',
      success: '#41d7a7',
      info: '#39cbfb',
      warning: '#ffc107',
      danger: '#fd7e14',
      light: '#6c757d',
      dark: '#212529',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#686dc3',
      bodyColor: '#ced4da',
      bodySecondaryColor: '#f8f9fa',
      navLinkDefault: '#ced4da',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
      fontName: 'Rubik',
    },
  },
  sandstone: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#f8f5f0',
      grey300: '#dfd7ca',
      grey400: '#ced4da',
      grey500: '#98978b',
      grey600: '#8e8c84',
      grey700: '#495057',
      grey800: '#3e3f3a',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#d9534f',
      orange: '#f47c3c',
      yellow: '#ffc107',
      green: '#93c54b',
      teal: '#20c997',
      cyan: '#29abe0',
      primary: '#2c3e50',
      secondary: '#8e8c84',
      success: '#93c54b',
      info: '#29abe0',
      warning: '#f47c3c',
      danger: '#d9534f',
      light: '#f8f5f0',
      dark: '#3e3f3a',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#3e3f3a',
      bodySecondaryColor: '#98978b',
      navLinkDefault: '#3e3f3a',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      fontName: 'Roboto',
    },
  },
  simplex: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#ddd',
      grey300: '#ccc',
      grey400: '#bbb',
      grey500: '#adb5bd',
      grey600: '#777',
      grey700: '#444',
      grey800: '#373a3c',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#9b479f',
      pink: '#e83e8c',
      red: '#d9230f',
      orange: '#d9831f',
      yellow: '#ffc107',
      green: '#469408',
      teal: '#20c997',
      cyan: '#029acf',
      primary: '#d9230f',
      secondary: '#fff',
      success: '#469408',
      info: '#029acf',
      warning: '#d9831f',
      danger: '#9b479f',
      light: '#fff',
      dark: '#373a3c',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#fcfcfc',
      bodyColor: '#212529',
      bodySecondaryColor: '#373a3c',
      navLinkDefault: '#212529',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
      fontName: 'Open Sans',
    },
  },
  sketchy: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#f7f7f9',
      grey300: '#dee2e6',
      grey400: '#ccc',
      grey500: '#aaa',
      grey600: '#868e96',
      grey700: '#555',
      grey800: '#333',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#17a2b8',
      primary: '#333',
      secondary: '#555',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#fff',
      dark: '#555',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#212529',
      bodySecondaryColor: '#868e96',
      navLinkDefault: '#212529',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css?family=Neucha|Cabin+Sketch&display=swap',
      fontName: 'Neucha',
    },
  },
  slate: {
    ...defaultTheme,
    colors: {
      white: '#7a8288',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#999',
      grey600: '#7a8288',
      grey700: '#52575c',
      grey800: '#3a3f44',
      grey900: '#272b30',
      black: '#272b30',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#ee5f5b',
      orange: '#fd7e14',
      yellow: '#f89406',
      green: '#62c462',
      teal: '#20c997',
      cyan: '#5bc0de',
      primary: '#4c5e70',
      secondary: '#7a8288',
      success: '#62c462',
      info: '#5bc0de',
      warning: '#f89406',
      danger: '#ee5f5b',
      light: '#272b30',
      dark: '#dee2e6',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#7a8288',
      bodyBackgroundColor: '#272b30',
      bodyColor: '#aaaaaa',
      bodySecondaryColor: '#7a8288',
      navLinkDefault: '#999',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
      fontName: 'Rubik',
    },
  },
  spacelab: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#eee',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#999',
      grey600: '#777',
      grey700: '#495057',
      grey800: '#333',
      grey900: '#2d2d2d',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#cd0200',
      orange: '#fd7e14',
      yellow: '#d47500',
      green: '#3cb521',
      teal: '#20c997',
      cyan: '#3399f3',
      primary: '#2c3e50',
      secondary: '#999',
      success: '#3cb521',
      info: '#3399f3',
      warning: '#d47500',
      danger: '#cd0200',
      light: '#eee',
      dark: '#333',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#777777',
      bodySecondaryColor: '#ced4da',
      navLinkDefault: '#777777',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      fontName: 'Open Sans',
    },
  },
  superhero: {
    ...defaultTheme,
    colors: {
      white: '#343a40',
      grey100: '#ebebeb',
      grey200: '#4e5d6c',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#868e96',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#ebebeb',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#d9534f',
      orange: '#f0ad4e',
      yellow: '#ffc107',
      green: '#5cb85c',
      teal: '#20c997',
      cyan: '#5bc0de',
      primary: '#2c3e50',
      secondary: '#4e5d6c',
      success: '#5cb85c',
      info: '#5bc0de',
      warning: '#ffc107',
      danger: '#d9534f',
      accent: '#6f42c1',
      light: '#4e5d6c',
      dark: '#20374c',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#0f2537',
      bodyColor: '#ebebeb',
      bodySecondaryColor: '#868e96',
      navLinkDefault: '#ebebeb',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      fontName: 'Lato',
    },
  },
  united: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#aea79f',
      grey600: '#868e96',
      grey700: '#495057',
      grey800: '#333',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#772953',
      pink: '#e83e8c',
      red: '#df382c',
      orange: '#e95420',
      yellow: '#efb73e',
      green: '#38b44a',
      teal: '#20c997',
      cyan: '#17a2b8',
      primary: '#e95420',
      secondary: '#aea79f',
      success: '#38b44a',
      info: '#17a2b8',
      warning: '#efb73e',
      danger: '#df382c',
      light: '#e9ecef',
      dark: '#772953',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#333333',
      bodySecondaryColor: '#495057',
      navLinkDefault: '#333333',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap',
      fontName: 'Ubuntu',
    },
  },
  vapor: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#6c757d',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#170229',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#ea39b8',
      red: '#e44c55',
      orange: '#f1b633',
      yellow: '#ffc107',
      green: '#3cf281',
      teal: '#3f81a2',
      cyan: '#32fbe2',
      primary: '#6f42c1',
      secondary: '#ea39b8',
      success: '#3cf281',
      info: '#2c3e50',
      warning: '#ffc107',
      danger: '#e44c55',
      dark: '#170229',
      light: '#3f81a2',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#1a0933',
      bodyColor: '#32fbe2',
      bodySecondaryColor: '#adb5bd',
      navLinkDefault: '#32fbe2',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
      fontName: 'Lato',
    },
  },
  yeti: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#eee',
      grey300: '#dee2e6',
      grey400: '#ccc',
      grey500: '#adb5bd',
      grey600: '#888',
      grey700: '#495057',
      grey800: '#333',
      grey900: '#222',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#f04124',
      orange: '#fd7e14',
      yellow: '#e99002',
      green: '#43ac6a',
      teal: '#20c997',
      cyan: '#5bc0de',
      primary: '#2c3e50',
      secondary: '#eee',
      success: '#43ac6a',
      info: '#5bc0de',
      warning: '#e99002',
      danger: '#f04124',
      light: '#eee',
      dark: '#222',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#222222',
      bodySecondaryColor: '#adb5bd',
      navLinkDefault: '#222222',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
      fontName: 'Open Sans',
    },
  },
  solar: {
    ...defaultTheme,
    colors: {
      white: '#495057',
      grey100: '#fdf6e3',
      grey200: '#eee8d5',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#839496',
      grey700: '#495057',
      grey800: '#073642',
      grey900: '#002b36',
      black: '#eee8d5',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#d33682',
      orange: '#fd7e14',
      yellow: '#cb4b16',
      green: '#2aa198',
      teal: '#20c997',
      cyan: '#268bd2',
      primary: '#839496',
      secondary: '#2c3e50',
      success: '#2aa198',
      info: '#268bd2',
      warning: '#cb4b16',
      danger: '#d33682',
      light: '#073642',
      dark: '#fdf6e3',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#002b36',
      bodyColor: '#839496',
      bodySecondaryColor: '#adb5bd',
      navLinkDefault: '#839496',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap',
      fontName: 'Source Sans Pro',
    },
  },
  zephyr: {
    ...defaultTheme,
    colors: {
      white: '#fff',
      grey100: '#f8f9fa',
      grey200: '#e9ecef',
      grey300: '#dee2e6',
      grey400: '#ced4da',
      grey500: '#adb5bd',
      grey600: '#6c757d',
      grey700: '#495057',
      grey800: '#343a40',
      grey900: '#212529',
      black: '#000',
      blue: '#2c3e50',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#d63384',
      red: '#da292e',
      orange: '#f8765f',
      yellow: '#f4bd61',
      green: '#2fb380',
      teal: '#20c997',
      cyan: '#287bb5',
      primary: '#2c3e50',
      secondary: '#fff',
      success: '#2fb380',
      info: '#287bb5',
      warning: '#f4bd61',
      danger: '#da292e',
      light: '#f8f9fa',
      dark: '#212529',
      accent: '#6f42c1',
      grey: '#95a5a6',
      greyDark: '#343a40',
      bodyBackgroundColor: '#ffffff',
      bodyColor: '#495057',
      bodySecondaryColor: '#adb5bd',
      navLinkDefault: '#495057',
    },
    fonts: {
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
      fontName: 'Inter',
    },
  },
};
