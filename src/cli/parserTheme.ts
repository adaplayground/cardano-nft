import * as fs from 'fs';

import glob = require('glob');

const lineReader = require('line-reader');
const dirName = '../../../bootswatch/dist';
const keywords = [
  '$theme:',
  '$white:',

  '$gray-100:',
  '$gray-200:',
  '$gray-300:',
  '$gray-400:',
  '$gray-500:',
  '$gray-600:',
  '$gray-700:',
  '$gray-800:',
  '$gray-900:',

  '$black:',

  '$indigo:',
  '$purple:',
  '$pink:',
  '$red:',
  '$orange:',
  '$yellow:',
  '$green:',
  '$teal:',
  '$cyan:',

  '$primary:',
  '$secondary:',
  '$success:',
  '$info:',
  '$warning:',
  '$danger:',
  '$light:',
  '$dark:',
];

const allThemes = {};

const re = /\s*($)\s*/;
const processCssFile = (cssName: string) => {
  console.log(cssName);
  let themeName = 'default';
  const themeStyles = {
    white: '#ffffff',
    grey100: '#f8f9fa',
    grey200: '#ecf0f1',
    grey300: '#dee2e6',
    grey400: '#ced4da',
    grey500: '#b4bcc2',
    grey600: '#95a5a6',
    grey700: '#7b8a8b',
    grey800: '#343a40',
    grey900: '#212529',
    black: '#000000',

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
    light: '#adb5bd', //grey800,
    dark: '#7b8a8b', //grey400,

    accent: '#6f42c1', //indigo
    grey: '#95a5a6', //grey600,
    greyDark: '#343a40', ////grey800
    bodyBackgroundColor: '#343a40',
    bodyColor: '#ffffff', //grey200
    bodySecondaryColor: '#f8f9fa', //grey200
    navLinkDefault: '#ffffff',
  };

  if (fs.existsSync(cssName)) {
    lineReader.eachLine(cssName, function (line) {
      const trimmedLine = line.trim();
      if (trimmedLine.length > 0) {
        const values = trimmedLine.split(/(\s+)/).filter(function (e) {
          return e.trim().length > 0;
        });
        if (values.length >= 2) {
          const keyword = values[0];
          const color = values[1];
          if (keywords.includes(keyword)) {
            switch (keyword) {
              case '$theme:':
                themeName = color.replace('"', '').replace('"', '');
                break;
              case '$white:':
                themeStyles.white = color;
                break;

              case '$gray-100:':
                themeStyles.grey100 = color;
                break;
              case '$gray-200:':
                themeStyles.grey200 = color;
                break;
              case '$gray-300:':
                themeStyles.grey300 = color;
                break;
              case '$gray-400:':
                themeStyles.grey400 = color;
                break;
              case '$gray-500:':
                themeStyles.grey500 = color;
                break;
              case '$gray-600:':
                themeStyles.grey600 = color;
                break;
              case '$gray-700:':
                themeStyles.grey700 = color;
                break;
              case '$gray-800:':
                themeStyles.grey800 = color;
                break;
              case '$gray-900:':
                themeStyles.grey900 = color;
                break;

              case '$black:':
                themeStyles.black = color;
                break;

              case '$indigo:':
                themeStyles.indigo = color;
                break;
              case '$purple:':
                themeStyles.purple = color;
                break;
              case '$pink:':
                themeStyles.pink = color;
                break;
              case '$red:':
                themeStyles.red = color;
                break;
              case '$orange:':
                themeStyles.orange = color;
                break;
              case '$yellow:':
                themeStyles.yellow = color;
                break;
              case '$green:':
                themeStyles.green = color;
                break;
              case '$teal:':
                themeStyles.teal = color;
                break;
              case '$cyan:':
                themeStyles.cyan = color;
                break;

              case '$primary:':
                themeStyles.primary =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$secondary:':
                themeStyles.secondary =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$success:':
                themeStyles.success =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$info:':
                themeStyles.info =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$warning:':
                themeStyles.warning =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$danger:':
                themeStyles.danger =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$light:':
                themeStyles.light =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                break;
              case '$dark:':
                themeStyles.dark =
                  themeStyles[
                    color
                      .replace('$', '')
                      .replace('-', '')
                      .replace('gray', 'grey')
                  ];
                allThemes[themeName] = themeStyles;
                const json = JSON.stringify(themeStyles, null, 2);
                const unquoted = json.replace(/"([^"]+)":/g, '$1:');
                fs.writeFileSync(`./themes/${themeName}.json`, unquoted);

                const jsonAll = JSON.stringify(allThemes, null, 2);
                const unquotedAll = jsonAll.replace(/"([^"]+)":/g, '$1:');
                fs.writeFileSync(`./themes/all.json`, unquotedAll);
                break;
              default:
                break;
            }
          }
        }
      }
    });
  }
};

glob(`${dirName}/*`, {}, function (er, files) {
  if (files) {
    files.forEach(async file => {
      const cssName = `${file}/_variables.scss`;
      processCssFile(cssName);
    });
  }
});
