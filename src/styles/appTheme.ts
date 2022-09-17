import { themeType } from 'styles/themeTypes';
import { hexToRgb } from 'styles/themes';

export const appTheme = (theme: themeType) => `
@charset "UTF-8";
/*
 * Cartzilla | Bootstrap E-Commerce Template
 * Copyright 2021 Createx Studio
 * Copyright 2022 Cardano NFT
 * Theme styles
 */
/*!
 * Bootstrap v5.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
@import url("${theme.fonts.fontUrl}");
:root {
  --bs-blue: ${theme.colors.blue};
  --bs-indigo: ${theme.colors.indigo};
  --bs-purple: ${theme.colors.purple};
  --bs-pink:${theme.colors.pink};
  --bs-red: ${theme.colors.red};
  --bs-orange: ${theme.colors.orange};
  --bs-yellow: ${theme.colors.yellow};
  --bs-green: ${theme.colors.green};
  --bs-teal: ${theme.colors.teal};
  --bs-cyan: ${theme.colors.cyan};
  --bs-white:${theme.colors.white};
  --bs-gray: ${theme.colors.grey};
  --bs-gray-dark: ${theme.colors.greyDark};
  --bs-gray-100: ${theme.colors.grey100};
  --bs-gray-200: ${theme.colors.grey200};
  --bs-gray-300: ${theme.colors.grey300};
  --bs-gray-400: ${theme.colors.grey400};
  --bs-gray-500: ${theme.colors.grey500};
  --bs-gray-600: ${theme.colors.grey600};
  --bs-body-700: ${theme.colors.grey700};
  --bs-gray-800: ${theme.colors.grey800};
  --bs-gray-900: ${theme.colors.grey900};
  --bs-primary:${theme.colors.primary};
  --bs-accent:${theme.colors.accent};
  --bs-secondary: ${theme.colors.secondary};
  --bs-success: ${theme.colors.success};
  --bs-info: ${theme.colors.info};
  --bs-warning: ${theme.colors.warning};
  --bs-danger: ${theme.colors.danger};
  --bs-light: ${theme.colors.light};
  --bs-dark: ${theme.colors.dark};
  --bs-primary-rgb: ${hexToRgb(theme.colors.primary)[0]}, ${
  hexToRgb(theme.colors.primary)[1]
}, ${hexToRgb(theme.colors.primary)[2]};
  --bs-accent-rgb:${hexToRgb(theme.colors.accent)[0]}, ${
  hexToRgb(theme.colors.accent)[1]
}, ${hexToRgb(theme.colors.accent)[2]};
  --bs-secondary-rgb: ${hexToRgb(theme.colors.secondary)[0]}, ${
  hexToRgb(theme.colors.secondary)[1]
}, ${hexToRgb(theme.colors.secondary)[2]};
  --bs-success-rgb: ${hexToRgb(theme.colors.success)[0]}, ${
  hexToRgb(theme.colors.success)[1]
}, ${hexToRgb(theme.colors.success)[2]};
  --bs-info-rgb: ${hexToRgb(theme.colors.info)[0]}, ${
  hexToRgb(theme.colors.info)[1]
}, ${hexToRgb(theme.colors.info)[2]};
  --bs-warning-rgb: ${hexToRgb(theme.colors.warning)[0]}, ${
  hexToRgb(theme.colors.warning)[1]
}, ${hexToRgb(theme.colors.warning)[2]};
  --bs-danger-rgb: ${hexToRgb(theme.colors.danger)[0]}, ${
  hexToRgb(theme.colors.danger)[1]
}, ${hexToRgb(theme.colors.danger)[2]};
  --bs-light-rgb: ${hexToRgb(theme.colors.light)[0]}, ${
  hexToRgb(theme.colors.light)[1]
}, ${hexToRgb(theme.colors.light)[2]};
  --bs-dark-rgb: ${hexToRgb(theme.colors.dark)[0]}, ${
  hexToRgb(theme.colors.dark)[1]
}, ${hexToRgb(theme.colors.dark)[2]};
  --bs-white-rgb: ${hexToRgb(theme.colors.white)[0]}, ${
  hexToRgb(theme.colors.white)[1]
}, ${hexToRgb(theme.colors.white)[2]};
  --bs-black-rgb: ${hexToRgb(theme.colors.black)[0]}, ${
  hexToRgb(theme.colors.black)[1]
}, ${hexToRgb(theme.colors.black)[2]};
  --bs-body-rgb: ${hexToRgb(theme.colors.bodyBackgroundColor)[0]}, ${
  hexToRgb(theme.colors.bodyBackgroundColor)[1]
}, ${hexToRgb(theme.colors.bodyBackgroundColor)[2]};
  --bs-font-sans-serif: "${theme.fonts.fontName}", sans-serif;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: ${theme.colors.bodyColor};
  --bs-body-secondary-color: ${theme.colors.bodySecondaryColor};
  --bs-body-bg: ${theme.colors.bodyBackgroundColor};
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 0 0;
  color: var(--bs-gray-300);
  background-color: currentColor;
  border: 0;
  opacity: 1;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-body-secondary-color);
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1.0625rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.8em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: var(--bs-primary);
  text-decoration: none;
}
a:hover {
  color: #fe3638;
  text-decoration: none;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
  color: #404a5c;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: var(--bs-pink);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color:var(--bs-gray);
  text-align: left;
}

th {
  font-weight: 500;
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::-webkit-file-upload-button {
  font: inherit;
}

::file-selector-button {
  font: inherit;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.display-404 {
  font-size: calc(2.125rem + 10.5vw);
  font-weight: 500;
  line-height: 1;
}
@media (min-width: 1200px) {
  .display-404 {
    font-size: 10rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.8em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color:var(--bs-gray);
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.3125rem;
  background-color: var(--bs-light);
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.3125rem;
  box-shadow: none;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.8125rem;
  color: rgba(75, 86, 107, 0.9);
}

.container,
.container-fluid,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.9375rem);
  padding-left: var(--bs-gutter-x, 0.9375rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 500px) {
  .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 1280px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1260px;
  }
}
.row {
  --bs-gutter-x: 1.875rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

.g-10,
.gx-10 {
  --bs-gutter-x: 10rem;
}

.g-10,
.gy-10 {
  --bs-gutter-y: 10rem;
}

.g-grid-gutter,
.gx-grid-gutter {
  --bs-gutter-x: 1.875rem;
}

.g-grid-gutter,
.gy-grid-gutter {
  --bs-gutter-y: 1.875rem;
}

@media (min-width: 500px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }

  .g-sm-10,
.gx-sm-10 {
    --bs-gutter-x: 10rem;
  }

  .g-sm-10,
.gy-sm-10 {
    --bs-gutter-y: 10rem;
  }

  .g-sm-grid-gutter,
.gx-sm-grid-gutter {
    --bs-gutter-x: 1.875rem;
  }

  .g-sm-grid-gutter,
.gy-sm-grid-gutter {
    --bs-gutter-y: 1.875rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333333%;
  }

  .offset-md-5 {
    margin-left: 41.66666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333333%;
  }

  .offset-md-8 {
    margin-left: 66.66666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333333%;
  }

  .offset-md-11 {
    margin-left: 91.66666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }

  .g-md-10,
.gx-md-10 {
    --bs-gutter-x: 10rem;
  }

  .g-md-10,
.gy-md-10 {
    --bs-gutter-y: 10rem;
  }

  .g-md-grid-gutter,
.gx-md-grid-gutter {
    --bs-gutter-x: 1.875rem;
  }

  .g-md-grid-gutter,
.gy-md-grid-gutter {
    --bs-gutter-y: 1.875rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }

  .g-lg-10,
.gx-lg-10 {
    --bs-gutter-x: 10rem;
  }

  .g-lg-10,
.gy-lg-10 {
    --bs-gutter-y: 10rem;
  }

  .g-lg-grid-gutter,
.gx-lg-grid-gutter {
    --bs-gutter-x: 1.875rem;
  }

  .g-lg-grid-gutter,
.gy-lg-grid-gutter {
    --bs-gutter-y: 1.875rem;
  }
}
@media (min-width: 1280px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }

  .g-xl-10,
.gx-xl-10 {
    --bs-gutter-x: 10rem;
  }

  .g-xl-10,
.gy-xl-10 {
    --bs-gutter-y: 10rem;
  }

  .g-xl-grid-gutter,
.gx-xl-grid-gutter {
    --bs-gutter-x: 1.875rem;
  }

  .g-xl-grid-gutter,
.gy-xl-grid-gutter {
    --bs-gutter-y: 1.875rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }

  .g-xxl-10,
.gx-xxl-10 {
    --bs-gutter-x: 10rem;
  }

  .g-xxl-10,
.gy-xxl-10 {
    --bs-gutter-y: 10rem;
  }

  .g-xxl-grid-gutter,
.gx-xxl-grid-gutter {
    --bs-gutter-x: 1.875rem;
  }

  .g-xxl-grid-gutter,
.gy-xxl-grid-gutter {
    --bs-gutter-y: 1.875rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(0, 0, 0, 0.0375);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(0, 0, 0, 0.05);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-bottom: 1rem;
  color: var(--bs-body-color);
  vertical-align: top;
  border-color: var(--bs-gray-300);
}
.table > :not(caption) > * > * {
  padding: 0.75rem 0.75rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.375rem 0.375rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: var(--bs-light)0f0;
  --bs-table-striped-bg: #f5e7e7;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #f2e4e4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #f2e4e4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6d8d8;
}

.table-accent {
  --bs-table-bg: #edeefa;
  --bs-table-striped-bg: #e4e5f1;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e1e2ee;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e1e2ee;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #d5d6e1;
}

.table-secondary {
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-striped-bg: #edf0f3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #eaedef;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #eaedef;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dde0e3;
}

.table-success {
  --bs-table-bg: #ecfbf5;
  --bs-table-striped-bg: #e3f2ec;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e0eee9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e0eee9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #d4e2dd;
}

.table-info {
  --bs-table-bg: #f0f7ff;
  --bs-table-striped-bg: #e7eef5;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e4ebf2;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e4ebf2;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #d8dee6;
}

.table-warning {
  --bs-table-bg: var(--bs-light)6f0;
  --bs-table-striped-bg: #f5ede7;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #f2eae4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #f2eae4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6ddd8;
}

.table-danger {
  --bs-table-bg: #feedf1;
  --bs-table-striped-bg: #f4e4e8;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #f1e1e5;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #f1e1e5;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e5d5d9;
}

.table-dark {
  --bs-table-bg: var(--bs-gray-dark);
  --bs-table-striped-bg: #3f4657;
  --bs-table-striped-color: var(--bs-light);
  --bs-table-active-bg: #414959;
  --bs-table-active-color: var(--bs-light);
  --bs-table-hover-bg: #414959;
  --bs-table-hover-color: var(--bs-light);
  color: var(--bs-body-secondary-color);
  border-color: #4b5262;
}

.table-light {
  --bs-table-bg: var(--bs-light);
  --bs-table-striped-bg: whitesmoke;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #f2f2f2;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #f2f2f2;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6e6e6;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 499.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1279.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--bs-body-secondary-color);
}

.col-form-label {
  padding-top: calc(0.625rem + 1px);
  padding-bottom: calc(0.625rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.5;
  color: var(--bs-body-secondary-color);
}

.col-form-label-lg {
  padding-top: calc(0.75rem + 1px);
  padding-bottom: calc(0.75rem + 1px);
  font-size: 1.0625rem;
}

.col-form-label-sm {
  padding-top: calc(0.425rem + 1px);
  padding-bottom: calc(0.425rem + 1px);
  font-size: 0.8125rem;
}

.form-text {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color:var(--bs-gray);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 1px solid var(--bs-gray-400);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3125rem;
  box-shadow: inset 0 1px 2px transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-light);
  border-color: #ffb4b5;
  outline: 0;
  box-shadow: inset 0 1px 2px transparent, 0 0.375rem 0.625rem -0.3125rem rgba(254, 105, 106, 0.15);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color:var(--bs-gray);
  opacity: 1;
}
.form-control::placeholder {
  color:var(--bs-gray);
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: var(--bs-gray-100);
  opacity: 1;
}
.form-control::-webkit-file-upload-button {
  padding: 0.625rem 1rem;
  margin: -0.625rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-gray-100);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}
.form-control::file-selector-button {
  padding: 0.625rem 1rem;
  margin: -0.625rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-gray-100);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}
.form-control::file-selector-button {
  padding: 0.625rem 1rem;
  margin: -0.625rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-gray-100);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
  .form-control::file-selector-button {
    transition: none;
  }
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: var(--bs-gray-100);
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-gray-100);
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-gray-100);
}
.form-control::-webkit-file-upload-button {
  padding: 0.625rem 1rem;
  margin: -0.625rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-gray-100);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: var(--bs-gray-100);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.625rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.85rem + 2px);
  padding: 0.425rem 0.75rem;
  font-size: 0.8125rem;
  border-radius: 0.25rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.425rem 0.75rem;
  margin: -0.425rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
}
.form-control-sm::file-selector-button {
  padding: 0.425rem 0.75rem;
  margin: -0.425rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
}
.form-control-sm::file-selector-button {
  padding: 0.425rem 0.75rem;
  margin: -0.425rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.425rem 0.75rem;
  margin: -0.425rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1.5rem + 2px);
  padding: 0.75rem 1.25rem;
  font-size: 1.0625rem;
  border-radius: 0.4375rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.75rem 1.25rem;
  margin: -0.75rem -1.25rem;
  -webkit-margin-end: 1.25rem;
  margin-inline-end: 1.25rem;
}
.form-control-lg::file-selector-button {
  padding: 0.75rem 1.25rem;
  margin: -0.75rem -1.25rem;
  -webkit-margin-end: 1.25rem;
  margin-inline-end: 1.25rem;
}
.form-control-lg::file-selector-button {
  padding: 0.75rem 1.25rem;
  margin: -0.75rem -1.25rem;
  -webkit-margin-end: 1.25rem;
  margin-inline-end: 1.25rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.75rem 1.25rem;
  margin: -0.75rem -1.25rem;
  -webkit-margin-end: 1.25rem;
  margin-inline-end: 1.25rem;
}

textarea.form-control {
  min-height: calc(1.5em + 1.25rem + 2px);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.85rem + 2px);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1.5rem + 2px);
}

.form-control-color {
  width: 3rem;
  height: auto;
  padding: 0.625rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.3125rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.3125rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.625rem 3rem 0.625rem 1rem;
  -moz-padding-start: calc(1rem - 3px);
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: var(--bs-light);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373f50' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px 12px;
  border: 1px solid var(--bs-gray-400);
  border-radius: 0.3125rem;
  box-shadow: inset 0 1px 2px transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #ffb4b5;
  outline: 0;
  box-shadow: inset 0 1px 2px transparent, 0 0 0 0 rgba(254, 105, 106, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 1rem;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--bs-gray-200);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--bs-body-color);
}

.form-select-sm {
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  padding-left: 0.75rem;
  font-size: 0.8125rem;
}

.form-select-lg {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  font-size: 1.0625rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: var(--bs-light);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #c1cdd7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.3125em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: none;
}
.form-check-input:focus {
  border-color: #ffb4b5;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(254, 105, 106, 0.25);
}
.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.6;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.6;
}

.form-switch {
  padding-left: 2.6875rem;
}
.form-switch .form-check-input {
  width: 2.1875rem;
  margin-left: -2.6875rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2.1875rem;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px var(--bs-light), 0 0.375rem 0.625rem -0.3125rem rgba(254, 105, 106, 0.15);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px var(--bs-light), 0 0.375rem 0.625rem -0.3125rem rgba(254, 105, 106, 0.15);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: var(--bs-primary);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #fe3b3d;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-gray-300);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 1px 2px transparent;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: var(--bs-primary);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #fe3b3d;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-gray-300);
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 1px 2px transparent;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-gray-500);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-gray-500);
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 1rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 1rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-light);
  border: 1px solid var(--bs-gray-400);
  border-radius: 0.3125rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.75rem 1.25rem;
  font-size: 1.0625rem;
  border-radius: 0.4375rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.425rem 0.75rem;
  font-size: 0.8125rem;
  border-radius: 0.25rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 4rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: var(--bs-success);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.75rem;
  color: #000;
  background-color: rgba(66, 214, 151, 0.1);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-success);
  padding-right: calc(1.5em + 1.25rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%2342d697' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='6' cy='6' r='5'%3e%3c/circle%3e%3cpolyline stroke-width='1.15' points='11 2 6 7.5 3.8 6.01'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.3125rem) center;
  background-size: calc(0.75em + 0.625rem) calc(0.75em + 0.625rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-success);
  box-shadow: 0 0 0 0 rgba(66, 214, 151, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 1.25rem);
  background-position: top calc(0.375em + 0.3125rem) right calc(0.375em + 0.3125rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-success);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 5.5rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373f50' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%2342d697' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='6' cy='6' r='5'%3e%3c/circle%3e%3cpolyline stroke-width='1.15' points='11 2 6 7.5 3.8 6.01'%3e%3c/polyline%3e%3c/svg%3e");
  background-position: right 1rem center, center right 3rem;
  background-size: 16px 12px, calc(0.75em + 0.625rem) calc(0.75em + 0.625rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-success);
  box-shadow: 0 0 0 0 rgba(66, 214, 151, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-success);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-success);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0 rgba(66, 214, 151, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-success);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: var(--bs-danger);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.75rem;
  color: #000;
  background-color: rgba(243, 71, 112, 0.1);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-danger);
  padding-right: calc(1.5em + 1.25rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23f34770' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='6' cy='6' r='5'%3e%3c/circle%3e%3cline x1='8' y1='4' x2='4' y2='8'%3e%3c/line%3e%3cline x1='4' y1='4' x2='8' y2='8'%3e%3c/line%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.3125rem) center;
  background-size: calc(0.75em + 0.625rem) calc(0.75em + 0.625rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-danger);
  box-shadow: 0 0 0 0 rgba(243, 71, 112, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 1.25rem);
  background-position: top calc(0.375em + 0.3125rem) right calc(0.375em + 0.3125rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-danger);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 5.5rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373f50' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23f34770' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='6' cy='6' r='5'%3e%3c/circle%3e%3cline x1='8' y1='4' x2='4' y2='8'%3e%3c/line%3e%3cline x1='4' y1='4' x2='8' y2='8'%3e%3c/line%3e%3c/svg%3e");
  background-position: right 1rem center, center right 3rem;
  background-size: 16px 12px, calc(0.75em + 0.625rem) calc(0.75em + 0.625rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-danger);
  box-shadow: 0 0 0 0 rgba(243, 71, 112, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-danger);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-danger);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0 rgba(243, 71, 112, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-danger);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.5;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.625rem 1.375rem;
  font-size: 0.9375rem;
  border-radius: 0.3125rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-body-color);
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: unset;
}
.btn-check:checked + .btn, .btn-check:active + .btn, .btn:active, .btn.active {
  box-shadow: unset;
}
.btn-check:checked + .btn:focus, .btn-check:active + .btn:focus, .btn:active:focus, .btn.active:focus {
  box-shadow: unset, unset;
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
  box-shadow: none;
}

.btn-primary {
  color: #000;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: unset;
}
.btn-primary:hover {
  color: #000;
  background-color: #fe8080;
  border-color: #fe7879;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #000;
  background-color: #fe8080;
  border-color: #fe7879;
  box-shadow: unset, 0 0 0 0 rgba(216, 89, 90, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #000;
  background-color: #fe8788;
  border-color: #fe7879;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(216, 89, 90, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #000;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn-accent {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-accent);
  border-color: var(--bs-accent);
  box-shadow: unset;
}
.btn-accent:hover {
  color: var(--bs-body-secondary-color);
  background-color: #4247aa;
  border-color: #3e43a0;
}
.btn-check:focus + .btn-accent, .btn-accent:focus {
  color: var(--bs-body-secondary-color);
  background-color: #4247aa;
  border-color: #3e43a0;
  box-shadow: unset, 0 0 0 0 rgba(105, 110, 208, 0.5);
}
.btn-check:checked + .btn-accent, .btn-check:active + .btn-accent, .btn-accent:active, .btn-accent.active, .show > .btn-accent.dropdown-toggle {
  color: var(--bs-body-secondary-color);
  background-color: #3e43a0;
  border-color: #3b3f96;
}
.btn-check:checked + .btn-accent:focus, .btn-check:active + .btn-accent:focus, .btn-accent:active:focus, .btn-accent.active:focus, .show > .btn-accent.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(105, 110, 208, 0.5);
}
.btn-accent:disabled, .btn-accent.disabled {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-accent);
  border-color: var(--bs-accent);
}

.btn-secondary {
  color: #000;
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
  box-shadow: unset;
}
.btn-secondary:hover {
  color: #000;
  background-color: #f5f7fa;
  border-color: #f4f6fa;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #000;
  background-color: #f5f7fa;
  border-color: #f4f6fa;
  box-shadow: unset, 0 0 0 0 rgba(207, 208, 212, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #f5f7fa;
  border-color: #f4f6fa;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(207, 208, 212, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #000;
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
}

.btn-success {
  color: #000;
  background-color: var(--bs-success);
  border-color: var(--bs-success);
  box-shadow: unset;
}
.btn-success:hover {
  color: #000;
  background-color: #5edca7;
  border-color: #55daa1;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #000;
  background-color: #5edca7;
  border-color: #55daa1;
  box-shadow: unset, 0 0 0 0 rgba(56, 182, 128, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #000;
  background-color: #68deac;
  border-color: #55daa1;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(56, 182, 128, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #000;
  background-color: var(--bs-success);
  border-color: var(--bs-success);
}

.btn-info {
  color: #000;
  background-color: var(--bs-info);
  border-color: var(--bs-info);
  box-shadow: unset;
}
.btn-info:hover {
  color: #000;
  background-color: #80befe;
  border-color: #78bbfe;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #80befe;
  border-color: #78bbfe;
  box-shadow: unset, 0 0 0 0 rgba(89, 152, 216, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #87c2fe;
  border-color: #78bbfe;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(89, 152, 216, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: var(--bs-info);
  border-color: var(--bs-info);
}

.btn-warning {
  color: #000;
  background-color: var(--bs-warning);
  border-color: var(--bs-warning);
  box-shadow: unset;
}
.btn-warning:hover {
  color: #000;
  background-color: #feb380;
  border-color: #feae78;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #feb380;
  border-color: #feae78;
  box-shadow: unset, 0 0 0 0 rgba(216, 140, 89, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #feb787;
  border-color: #feae78;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(216, 140, 89, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: var(--bs-warning);
  border-color: var(--bs-warning);
}

.btn-danger {
  color: #000;
  background-color: var(--bs-danger);
  border-color: var(--bs-danger);
  box-shadow: unset;
}
.btn-danger:hover {
  color: #000;
  background-color: #f56385;
  border-color: #f4597e;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #000;
  background-color: #f56385;
  border-color: #f4597e;
  box-shadow: unset, 0 0 0 0 rgba(207, 60, 95, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #000;
  background-color: #f56c8d;
  border-color: #f4597e;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(207, 60, 95, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #000;
  background-color: var(--bs-danger);
  border-color: var(--bs-danger);
}

.btn-light {
  color: #000;
  background-color: var(--bs-light);
  border-color: var(--bs-light);
  box-shadow: unset;
}
.btn-light:hover {
  color: #000;
  background-color: white;
  border-color: white;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: white;
  border-color: white;
  box-shadow: unset, 0 0 0 0 rgba(217, 217, 217, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: white;
  border-color: white;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(217, 217, 217, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: var(--bs-light);
  border-color: var(--bs-light);
}

.btn-dark {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  border-color: var(--bs-body-secondary-color);
  box-shadow: unset;
}
.btn-dark:hover {
  color: var(--bs-body-secondary-color);
  background-color: #2f3644;
  border-color: #2c3240;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: var(--bs-body-secondary-color);
  background-color: #2f3644;
  border-color: #2c3240;
  box-shadow: unset, 0 0 0 0 rgba(85, 92, 106, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: var(--bs-body-secondary-color);
  background-color: #2c3240;
  border-color: #292f3c;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(85, 92, 106, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  border-color: var(--bs-body-secondary-color);
}

.btn-outline-primary {
  color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.btn-outline-primary:hover {
  color: #000;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0 rgba(254, 105, 106, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(254, 105, 106, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: var(--bs-primary);
  background-color: transparent;
}

.btn-outline-accent {
  color: var(--bs-accent);
  border-color: var(--bs-accent);
}
.btn-outline-accent:hover {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-accent);
  border-color: var(--bs-accent);
}
.btn-check:focus + .btn-outline-accent, .btn-outline-accent:focus {
  box-shadow: 0 0 0 0 rgba(78, 84, 200, 0.5);
}
.btn-check:checked + .btn-outline-accent, .btn-check:active + .btn-outline-accent, .btn-outline-accent:active, .btn-outline-accent.active, .btn-outline-accent.dropdown-toggle.show {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-accent);
  border-color: var(--bs-accent);
}
.btn-check:checked + .btn-outline-accent:focus, .btn-check:active + .btn-outline-accent:focus, .btn-outline-accent:active:focus, .btn-outline-accent.active:focus, .btn-outline-accent.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(78, 84, 200, 0.5);
}
.btn-outline-accent:disabled, .btn-outline-accent.disabled {
  color: var(--bs-accent);
  background-color: transparent;
}

.btn-outline-secondary {
  color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
}
.btn-outline-secondary:hover {
  color: #000;
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0 rgba(243, 245, 249, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(243, 245, 249, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: var(--bs-gray-200);
  background-color: transparent;
}

.btn-outline-success {
  color: var(--bs-success);
  border-color: var(--bs-success);
}
.btn-outline-success:hover {
  color: #000;
  background-color: var(--bs-success);
  border-color: var(--bs-success);
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0 rgba(66, 214, 151, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-success);
  border-color: var(--bs-success);
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(66, 214, 151, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: var(--bs-success);
  background-color: transparent;
}

.btn-outline-info {
  color: var(--bs-info);
  border-color: var(--bs-info);
}
.btn-outline-info:hover {
  color: #000;
  background-color: var(--bs-info);
  border-color: var(--bs-info);
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0 rgba(105, 179, 254, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-info);
  border-color: var(--bs-info);
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(105, 179, 254, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: var(--bs-info);
  background-color: transparent;
}

.btn-outline-warning {
  color: var(--bs-warning);
  border-color: var(--bs-warning);
}
.btn-outline-warning:hover {
  color: #000;
  background-color: var(--bs-warning);
  border-color: var(--bs-warning);
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0 rgba(254, 165, 105, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-warning);
  border-color: var(--bs-warning);
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(254, 165, 105, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: var(--bs-warning);
  background-color: transparent;
}

.btn-outline-danger {
  color: var(--bs-danger);
  border-color: var(--bs-danger);
}
.btn-outline-danger:hover {
  color: #000;
  background-color: var(--bs-danger);
  border-color: var(--bs-danger);
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0 rgba(243, 71, 112, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-danger);
  border-color: var(--bs-danger);
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(243, 71, 112, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: var(--bs-danger);
  background-color: transparent;
}

.btn-outline-light {
  color: var(--bs-body-secondary-color);
  border-color: var(--bs-light);
}
.btn-outline-light:hover {
  color: #000;
  background-color: var(--bs-light);
  border-color: var(--bs-light);
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: var(--bs-light);
  border-color: var(--bs-light);
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(255, 255, 255, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: var(--bs-body-secondary-color);
  background-color: transparent;
}

.btn-outline-dark {
  color: var(--bs-body-secondary-color);
  border-color: var(--bs-body-secondary-color);
}
.btn-outline-dark:hover {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  border-color: var(--bs-body-secondary-color);
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0 rgba(55, 63, 80, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  border-color: var(--bs-body-secondary-color);
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: unset, 0 0 0 0 rgba(55, 63, 80, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: var(--bs-body-secondary-color);
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: var(--bs-primary);
  text-decoration: none;
}
.btn-link:hover {
  color: #fe3638;
  text-decoration: none;
}
.btn-link:focus {
  text-decoration: none;
}
.btn-link:disabled, .btn-link.disabled {
  color:var(--bs-gray);
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.0625rem;
  border-radius: 0.4375rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.425rem 1rem;
  font-size: 0.8125rem;
  border-radius: 0.25rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid;
  border-right: 0.275rem solid transparent;
  border-bottom: 0;
  border-left: 0.275rem solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: var(--bs-body-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.3125rem;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 500px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1280px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0;
  border-right: 0.275rem solid transparent;
  border-bottom: 0.275rem solid;
  border-left: 0.275rem solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid transparent;
  border-right: 0;
  border-bottom: 0.275rem solid transparent;
  border-left: 0.275rem solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid transparent;
  border-right: 0.275rem solid;
  border-bottom: 0.275rem solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.25rem 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-gray-300);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.425rem 1.3rem;
  clear: both;
  font-weight: 400;
  color: var(--bs-body-color);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--bs-primary);
  background-color: transparent;
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-primary);
  text-decoration: none;
  background-color: transparent;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--bs-gray-500);
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.3rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--bs-body-secondary-color);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.425rem 1.3rem;
  color: var(--bs-body-color);
}

.dropdown-menu-dark {
  color: rgba(255, 255, 255, 0.65);
  background-color: var(--bs-body-secondary-color);
  border-color: transparent;
  box-shadow: none;
}
.dropdown-menu-dark .dropdown-item {
  color: rgba(255, 255, 255, 0.65);
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: var(--bs-body-secondary-color);
  background-color: transparent;
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: var(--bs-body-secondary-color);
  background-color: transparent;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: rgba(255, 255, 255, 0.4);
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(255, 255, 255, 0.12);
}
.dropdown-menu-dark .dropdown-item-text {
  color: rgba(255, 255, 255, 0.65);
}
.dropdown-menu-dark .dropdown-header {
  color: var(--bs-body-secondary-color);
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 1.03125rem;
  padding-left: 1.03125rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 1.125rem;
  padding-left: 1.125rem;
}

.btn-group.show .dropdown-toggle {
  box-shadow: unset;
}
.btn-group.show .dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.75rem 1.25rem;
  font-weight: normal;
  color: var(--bs-body-color);
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--bs-primary);
}
.nav-link.disabled {
  color:var(--bs-gray);
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid var(--bs-gray-300);
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: transparent;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color:var(--bs-gray);
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--bs-primary);
  background-color: transparent;
  border-color: var(--bs-primary);
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.3125rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-primary);
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-right: 1rem;
  font-size: calc(1.3rem + 0.6vw);
  white-space: nowrap;
}
@media (min-width: 1200px) {
  .navbar-brand {
    font-size: 1.75rem;
  }
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.75rem 0.75rem;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 500px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-sm .offcanvas-top,
.navbar-expand-sm .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-md .offcanvas-top,
.navbar-expand-md .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-lg .offcanvas-top,
.navbar-expand-lg .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1280px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-xl .offcanvas-top,
.navbar-expand-xl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 1.125rem;
    padding-left: 1.125rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-xxl .offcanvas-top,
.navbar-expand-xxl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 1.125rem;
  padding-left: 1.125rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas {
  position: inherit;
  bottom: 0;
  z-index: 1000;
  flex-grow: 1;
  visibility: visible !important;
  background-color: transparent;
  border-right: 0;
  border-left: 0;
  transition: none;
  transform: none;
}
.navbar-expand .offcanvas-top,
.navbar-expand .offcanvas-bottom {
  height: auto;
  border-top: 0;
  border-bottom: 0;
}
.navbar-expand .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-light .navbar-brand {
  color: var(--bs-body-secondary-color);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: var(--bs-body-secondary-color);
}
.navbar-light .navbar-nav .nav-link {
  color: var(--bs-body-color);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: var(--bs-primary);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color:var(--bs-gray);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: var(--bs-primary);
}
.navbar-light .navbar-toggler {
  color: var(--bs-body-color);
  border-color: transparent;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%234b566b' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: var(--bs-body-color);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: var(--bs-primary);
}

.navbar-dark .navbar-brand {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.65);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.35);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.65);
  border-color: transparent;
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.65%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.65);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: var(--bs-body-secondary-color);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--bs-light);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.085);
  border-radius: 0.4375rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.4375rem - 1px);
  border-bottom-left-radius: calc(0.4375rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.625rem 1.25rem;
  margin-bottom: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.085);
}
.card-header:first-child {
  border-radius: calc(0.4375rem - 1px) calc(0.4375rem - 1px) 0 0;
}

.card-footer {
  padding: 0.625rem 1.25rem;
  background-color: transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.085);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.4375rem - 1px) calc(0.4375rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.625rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}
.card-header-tabs .nav-link.active {
  background-color: var(--bs-light);
  border-bottom-color: var(--bs-light);
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.4375rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.4375rem - 1px);
  border-bottom-left-radius: calc(0.4375rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.9375rem;
}
@media (min-width: 500px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  color: var(--bs-body-secondary-color);
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: var(--bs-body-secondary-color);
  background-color: transparent;
  box-shadow: inset 0 -1px 0 #dde4eb;
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23373f50'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23373f50'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #dde4eb;
  outline: 0;
  box-shadow: unset;
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: transparent;
  border: 1px solid #dde4eb;
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.4375rem;
  border-top-right-radius: 0.4375rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.4375rem;
  border-bottom-left-radius: 0.4375rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.4375rem - 1px);
  border-bottom-left-radius: calc(0.4375rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.4375rem;
  border-bottom-left-radius: 0.4375rem;
}

.accordion-body {
  padding: 1.25rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 0;
  font-size: 0.8125rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #a6acb7;
  content: var(--bs-breadcrumb-divider, "\\e90a") /* rtl: var(--bs-breadcrumb-divider, "\\e90a") */;
}
.breadcrumb-item.active {
  color:var(--bs-gray);
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: var(--bs-body-color);
  background-color: transparent;
  border: 1px solid transparent;
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: var(--bs-body-color);
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-200);
}
.page-link:focus {
  z-index: 3;
  color: #fe3638;
  background-color: var(--bs-gray-200);
  outline: 0;
  box-shadow: 0 0 0 0 rgba(254, 105, 106, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-primary);
  border-color: transparent;
}
.page-item.disabled .page-link {
  color:var(--bs-gray);
  pointer-events: none;
  background-color: var(--bs-light);
  border-color: var(--bs-gray-300);
}

.page-link {
  padding: 0.3125rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
}

.pagination-lg .page-link {
  padding: 0.425rem 1rem;
  font-size: 1.125rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.4375rem;
  border-bottom-left-radius: 0.4375rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.4375rem;
  border-bottom-right-radius: 0.4375rem;
}

.pagination-sm .page-link {
  padding: 0.175rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.625em;
  font-size: 0.75em;
  font-weight: normal;
  line-height: 1;
  color: var(--bs-body-secondary-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.175rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 0.75rem 1.125rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.4375rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: normal;
}

.alert-dismissible {
  padding-right: 3.375rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.9375rem 1.125rem;
}

.alert-primary {
  color: #e55f5f;
  background-color: var(--bs-light)0f0;
  border-color: #ffcbcb;
}
.alert-primary .alert-link {
  color: #b74c4c;
}

.alert-accent {
  color: #464cb4;
  background-color: #edeefa;
  border-color: #c1c3ec;
}
.alert-accent .alert-link {
  color: #383d90;
}

.alert-secondary {
  color: #dbdde0;
  background-color: #fefefe;
  border-color: #fbfcfd;
}
.alert-secondary .alert-link {
  color: #afb1b3;
}

.alert-success {
  color: #3bc188;
  background-color: #ecfbf5;
  border-color: #bdf1db;
}
.alert-success .alert-link {
  color: #2f9a6d;
}

.alert-info {
  color: #5fa1e5;
  background-color: #f0f7ff;
  border-color: #cbe4ff;
}
.alert-info .alert-link {
  color: #4c81b7;
}

.alert-warning {
  color: #e5955f;
  background-color: var(--bs-light)6f0;
  border-color: #ffe0cb;
}
.alert-warning .alert-link {
  color: #b7774c;
}

.alert-danger {
  color: #db4065;
  background-color: #feedf1;
  border-color: #fbbfcd;
}
.alert-danger .alert-link {
  color: #af3351;
}

.alert-light {
  color: #e6e6e6;
  background-color: white;
  border-color: white;
}
.alert-light .alert-link {
  color: #b8b8b8;
}

.alert-dark {
  color: #323948;
  background-color: #ebecee;
  border-color: #b9bcc2;
}
.alert-dark .alert-link {
  color: #282e3a;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: var(--bs-gray-200);
  border-radius: 0.3125rem;
  box-shadow: inset 0 1px 2px transparent;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-body-secondary-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-primary);
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.4375rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-body-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-body-color);
  text-decoration: none;
  background-color: var(--bs-gray-100);
}
.list-group-item-action:active {
  color: var(--bs-body-color);
  background-color: var(--bs-gray-100);
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  color: var(--bs-body-color);
  background-color: var(--bs-light);
  border: 1px solid rgba(0, 0, 0, 0.085);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color:var(--bs-gray);
  pointer-events: none;
  background-color: var(--bs-light);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.4375rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.4375rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 500px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.4375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.4375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.4375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.4375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.4375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.4375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1280px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.4375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.4375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.4375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.4375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #e55f5f;
  background-color: var(--bs-light)0f0;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #e55f5f;
  background-color: #e6d8d8;
}
.list-group-item-primary.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #e55f5f;
  border-color: #e55f5f;
}

.list-group-item-accent {
  color: #464cb4;
  background-color: #edeefa;
}
.list-group-item-accent.list-group-item-action:hover, .list-group-item-accent.list-group-item-action:focus {
  color: #464cb4;
  background-color: #d5d6e1;
}
.list-group-item-accent.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #464cb4;
  border-color: #464cb4;
}

.list-group-item-secondary {
  color: #dbdde0;
  background-color: #fefefe;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #dbdde0;
  background-color: #e5e5e5;
}
.list-group-item-secondary.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #dbdde0;
  border-color: #dbdde0;
}

.list-group-item-success {
  color: #3bc188;
  background-color: #ecfbf5;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #3bc188;
  background-color: #d4e2dd;
}
.list-group-item-success.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #3bc188;
  border-color: #3bc188;
}

.list-group-item-info {
  color: #5fa1e5;
  background-color: #f0f7ff;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #5fa1e5;
  background-color: #d8dee6;
}
.list-group-item-info.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #5fa1e5;
  border-color: #5fa1e5;
}

.list-group-item-warning {
  color: #e5955f;
  background-color: var(--bs-light)6f0;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #e5955f;
  background-color: #e6ddd8;
}
.list-group-item-warning.list-group-item-action.active {
 color: var(--bs-body-secondary-color);
  background-color: #e5955f;
  border-color: #e5955f;
}

.list-group-item-danger {
  color: #db4065;
  background-color: #feedf1;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #db4065;
  background-color: #e5d5d9;
}
.list-group-item-danger.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #db4065;
  border-color: #db4065;
}

.list-group-item-light {
  color: #e6e6e6;
  background-color: white;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #e6e6e6;
  background-color: #e6e6e6;
}
.list-group-item-light.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #e6e6e6;
  border-color: #e6e6e6;
}

.list-group-item-dark {
  color: #323948;
  background-color: #ebecee;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #323948;
  background-color: #d4d4d6;
}
.list-group-item-dark.list-group-item-action.active {
  color: var(--bs-body-secondary-color);
  background-color: #323948;
  border-color: #323948;
}

.btn-close {
  box-sizing: content-box;
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.25rem 0.25rem;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/0.75rem auto no-repeat;
  border: 0;
  border-radius: 0.3125rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: none;
  opacity: 0.75;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 0 solid transparent;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  border-radius: 0.3125rem;
}
.toast.showing {
  opacity: 0;
}
.toast:not(.show) {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.9375rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color:var(--bs-gray);
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 0 solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.4375rem;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--bs-gray-300);
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.625rem;
  margin: -0.5rem -0.625rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid var(--bs-gray-300);
  border-bottom-right-radius: calc(0.4375rem - 1px);
  border-bottom-left-radius: calc(0.4375rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 500px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-content {
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1280px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 499.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1279.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0.25rem;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.75rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 1;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: var(--bs-gray-900);
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: var(--bs-gray-900);
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: var(--bs-gray-900);
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: var(--bs-gray-900);
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: var(--bs-body-secondary-color);
  text-align: center;
  background-color: var(--bs-gray-900);
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.3125rem;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #d3dce6;
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: var(--bs-light);
}

.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #d3dce6;
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: var(--bs-light);
}

.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #d3dce6;
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: var(--bs-light);
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid var(--bs-gray-100);
}

.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #d3dce6;
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: var(--bs-light);
}

.popover-header {
  padding: 0.75rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-gray-100);
  border-bottom: 1px solid var(--bs-gray-300);
  border-top-left-radius: calc(0.3125rem - 1px);
  border-top-right-radius: calc(0.3125rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color:var(--bs-gray);
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: var(--bs-body-secondary-color);
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: var(--bs-body-secondary-color);
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: var(--bs-light);
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: var(--bs-body-secondary-color);
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.15em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.1em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1080;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: var(--bs-light);
  background-clip: padding-box;
  outline: 0;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.offcanvas-backdrop.fade {
  opacity: 0;
}
.offcanvas-backdrop.show {
  opacity: 0.5;
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
}
.offcanvas-header .btn-close {
  padding: 0.625rem 0.75rem;
  margin-top: -0.625rem;
  margin-right: -0.75rem;
  margin-bottom: -0.625rem;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: initial;
}

.offcanvas-body {
  flex-grow: 1;
  padding: 1.25rem 1.5rem;
  overflow-y: auto;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 20rem;
  border-right: 0 solid transparent;
  transform: translateX(-100%);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 20rem;
  border-left: 0 solid transparent;
  transform: translateX(100%);
}

.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 0 solid transparent;
  transform: translateY(-100%);
}

.offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 0 solid transparent;
  transform: translateY(100%);
}

.offcanvas.show {
  transform: none;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentColor;
  opacity: 0.4;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  -webkit-animation: placeholder-glow 2s ease-in-out infinite;
  animation: placeholder-glow 2s ease-in-out infinite;
}

@-webkit-keyframes placeholder-glow {
  50% {
    opacity: 0.15;
  }
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.15;
  }
}
.placeholder-wave {
  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.85) 75%, #000 95%);
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.85) 75%, #000 95%);
  -webkit-mask-size: 200% 100%;
  mask-size: 200% 100%;
  -webkit-animation: placeholder-wave 2s linear infinite;
  animation: placeholder-wave 2s linear infinite;
}

@-webkit-keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}

@keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: var(--bs-primary);
}
.link-primary:hover, .link-primary:focus {
  color: var(--bs-primary);
}

.link-accent {
  color: var(--bs-accent);
}
.link-accent:hover, .link-accent:focus {
  color: var(--bs-accent);
}

.link-secondary {
  color: var(--bs-gray-200);
}
.link-secondary:hover, .link-secondary:focus {
  color: var(--bs-gray-200);
}

.link-success {
  color: var(--bs-success);
}
.link-success:hover, .link-success:focus {
  color: var(--bs-success);
}

.link-info {
  color: var(--bs-info);
}
.link-info:hover, .link-info:focus {
  color: var(--bs-info);
}

.link-warning {
  color: var(--bs-warning);
}
.link-warning:hover, .link-warning:focus {
  color: var(--bs-warning);
}

.link-danger {
  color: var(--bs-danger);
}
.link-danger:hover, .link-danger:focus {
  color: var(--bs-danger);
}

.link-light {
  color: var(--bs-body-secondary-color);
}
.link-light:hover, .link-light:focus {
  color: white;
}

.link-dark {
  color: var(--bs-body-secondary-color);
}
.link-dark:hover, .link-dark:focus {
  color: var(--bs-body-secondary-color);
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 500px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1280px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  background-color: currentColor;
  opacity: 1;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.opacity-15 {
  opacity: 0.15 !important;
}

.opacity-25 {
  opacity: 0.25 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-60 {
  opacity: 0.6 !important;
}

.opacity-70 {
  opacity: 0.7 !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.opacity-80 {
  opacity: 0.8 !important;
}

.opacity-90 {
  opacity: 0.9 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.3rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.06) !important;
}

.shadow-lg {
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid var(--bs-gray-300) !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid var(--bs-gray-300) !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid var(--bs-gray-300) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid var(--bs-gray-300) !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid var(--bs-gray-300) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: rgba(254, 105, 106, 0.35) !important;
}

.border-accent {
  border-color: rgba(78, 84, 200, 0.35) !important;
}

.border-success {
  border-color: rgba(66, 214, 151, 0.35) !important;
}

.border-info {
  border-color: rgba(105, 179, 254, 0.35) !important;
}

.border-warning {
  border-color: rgba(254, 165, 105, 0.35) !important;
}

.border-danger {
  border-color: rgba(243, 71, 112, 0.35) !important;
}

.border-light {
  border-color: rgba(255, 255, 255, 0.12) !important;
}

.border-dark {
  border-color: rgba(55, 63, 80, 0.35) !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.gap-10 {
  gap: 10rem !important;
}

.gap-grid-gutter {
  gap: 1.875rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-10 {
  margin: 10rem !important;
}

.m-grid-gutter {
  margin: 1.875rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-10 {
  margin-right: 10rem !important;
  margin-left: 10rem !important;
}

.mx-grid-gutter {
  margin-right: 1.875rem !important;
  margin-left: 1.875rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-10 {
  margin-top: 10rem !important;
  margin-bottom: 10rem !important;
}

.my-grid-gutter {
  margin-top: 1.875rem !important;
  margin-bottom: 1.875rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-10 {
  margin-top: 10rem !important;
}

.mt-grid-gutter {
  margin-top: 1.875rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-10 {
  margin-right: 10rem !important;
}

.me-grid-gutter {
  margin-right: 1.875rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-10 {
  margin-bottom: 10rem !important;
}

.mb-grid-gutter {
  margin-bottom: 1.875rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-10 {
  margin-left: 10rem !important;
}

.ms-grid-gutter {
  margin-left: 1.875rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.m-n10 {
  margin: -10rem !important;
}

.m-ngrid-gutter {
  margin: -1.875rem !important;
}

.mx-n1 {
  margin-right: -0.25rem !important;
  margin-left: -0.25rem !important;
}

.mx-n2 {
  margin-right: -0.5rem !important;
  margin-left: -0.5rem !important;
}

.mx-n3 {
  margin-right: -1rem !important;
  margin-left: -1rem !important;
}

.mx-n4 {
  margin-right: -1.5rem !important;
  margin-left: -1.5rem !important;
}

.mx-n5 {
  margin-right: -3rem !important;
  margin-left: -3rem !important;
}

.mx-n10 {
  margin-right: -10rem !important;
  margin-left: -10rem !important;
}

.mx-ngrid-gutter {
  margin-right: -1.875rem !important;
  margin-left: -1.875rem !important;
}

.my-n1 {
  margin-top: -0.25rem !important;
  margin-bottom: -0.25rem !important;
}

.my-n2 {
  margin-top: -0.5rem !important;
  margin-bottom: -0.5rem !important;
}

.my-n3 {
  margin-top: -1rem !important;
  margin-bottom: -1rem !important;
}

.my-n4 {
  margin-top: -1.5rem !important;
  margin-bottom: -1.5rem !important;
}

.my-n5 {
  margin-top: -3rem !important;
  margin-bottom: -3rem !important;
}

.my-n10 {
  margin-top: -10rem !important;
  margin-bottom: -10rem !important;
}

.my-ngrid-gutter {
  margin-top: -1.875rem !important;
  margin-bottom: -1.875rem !important;
}

.mt-n1 {
  margin-top: -0.25rem !important;
}

.mt-n2 {
  margin-top: -0.5rem !important;
}

.mt-n3 {
  margin-top: -1rem !important;
}

.mt-n4 {
  margin-top: -1.5rem !important;
}

.mt-n5 {
  margin-top: -3rem !important;
}

.mt-n10 {
  margin-top: -10rem !important;
}

.mt-ngrid-gutter {
  margin-top: -1.875rem !important;
}

.me-n1 {
  margin-right: -0.25rem !important;
}

.me-n2 {
  margin-right: -0.5rem !important;
}

.me-n3 {
  margin-right: -1rem !important;
}

.me-n4 {
  margin-right: -1.5rem !important;
}

.me-n5 {
  margin-right: -3rem !important;
}

.me-n10 {
  margin-right: -10rem !important;
}

.me-ngrid-gutter {
  margin-right: -1.875rem !important;
}

.mb-n1 {
  margin-bottom: -0.25rem !important;
}

.mb-n2 {
  margin-bottom: -0.5rem !important;
}

.mb-n3 {
  margin-bottom: -1rem !important;
}

.mb-n4 {
  margin-bottom: -1.5rem !important;
}

.mb-n5 {
  margin-bottom: -3rem !important;
}

.mb-n10 {
  margin-bottom: -10rem !important;
}

.mb-ngrid-gutter {
  margin-bottom: -1.875rem !important;
}

.ms-n1 {
  margin-left: -0.25rem !important;
}

.ms-n2 {
  margin-left: -0.5rem !important;
}

.ms-n3 {
  margin-left: -1rem !important;
}

.ms-n4 {
  margin-left: -1.5rem !important;
}

.ms-n5 {
  margin-left: -3rem !important;
}

.ms-n10 {
  margin-left: -10rem !important;
}

.ms-ngrid-gutter {
  margin-left: -1.875rem !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.p-10 {
  padding: 10rem !important;
}

.p-grid-gutter {
  padding: 1.875rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.px-10 {
  padding-right: 10rem !important;
  padding-left: 10rem !important;
}

.px-grid-gutter {
  padding-right: 1.875rem !important;
  padding-left: 1.875rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.py-10 {
  padding-top: 10rem !important;
  padding-bottom: 10rem !important;
}

.py-grid-gutter {
  padding-top: 1.875rem !important;
  padding-bottom: 1.875rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pt-10 {
  padding-top: 10rem !important;
}

.pt-grid-gutter {
  padding-top: 1.875rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pe-10 {
  padding-right: 10rem !important;
}

.pe-grid-gutter {
  padding-right: 1.875rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.pb-10 {
  padding-bottom: 10rem !important;
}

.pb-grid-gutter {
  padding-bottom: 1.875rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.ps-10 {
  padding-left: 10rem !important;
}

.ps-grid-gutter {
  padding-left: 1.875rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1.0625rem !important;
}

.fs-xl {
  font-size: calc(1.2875rem + 0.45vw) !important;
}

.fs-lg {
  font-size: 1.125rem !important;
}

.fs-base {
  font-size: 1rem !important;
}

.fs-md {
  font-size: 0.9375rem !important;
}

.fs-sm {
  font-size: 0.875rem !important;
}

.fs-ms {
  font-size: 0.8125rem !important;
}

.fs-xs {
  font-size: 0.75rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.5 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 1.5 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  color: var(--bs-primary) !important;
}

.text-accent {
  color: var(--bs-accent) !important;
}

.text-secondary {
  color: var(--bs-gray-200) !important;
}

.text-success {
  color: var(--bs-success) !important;
}

.text-info {
  color: var(--bs-info) !important;
}

.text-warning {
  color: var(--bs-warning) !important;
}

.text-danger {
  color: var(--bs-danger) !important;
}

.text-light {
  color: var(--bs-body-secondary-color) !important;
}

.text-dark {
  color: var(--bs-body-secondary-color) !important;
}

.text-white {
  color: var(--bs-body-secondary-color) !important;
}

.text-body {
  color: var(--bs-body-color) !important;
}

.text-muted {
  color:var(--bs-gray) !important;
}

.text-heading {
  color: var(--bs-body-secondary-color) !important;
}

.text-border {
  color: #c9d5e0 !important;
}

.text-reset {
  color: inherit !important;
}

.text-opacity-25 {
  --bs-text-opacity: 0.25;
}

.text-opacity-50 {
  --bs-text-opacity: 0.5;
}

.text-opacity-75 {
  --bs-text-opacity: 0.75;
}

.text-opacity-100 {
  --bs-text-opacity: 1;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-accent {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-accent-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: var(--bs-gray-100) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
  --bs-bg-opacity: 1;
  background-color: #000 !important;
}

.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}

.bg-darker {
  --bs-bg-opacity: 1;
  background-color: var(--bs-gray-900) !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
  --bs-bg-opacity: 1;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.3125rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.25rem !important;
}

.rounded-2 {
  border-radius: 0.3125rem !important;
}

.rounded-3 {
  border-radius: 0.4375rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.3125rem !important;
  border-top-right-radius: 0.3125rem !important;
}

.rounded-end {
  border-top-right-radius: 0.3125rem !important;
  border-bottom-right-radius: 0.3125rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.3125rem !important;
  border-bottom-left-radius: 0.3125rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.3125rem !important;
  border-top-left-radius: 0.3125rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.bg-image-none {
  background-image: none !important;
}

.bg-none {
  background: none !important;
}

.bg-faded-primary {
  background-color: rgba(254, 105, 106, 0.09) !important;
}

.bg-faded-accent {
  background-color: rgba(78, 84, 200, 0.09) !important;
}

.bg-faded-success {
  background-color: rgba(66, 214, 151, 0.09) !important;
}

.bg-faded-info {
  background-color: rgba(105, 179, 254, 0.09) !important;
}

.bg-faded-warning {
  background-color: rgba(254, 165, 105, 0.09) !important;
}

.bg-faded-danger {
  background-color: rgba(243, 71, 112, 0.09) !important;
}

.bg-faded-light {
  background-color: rgba(255, 255, 255, 0.09) !important;
}

.bg-faded-dark {
  background-color: rgba(55, 63, 80, 0.09) !important;
}

.bg-size-cover {
  background-size: cover !important;
}

.bg-size-contain {
  background-size: contain !important;
}

.bg-position-center {
  background-position: center !important;
}

.bg-position-center-y {
  background-position: left center !important;
}

.bg-position-center-x {
  background-position: center top !important;
}

.bg-position-top-right {
  background-position: top right !important;
}

.bg-position-top-left {
  background-position: top left !important;
}

.bg-position-top-center {
  background-position: top center !important;
}

.bg-position-center-right {
  background-position: center right !important;
}

.bg-position-center-left {
  background-position: center left !important;
}

.bg-position-bottom-right {
  background-position: bottom right !important;
}

.bg-position-bottom-left {
  background-position: bottom left !important;
}

.bg-position-bottom-center {
  background-position: bottom center !important;
}

.bg-repeat-0 {
  background-repeat: no-repeat !important;
}

.bg-repeat-x {
  background-repeat: repeat-x !important;
}

.bg-repeat-y {
  background-repeat: repeat-y !important;
}

.text-shadow {
  text-shadow: 0 0.0625rem rgba(0, 0, 0, 0.5) !important;
}

.table-layout-fixed {
  table-layout: fixed !important;
}

.animation-none {
  -webkit-animation: none !important;
  animation: none !important;
}

.zindex-1 {
  z-index: 1 !important;
}

.zindex-5 {
  z-index: 5 !important;
}

.zindex-10 {
  z-index: 10 !important;
}

@media (min-width: 500px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .gap-sm-10 {
    gap: 10rem !important;
  }

  .gap-sm-grid-gutter {
    gap: 1.875rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-10 {
    margin: 10rem !important;
  }

  .m-sm-grid-gutter {
    margin: 1.875rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-10 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }

  .mx-sm-grid-gutter {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-10 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }

  .my-sm-grid-gutter {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-10 {
    margin-top: 10rem !important;
  }

  .mt-sm-grid-gutter {
    margin-top: 1.875rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-10 {
    margin-right: 10rem !important;
  }

  .me-sm-grid-gutter {
    margin-right: 1.875rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-10 {
    margin-bottom: 10rem !important;
  }

  .mb-sm-grid-gutter {
    margin-bottom: 1.875rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-10 {
    margin-left: 10rem !important;
  }

  .ms-sm-grid-gutter {
    margin-left: 1.875rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .m-sm-n1 {
    margin: -0.25rem !important;
  }

  .m-sm-n2 {
    margin: -0.5rem !important;
  }

  .m-sm-n3 {
    margin: -1rem !important;
  }

  .m-sm-n4 {
    margin: -1.5rem !important;
  }

  .m-sm-n5 {
    margin: -3rem !important;
  }

  .m-sm-n10 {
    margin: -10rem !important;
  }

  .m-sm-ngrid-gutter {
    margin: -1.875rem !important;
  }

  .mx-sm-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }

  .mx-sm-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }

  .mx-sm-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }

  .mx-sm-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }

  .mx-sm-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }

  .mx-sm-n10 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }

  .mx-sm-ngrid-gutter {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }

  .my-sm-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }

  .my-sm-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }

  .my-sm-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }

  .my-sm-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }

  .my-sm-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }

  .my-sm-n10 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }

  .my-sm-ngrid-gutter {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }

  .mt-sm-n1 {
    margin-top: -0.25rem !important;
  }

  .mt-sm-n2 {
    margin-top: -0.5rem !important;
  }

  .mt-sm-n3 {
    margin-top: -1rem !important;
  }

  .mt-sm-n4 {
    margin-top: -1.5rem !important;
  }

  .mt-sm-n5 {
    margin-top: -3rem !important;
  }

  .mt-sm-n10 {
    margin-top: -10rem !important;
  }

  .mt-sm-ngrid-gutter {
    margin-top: -1.875rem !important;
  }

  .me-sm-n1 {
    margin-right: -0.25rem !important;
  }

  .me-sm-n2 {
    margin-right: -0.5rem !important;
  }

  .me-sm-n3 {
    margin-right: -1rem !important;
  }

  .me-sm-n4 {
    margin-right: -1.5rem !important;
  }

  .me-sm-n5 {
    margin-right: -3rem !important;
  }

  .me-sm-n10 {
    margin-right: -10rem !important;
  }

  .me-sm-ngrid-gutter {
    margin-right: -1.875rem !important;
  }

  .mb-sm-n1 {
    margin-bottom: -0.25rem !important;
  }

  .mb-sm-n2 {
    margin-bottom: -0.5rem !important;
  }

  .mb-sm-n3 {
    margin-bottom: -1rem !important;
  }

  .mb-sm-n4 {
    margin-bottom: -1.5rem !important;
  }

  .mb-sm-n5 {
    margin-bottom: -3rem !important;
  }

  .mb-sm-n10 {
    margin-bottom: -10rem !important;
  }

  .mb-sm-ngrid-gutter {
    margin-bottom: -1.875rem !important;
  }

  .ms-sm-n1 {
    margin-left: -0.25rem !important;
  }

  .ms-sm-n2 {
    margin-left: -0.5rem !important;
  }

  .ms-sm-n3 {
    margin-left: -1rem !important;
  }

  .ms-sm-n4 {
    margin-left: -1.5rem !important;
  }

  .ms-sm-n5 {
    margin-left: -3rem !important;
  }

  .ms-sm-n10 {
    margin-left: -10rem !important;
  }

  .ms-sm-ngrid-gutter {
    margin-left: -1.875rem !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .p-sm-10 {
    padding: 10rem !important;
  }

  .p-sm-grid-gutter {
    padding: 1.875rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .px-sm-10 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }

  .px-sm-grid-gutter {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .py-sm-10 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .py-sm-grid-gutter {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pt-sm-10 {
    padding-top: 10rem !important;
  }

  .pt-sm-grid-gutter {
    padding-top: 1.875rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pe-sm-10 {
    padding-right: 10rem !important;
  }

  .pe-sm-grid-gutter {
    padding-right: 1.875rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .pb-sm-10 {
    padding-bottom: 10rem !important;
  }

  .pb-sm-grid-gutter {
    padding-bottom: 1.875rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .ps-sm-10 {
    padding-left: 10rem !important;
  }

  .ps-sm-grid-gutter {
    padding-left: 1.875rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }

  .text-sm-wrap {
    white-space: normal !important;
  }

  .text-sm-nowrap {
    white-space: nowrap !important;
  }

  .zindex-sm-1 {
    z-index: 1 !important;
  }

  .zindex-sm-5 {
    z-index: 5 !important;
  }

  .zindex-sm-10 {
    z-index: 10 !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .gap-md-10 {
    gap: 10rem !important;
  }

  .gap-md-grid-gutter {
    gap: 1.875rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-10 {
    margin: 10rem !important;
  }

  .m-md-grid-gutter {
    margin: 1.875rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-10 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }

  .mx-md-grid-gutter {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-10 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }

  .my-md-grid-gutter {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-10 {
    margin-top: 10rem !important;
  }

  .mt-md-grid-gutter {
    margin-top: 1.875rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-10 {
    margin-right: 10rem !important;
  }

  .me-md-grid-gutter {
    margin-right: 1.875rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-10 {
    margin-bottom: 10rem !important;
  }

  .mb-md-grid-gutter {
    margin-bottom: 1.875rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-10 {
    margin-left: 10rem !important;
  }

  .ms-md-grid-gutter {
    margin-left: 1.875rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .m-md-n1 {
    margin: -0.25rem !important;
  }

  .m-md-n2 {
    margin: -0.5rem !important;
  }

  .m-md-n3 {
    margin: -1rem !important;
  }

  .m-md-n4 {
    margin: -1.5rem !important;
  }

  .m-md-n5 {
    margin: -3rem !important;
  }

  .m-md-n10 {
    margin: -10rem !important;
  }

  .m-md-ngrid-gutter {
    margin: -1.875rem !important;
  }

  .mx-md-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }

  .mx-md-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }

  .mx-md-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }

  .mx-md-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }

  .mx-md-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }

  .mx-md-n10 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }

  .mx-md-ngrid-gutter {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }

  .my-md-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }

  .my-md-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }

  .my-md-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }

  .my-md-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }

  .my-md-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }

  .my-md-n10 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }

  .my-md-ngrid-gutter {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }

  .mt-md-n1 {
    margin-top: -0.25rem !important;
  }

  .mt-md-n2 {
    margin-top: -0.5rem !important;
  }

  .mt-md-n3 {
    margin-top: -1rem !important;
  }

  .mt-md-n4 {
    margin-top: -1.5rem !important;
  }

  .mt-md-n5 {
    margin-top: -3rem !important;
  }

  .mt-md-n10 {
    margin-top: -10rem !important;
  }

  .mt-md-ngrid-gutter {
    margin-top: -1.875rem !important;
  }

  .me-md-n1 {
    margin-right: -0.25rem !important;
  }

  .me-md-n2 {
    margin-right: -0.5rem !important;
  }

  .me-md-n3 {
    margin-right: -1rem !important;
  }

  .me-md-n4 {
    margin-right: -1.5rem !important;
  }

  .me-md-n5 {
    margin-right: -3rem !important;
  }

  .me-md-n10 {
    margin-right: -10rem !important;
  }

  .me-md-ngrid-gutter {
    margin-right: -1.875rem !important;
  }

  .mb-md-n1 {
    margin-bottom: -0.25rem !important;
  }

  .mb-md-n2 {
    margin-bottom: -0.5rem !important;
  }

  .mb-md-n3 {
    margin-bottom: -1rem !important;
  }

  .mb-md-n4 {
    margin-bottom: -1.5rem !important;
  }

  .mb-md-n5 {
    margin-bottom: -3rem !important;
  }

  .mb-md-n10 {
    margin-bottom: -10rem !important;
  }

  .mb-md-ngrid-gutter {
    margin-bottom: -1.875rem !important;
  }

  .ms-md-n1 {
    margin-left: -0.25rem !important;
  }

  .ms-md-n2 {
    margin-left: -0.5rem !important;
  }

  .ms-md-n3 {
    margin-left: -1rem !important;
  }

  .ms-md-n4 {
    margin-left: -1.5rem !important;
  }

  .ms-md-n5 {
    margin-left: -3rem !important;
  }

  .ms-md-n10 {
    margin-left: -10rem !important;
  }

  .ms-md-ngrid-gutter {
    margin-left: -1.875rem !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .p-md-10 {
    padding: 10rem !important;
  }

  .p-md-grid-gutter {
    padding: 1.875rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .px-md-10 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }

  .px-md-grid-gutter {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .py-md-10 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .py-md-grid-gutter {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pt-md-10 {
    padding-top: 10rem !important;
  }

  .pt-md-grid-gutter {
    padding-top: 1.875rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pe-md-10 {
    padding-right: 10rem !important;
  }

  .pe-md-grid-gutter {
    padding-right: 1.875rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .pb-md-10 {
    padding-bottom: 10rem !important;
  }

  .pb-md-grid-gutter {
    padding-bottom: 1.875rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .ps-md-10 {
    padding-left: 10rem !important;
  }

  .ps-md-grid-gutter {
    padding-left: 1.875rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }

  .text-md-wrap {
    white-space: normal !important;
  }

  .text-md-nowrap {
    white-space: nowrap !important;
  }

  .zindex-md-1 {
    z-index: 1 !important;
  }

  .zindex-md-5 {
    z-index: 5 !important;
  }

  .zindex-md-10 {
    z-index: 10 !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .gap-lg-10 {
    gap: 10rem !important;
  }

  .gap-lg-grid-gutter {
    gap: 1.875rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-10 {
    margin: 10rem !important;
  }

  .m-lg-grid-gutter {
    margin: 1.875rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-10 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }

  .mx-lg-grid-gutter {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-10 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }

  .my-lg-grid-gutter {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-10 {
    margin-top: 10rem !important;
  }

  .mt-lg-grid-gutter {
    margin-top: 1.875rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-10 {
    margin-right: 10rem !important;
  }

  .me-lg-grid-gutter {
    margin-right: 1.875rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-10 {
    margin-bottom: 10rem !important;
  }

  .mb-lg-grid-gutter {
    margin-bottom: 1.875rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-10 {
    margin-left: 10rem !important;
  }

  .ms-lg-grid-gutter {
    margin-left: 1.875rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .m-lg-n1 {
    margin: -0.25rem !important;
  }

  .m-lg-n2 {
    margin: -0.5rem !important;
  }

  .m-lg-n3 {
    margin: -1rem !important;
  }

  .m-lg-n4 {
    margin: -1.5rem !important;
  }

  .m-lg-n5 {
    margin: -3rem !important;
  }

  .m-lg-n10 {
    margin: -10rem !important;
  }

  .m-lg-ngrid-gutter {
    margin: -1.875rem !important;
  }

  .mx-lg-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }

  .mx-lg-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }

  .mx-lg-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }

  .mx-lg-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }

  .mx-lg-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }

  .mx-lg-n10 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }

  .mx-lg-ngrid-gutter {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }

  .my-lg-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }

  .my-lg-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }

  .my-lg-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }

  .my-lg-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }

  .my-lg-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }

  .my-lg-n10 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }

  .my-lg-ngrid-gutter {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }

  .mt-lg-n1 {
    margin-top: -0.25rem !important;
  }

  .mt-lg-n2 {
    margin-top: -0.5rem !important;
  }

  .mt-lg-n3 {
    margin-top: -1rem !important;
  }

  .mt-lg-n4 {
    margin-top: -1.5rem !important;
  }

  .mt-lg-n5 {
    margin-top: -3rem !important;
  }

  .mt-lg-n10 {
    margin-top: -10rem !important;
  }

  .mt-lg-ngrid-gutter {
    margin-top: -1.875rem !important;
  }

  .me-lg-n1 {
    margin-right: -0.25rem !important;
  }

  .me-lg-n2 {
    margin-right: -0.5rem !important;
  }

  .me-lg-n3 {
    margin-right: -1rem !important;
  }

  .me-lg-n4 {
    margin-right: -1.5rem !important;
  }

  .me-lg-n5 {
    margin-right: -3rem !important;
  }

  .me-lg-n10 {
    margin-right: -10rem !important;
  }

  .me-lg-ngrid-gutter {
    margin-right: -1.875rem !important;
  }

  .mb-lg-n1 {
    margin-bottom: -0.25rem !important;
  }

  .mb-lg-n2 {
    margin-bottom: -0.5rem !important;
  }

  .mb-lg-n3 {
    margin-bottom: -1rem !important;
  }

  .mb-lg-n4 {
    margin-bottom: -1.5rem !important;
  }

  .mb-lg-n5 {
    margin-bottom: -3rem !important;
  }

  .mb-lg-n10 {
    margin-bottom: -10rem !important;
  }

  .mb-lg-ngrid-gutter {
    margin-bottom: -1.875rem !important;
  }

  .ms-lg-n1 {
    margin-left: -0.25rem !important;
  }

  .ms-lg-n2 {
    margin-left: -0.5rem !important;
  }

  .ms-lg-n3 {
    margin-left: -1rem !important;
  }

  .ms-lg-n4 {
    margin-left: -1.5rem !important;
  }

  .ms-lg-n5 {
    margin-left: -3rem !important;
  }

  .ms-lg-n10 {
    margin-left: -10rem !important;
  }

  .ms-lg-ngrid-gutter {
    margin-left: -1.875rem !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .p-lg-10 {
    padding: 10rem !important;
  }

  .p-lg-grid-gutter {
    padding: 1.875rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .px-lg-10 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }

  .px-lg-grid-gutter {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .py-lg-10 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .py-lg-grid-gutter {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pt-lg-10 {
    padding-top: 10rem !important;
  }

  .pt-lg-grid-gutter {
    padding-top: 1.875rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pe-lg-10 {
    padding-right: 10rem !important;
  }

  .pe-lg-grid-gutter {
    padding-right: 1.875rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .pb-lg-10 {
    padding-bottom: 10rem !important;
  }

  .pb-lg-grid-gutter {
    padding-bottom: 1.875rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .ps-lg-10 {
    padding-left: 10rem !important;
  }

  .ps-lg-grid-gutter {
    padding-left: 1.875rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }

  .text-lg-wrap {
    white-space: normal !important;
  }

  .text-lg-nowrap {
    white-space: nowrap !important;
  }

  .zindex-lg-1 {
    z-index: 1 !important;
  }

  .zindex-lg-5 {
    z-index: 5 !important;
  }

  .zindex-lg-10 {
    z-index: 10 !important;
  }
}
@media (min-width: 1280px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .gap-xl-10 {
    gap: 10rem !important;
  }

  .gap-xl-grid-gutter {
    gap: 1.875rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-10 {
    margin: 10rem !important;
  }

  .m-xl-grid-gutter {
    margin: 1.875rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-10 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }

  .mx-xl-grid-gutter {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-10 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }

  .my-xl-grid-gutter {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-10 {
    margin-top: 10rem !important;
  }

  .mt-xl-grid-gutter {
    margin-top: 1.875rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-10 {
    margin-right: 10rem !important;
  }

  .me-xl-grid-gutter {
    margin-right: 1.875rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-10 {
    margin-bottom: 10rem !important;
  }

  .mb-xl-grid-gutter {
    margin-bottom: 1.875rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-10 {
    margin-left: 10rem !important;
  }

  .ms-xl-grid-gutter {
    margin-left: 1.875rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .m-xl-n1 {
    margin: -0.25rem !important;
  }

  .m-xl-n2 {
    margin: -0.5rem !important;
  }

  .m-xl-n3 {
    margin: -1rem !important;
  }

  .m-xl-n4 {
    margin: -1.5rem !important;
  }

  .m-xl-n5 {
    margin: -3rem !important;
  }

  .m-xl-n10 {
    margin: -10rem !important;
  }

  .m-xl-ngrid-gutter {
    margin: -1.875rem !important;
  }

  .mx-xl-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }

  .mx-xl-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }

  .mx-xl-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }

  .mx-xl-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }

  .mx-xl-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }

  .mx-xl-n10 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }

  .mx-xl-ngrid-gutter {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }

  .my-xl-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }

  .my-xl-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }

  .my-xl-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }

  .my-xl-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }

  .my-xl-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }

  .my-xl-n10 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }

  .my-xl-ngrid-gutter {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }

  .mt-xl-n1 {
    margin-top: -0.25rem !important;
  }

  .mt-xl-n2 {
    margin-top: -0.5rem !important;
  }

  .mt-xl-n3 {
    margin-top: -1rem !important;
  }

  .mt-xl-n4 {
    margin-top: -1.5rem !important;
  }

  .mt-xl-n5 {
    margin-top: -3rem !important;
  }

  .mt-xl-n10 {
    margin-top: -10rem !important;
  }

  .mt-xl-ngrid-gutter {
    margin-top: -1.875rem !important;
  }

  .me-xl-n1 {
    margin-right: -0.25rem !important;
  }

  .me-xl-n2 {
    margin-right: -0.5rem !important;
  }

  .me-xl-n3 {
    margin-right: -1rem !important;
  }

  .me-xl-n4 {
    margin-right: -1.5rem !important;
  }

  .me-xl-n5 {
    margin-right: -3rem !important;
  }

  .me-xl-n10 {
    margin-right: -10rem !important;
  }

  .me-xl-ngrid-gutter {
    margin-right: -1.875rem !important;
  }

  .mb-xl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .mb-xl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .mb-xl-n3 {
    margin-bottom: -1rem !important;
  }

  .mb-xl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .mb-xl-n5 {
    margin-bottom: -3rem !important;
  }

  .mb-xl-n10 {
    margin-bottom: -10rem !important;
  }

  .mb-xl-ngrid-gutter {
    margin-bottom: -1.875rem !important;
  }

  .ms-xl-n1 {
    margin-left: -0.25rem !important;
  }

  .ms-xl-n2 {
    margin-left: -0.5rem !important;
  }

  .ms-xl-n3 {
    margin-left: -1rem !important;
  }

  .ms-xl-n4 {
    margin-left: -1.5rem !important;
  }

  .ms-xl-n5 {
    margin-left: -3rem !important;
  }

  .ms-xl-n10 {
    margin-left: -10rem !important;
  }

  .ms-xl-ngrid-gutter {
    margin-left: -1.875rem !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .p-xl-10 {
    padding: 10rem !important;
  }

  .p-xl-grid-gutter {
    padding: 1.875rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .px-xl-10 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }

  .px-xl-grid-gutter {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .py-xl-10 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .py-xl-grid-gutter {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pt-xl-10 {
    padding-top: 10rem !important;
  }

  .pt-xl-grid-gutter {
    padding-top: 1.875rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pe-xl-10 {
    padding-right: 10rem !important;
  }

  .pe-xl-grid-gutter {
    padding-right: 1.875rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .pb-xl-10 {
    padding-bottom: 10rem !important;
  }

  .pb-xl-grid-gutter {
    padding-bottom: 1.875rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .ps-xl-10 {
    padding-left: 10rem !important;
  }

  .ps-xl-grid-gutter {
    padding-left: 1.875rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }

  .text-xl-wrap {
    white-space: normal !important;
  }

  .text-xl-nowrap {
    white-space: nowrap !important;
  }

  .zindex-xl-1 {
    z-index: 1 !important;
  }

  .zindex-xl-5 {
    z-index: 5 !important;
  }

  .zindex-xl-10 {
    z-index: 10 !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .gap-xxl-10 {
    gap: 10rem !important;
  }

  .gap-xxl-grid-gutter {
    gap: 1.875rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-10 {
    margin: 10rem !important;
  }

  .m-xxl-grid-gutter {
    margin: 1.875rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-10 {
    margin-right: 10rem !important;
    margin-left: 10rem !important;
  }

  .mx-xxl-grid-gutter {
    margin-right: 1.875rem !important;
    margin-left: 1.875rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-10 {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }

  .my-xxl-grid-gutter {
    margin-top: 1.875rem !important;
    margin-bottom: 1.875rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-10 {
    margin-top: 10rem !important;
  }

  .mt-xxl-grid-gutter {
    margin-top: 1.875rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-10 {
    margin-right: 10rem !important;
  }

  .me-xxl-grid-gutter {
    margin-right: 1.875rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-10 {
    margin-bottom: 10rem !important;
  }

  .mb-xxl-grid-gutter {
    margin-bottom: 1.875rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-10 {
    margin-left: 10rem !important;
  }

  .ms-xxl-grid-gutter {
    margin-left: 1.875rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .m-xxl-n1 {
    margin: -0.25rem !important;
  }

  .m-xxl-n2 {
    margin: -0.5rem !important;
  }

  .m-xxl-n3 {
    margin: -1rem !important;
  }

  .m-xxl-n4 {
    margin: -1.5rem !important;
  }

  .m-xxl-n5 {
    margin: -3rem !important;
  }

  .m-xxl-n10 {
    margin: -10rem !important;
  }

  .m-xxl-ngrid-gutter {
    margin: -1.875rem !important;
  }

  .mx-xxl-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }

  .mx-xxl-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }

  .mx-xxl-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }

  .mx-xxl-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }

  .mx-xxl-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }

  .mx-xxl-n10 {
    margin-right: -10rem !important;
    margin-left: -10rem !important;
  }

  .mx-xxl-ngrid-gutter {
    margin-right: -1.875rem !important;
    margin-left: -1.875rem !important;
  }

  .my-xxl-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }

  .my-xxl-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }

  .my-xxl-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }

  .my-xxl-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }

  .my-xxl-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }

  .my-xxl-n10 {
    margin-top: -10rem !important;
    margin-bottom: -10rem !important;
  }

  .my-xxl-ngrid-gutter {
    margin-top: -1.875rem !important;
    margin-bottom: -1.875rem !important;
  }

  .mt-xxl-n1 {
    margin-top: -0.25rem !important;
  }

  .mt-xxl-n2 {
    margin-top: -0.5rem !important;
  }

  .mt-xxl-n3 {
    margin-top: -1rem !important;
  }

  .mt-xxl-n4 {
    margin-top: -1.5rem !important;
  }

  .mt-xxl-n5 {
    margin-top: -3rem !important;
  }

  .mt-xxl-n10 {
    margin-top: -10rem !important;
  }

  .mt-xxl-ngrid-gutter {
    margin-top: -1.875rem !important;
  }

  .me-xxl-n1 {
    margin-right: -0.25rem !important;
  }

  .me-xxl-n2 {
    margin-right: -0.5rem !important;
  }

  .me-xxl-n3 {
    margin-right: -1rem !important;
  }

  .me-xxl-n4 {
    margin-right: -1.5rem !important;
  }

  .me-xxl-n5 {
    margin-right: -3rem !important;
  }

  .me-xxl-n10 {
    margin-right: -10rem !important;
  }

  .me-xxl-ngrid-gutter {
    margin-right: -1.875rem !important;
  }

  .mb-xxl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .mb-xxl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .mb-xxl-n3 {
    margin-bottom: -1rem !important;
  }

  .mb-xxl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .mb-xxl-n5 {
    margin-bottom: -3rem !important;
  }

  .mb-xxl-n10 {
    margin-bottom: -10rem !important;
  }

  .mb-xxl-ngrid-gutter {
    margin-bottom: -1.875rem !important;
  }

  .ms-xxl-n1 {
    margin-left: -0.25rem !important;
  }

  .ms-xxl-n2 {
    margin-left: -0.5rem !important;
  }

  .ms-xxl-n3 {
    margin-left: -1rem !important;
  }

  .ms-xxl-n4 {
    margin-left: -1.5rem !important;
  }

  .ms-xxl-n5 {
    margin-left: -3rem !important;
  }

  .ms-xxl-n10 {
    margin-left: -10rem !important;
  }

  .ms-xxl-ngrid-gutter {
    margin-left: -1.875rem !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .p-xxl-10 {
    padding: 10rem !important;
  }

  .p-xxl-grid-gutter {
    padding: 1.875rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .px-xxl-10 {
    padding-right: 10rem !important;
    padding-left: 10rem !important;
  }

  .px-xxl-grid-gutter {
    padding-right: 1.875rem !important;
    padding-left: 1.875rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .py-xxl-10 {
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .py-xxl-grid-gutter {
    padding-top: 1.875rem !important;
    padding-bottom: 1.875rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pt-xxl-10 {
    padding-top: 10rem !important;
  }

  .pt-xxl-grid-gutter {
    padding-top: 1.875rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pe-xxl-10 {
    padding-right: 10rem !important;
  }

  .pe-xxl-grid-gutter {
    padding-right: 1.875rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .pb-xxl-10 {
    padding-bottom: 10rem !important;
  }

  .pb-xxl-grid-gutter {
    padding-bottom: 1.875rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .ps-xxl-10 {
    padding-left: 10rem !important;
  }

  .ps-xxl-grid-gutter {
    padding-left: 1.875rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }

  .text-xxl-wrap {
    white-space: normal !important;
  }

  .text-xxl-nowrap {
    white-space: nowrap !important;
  }

  .zindex-xxl-1 {
    z-index: 1 !important;
  }

  .zindex-xxl-5 {
    z-index: 5 !important;
  }

  .zindex-xxl-10 {
    z-index: 10 !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }

  .fs-xl {
    font-size: 1.625rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

.page-wrapper {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
}

a:focus {
  outline: none;
}

a {
  transition: color 0.25s ease-in-out;
}

img,
figure {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

svg {
  max-width: 100%;
}

iframe {
  width: 100%;
}

.iframe-full-height-wrap {
  position: relative;
  min-height: 18rem;
  overflow: hidden;
}

.iframe-full-height {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

::-moz-selection {
  background: rgba(78, 84, 200, 0.15);
}

::selection {
  background: rgba(78, 84, 200, 0.15);
}

::-moz-selection {
  background: rgba(78, 84, 200, 0.15);
}

@media (min-width: 1280px) {
  .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
}
small, .small {
  font-weight: inherit;
}

@media (max-width: 991.98px) {
  body {
    padding-top: 0 !important;
  }
}
button:focus {
  outline: none;
}

.hr-light {
  color: rgba(255, 255, 255, 0.12);
}

.display-404 {
  color: var(--bs-body-secondary-color);
  text-shadow: -0.0625rem 0 var(--bs-primary), 0 0.0625rem var(--bs-primary), 0.0625rem 0 var(--bs-primary), 0 -0.0625rem var(--bs-primary);
}

.list-style {
  list-style: none;
}
.list-style li {
  margin-bottom: 0.4rem;
}
.list-style li::before {
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  color: var(--bs-accent);
  font-weight: bold;
  content: "•";
}

ol.list-style {
  counter-reset: li;
}
ol.list-style li {
  counter-increment: li;
}
ol.list-style li::before {
  margin-right: 0.5em;
  margin-left: -1.5em;
  font-weight: inherit;
  text-align: right;
  direction: rtl;
  white-space: nowrap;
  content: "." counter(li);
}

.list-unstyled > li {
  margin-bottom: 0.4rem;
}
.list-unstyled > li ul li, .list-unstyled > li ol li {
  margin-bottom: 0.333rem;
}

.list-inline-item:not(:last-child) {
  margin-right: 1rem;
}

dt {
  color: var(--bs-body-secondary-color);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

dd {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.blockquote-footer {
  margin-top: -0.5rem;
}

.figure {
  padding: 0.5rem;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.3125rem;
  background-color: var(--bs-light);
}

.figure-caption {
  padding: 0 0.5rem;
}

@font-face {
  font-family: "cartzilla-icons";
  src: url("../fonts/cartzilla-icons.ttf?z88dg8") format("truetype"), url("../fonts/cartzilla-icons.woff?z88dg8") format("woff"), url("../fonts/cartzilla-icons.svg?z88dg8#cartzilla-icons") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
[class^=ci-], [class*=" ci-"] {
  display: inline-block;
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "cartzilla-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}

.ci-add-circle:before {
  content: "\\e900";
}

.ci-add-document:before {
  content: "\\e901";
}

.ci-add-location:before {
  content: "\\e902";
}

.ci-add:before {
  content: "\\e903";
}

.ci-announcement:before {
  content: "\\e904";
}

.ci-arrow-down-circle:before {
  content: "\\e905";
}

.ci-arrow-down:before {
  content: "\\e906";
}

.ci-arrow-left-circle:before {
  content: "\\e907";
}

.ci-arrow-left:before {
  content: "\\e908";
}

.ci-arrow-right-circle:before {
  content: "\\e909";
}

.ci-arrow-right:before {
  content: "\\e90a";
}

.ci-arrow-up-circle:before {
  content: "\\e90b";
}

.ci-arrow-up:before {
  content: "\\e90c";
}

.ci-arrows-horizontal:before {
  content: "\\e90d";
}

.ci-arrows-vertical:before {
  content: "\\e90e";
}

.ci-bag:before {
  content: "\\e90f";
}

.ci-basket:before {
  content: "\\e910";
}

.ci-behance:before {
  content: "\\e911";
}

.ci-bell:before {
  content: "\\e912";
}

.ci-bluetooth:before {
  content: "\\e913";
}

.ci-book:before {
  content: "\\e914";
}

.ci-bookmark:before {
  content: "\\e915";
}

.ci-briefcase:before {
  content: "\\e916";
}

.ci-calculator:before {
  content: "\\e917";
}

.ci-camera:before {
  content: "\\e918";
}

.ci-card:before {
  content: "\\e919";
}

.ci-cart:before {
  content: "\\e91a";
}

.ci-chat:before {
  content: "\\e91b";
}

.ci-check-circle:before {
  content: "\\e91c";
}

.ci-check:before {
  content: "\\e91d";
}

.ci-clip:before {
  content: "\\e91e";
}

.ci-close-circle:before {
  content: "\\e91f";
}

.ci-close:before {
  content: "\\e920";
}

.ci-cloud-check:before {
  content: "\\e921";
}

.ci-cloud-download:before {
  content: "\\e922";
}

.ci-cloud-upload:before {
  content: "\\e923";
}

.ci-cloud:before {
  content: "\\e924";
}

.ci-coin:before {
  content: "\\e925";
}

.ci-coins:before {
  content: "\\e926";
}

.ci-currency-exchange:before {
  content: "\\e927";
}

.ci-delete-document:before {
  content: "\\e928";
}

.ci-delete-folder:before {
  content: "\\e929";
}

.ci-delete-location:before {
  content: "\\e92a";
}

.ci-diamond:before {
  content: "\\e92b";
}

.ci-document-alt:before {
  content: "\\e92c";
}

.ci-document:before {
  content: "\\e92d";
}

.ci-dollar-circle:before {
  content: "\\e92e";
}

.ci-dollar:before {
  content: "\\e92f";
}

.ci-dribbble:before {
  content: "\\e930";
}

.ci-earphones:before {
  content: "\\e931";
}

.ci-edit-alt:before {
  content: "\\e932";
}

.ci-edit:before {
  content: "\\e933";
}

.ci-euro-circle:before {
  content: "\\e934";
}

.ci-euro:before {
  content: "\\e935";
}

.ci-exit-full-screen:before {
  content: "\\e936";
}

.ci-eye:before {
  content: "\\e937";
}

.ci-facebook:before {
  content: "\\e938";
}

.ci-filter-alt:before {
  content: "\\e939";
}

.ci-filter:before {
  content: "\\e93a";
}

.ci-flag:before {
  content: "\\e93b";
}

.ci-folder:before {
  content: "\\e93c";
}

.ci-forward:before {
  content: "\\e93d";
}

.ci-full-screen:before {
  content: "\\e93e";
}

.ci-gift:before {
  content: "\\e93f";
}

.ci-globe:before {
  content: "\\e940";
}

.ci-google:before {
  content: "\\e941";
}

.ci-hangouts:before {
  content: "\\e942";
}

.ci-heart-circle:before {
  content: "\\e943";
}

.ci-heart:before {
  content: "\\e944";
}

.ci-help:before {
  content: "\\e945";
}

.ci-home:before {
  content: "\\e946";
}

.ci-idea:before {
  content: "\\e947";
}

.ci-image:before {
  content: "\\e948";
}

.ci-increase:before {
  content: "\\e949";
}

.ci-instagram:before {
  content: "\\e94a";
}

.ci-joystick:before {
  content: "\\e94b";
}

.ci-key:before {
  content: "\\e94c";
}

.ci-lable:before {
  content: "\\e94d";
}

.ci-laptop:before {
  content: "\\e94e";
}

.ci-lightning:before {
  content: "\\e94f";
}

.ci-link:before {
  content: "\\e950";
}

.ci-linkedin:before {
  content: "\\e951";
}

.ci-list:before {
  content: "\\e952";
}

.ci-loading:before {
  content: "\\e953";
}

.ci-location:before {
  content: "\\e954";
}

.ci-locked:before {
  content: "\\e955";
}

.ci-mail:before {
  content: "\\e956";
}

.ci-map:before {
  content: "\\e957";
}

.ci-menu-circle:before {
  content: "\\e958";
}

.ci-menu:before {
  content: "\\e959";
}

.ci-message:before {
  content: "\\e95a";
}

.ci-messenger:before {
  content: "\\e95b";
}

.ci-mobile:before {
  content: "\\e95c";
}

.ci-money-bag:before {
  content: "\\e95d";
}

.ci-money-box:before {
  content: "\\e95e";
}

.ci-moon:before {
  content: "\\e95f";
}

.ci-music:before {
  content: "\\e960";
}

.ci-navigation:before {
  content: "\\e961";
}

.ci-odnoklassniki:before {
  content: "\\e962";
}

.ci-package:before {
  content: "\\e963";
}

.ci-percent:before {
  content: "\\e964";
}

.ci-phone:before {
  content: "\\e965";
}

.ci-pinterest:before {
  content: "\\e966";
}

.ci-plane:before {
  content: "\\e967";
}

.ci-play-circle:before {
  content: "\\e968";
}

.ci-play:before {
  content: "\\e969";
}

.ci-reduce:before {
  content: "\\e96a";
}

.ci-reload:before {
  content: "\\e96b";
}

.ci-remove-document:before {
  content: "\\e96c";
}

.ci-remove-folder:before {
  content: "\\e96d";
}

.ci-reply:before {
  content: "\\e96e";
}

.ci-rocket:before {
  content: "\\e96f";
}

.ci-ruler:before {
  content: "\\e970";
}

.ci-scroll:before {
  content: "\\e971";
}

.ci-search:before {
  content: "\\e972";
}

.ci-security-announcement:before {
  content: "\\e973";
}

.ci-security-check:before {
  content: "\\e974";
}

.ci-security-close:before {
  content: "\\e975";
}

.ci-security-prohibition:before {
  content: "\\e976";
}

.ci-send:before {
  content: "\\e977";
}

.ci-server-alt:before {
  content: "\\e978";
}

.ci-server:before {
  content: "\\e979";
}

.ci-settings:before {
  content: "\\e97a";
}

.ci-share-alt:before {
  content: "\\e97b";
}

.ci-share:before {
  content: "\\e97c";
}

.ci-skype:before {
  content: "\\e97d";
}

.ci-smile:before {
  content: "\\e97e";
}

.ci-star-filled:before {
  content: "\\e97f";
}

.ci-star:before {
  content: "\\e980";
}

.ci-sun:before {
  content: "\\e981";
}

.ci-support:before {
  content: "\\e982";
}

.ci-target:before {
  content: "\\e983";
}

.ci-telegram:before {
  content: "\\e984";
}

.ci-thumb-up:before {
  content: "\\e985";
}

.ci-time:before {
  content: "\\e986";
}

.ci-trash:before {
  content: "\\e987";
}

.ci-tumblr:before {
  content: "\\e988";
}

.ci-turn-off:before {
  content: "\\e989";
}

.ci-twitter:before {
  content: "\\e98a";
}

.ci-unlocked:before {
  content: "\\e98b";
}

.ci-user-circle:before {
  content: "\\e98c";
}

.ci-user:before {
  content: "\\e98d";
}

.ci-viber:before {
  content: "\\e98e";
}

.ci-video:before {
  content: "\\e98f";
}

.ci-view-grid:before {
  content: "\\e990";
}

.ci-view-list:before {
  content: "\\e991";
}

.ci-vimeo:before {
  content: "\\e992";
}

.ci-vk:before {
  content: "\\e993";
}

.ci-wallet:before {
  content: "\\e994";
}

.ci-watch:before {
  content: "\\e995";
}

.ci-weather:before {
  content: "\\e996";
}

.ci-wechat:before {
  content: "\\e997";
}

.ci-youtube-outline:before {
  content: "\\e998";
}

.ci-youtube:before {
  content: "\\e999";
}

.ci-caret:before {
  content: "\\e99a";
}

.ci-paypal:before {
  content: "\\e99b";
}

.ci-delivery:before {
  content: "\\e99c";
}

.ci-loudspeaker:before {
  content: "\\e99d";
}

.ci-sign-in:before {
  content: "\\e99e";
}

.ci-sign-out:before {
  content: "\\e99f";
}

.ci-wash:before {
  content: "\\e9a0";
}

.ci-bleach:before {
  content: "\\e9a1";
}

.ci-hand-wash:before {
  content: "\\e9a2";
}

.ci-ironing:before {
  content: "\\e9a3";
}

.ci-dry-clean:before {
  content: "\\e9a4";
}

.ci-add-user:before {
  content: "\\e9a5";
}

.ci-compare:before {
  content: "\\e9a6";
}

.ci-monitor:before {
  content: "\\e9a7";
}

.ci-printer:before {
  content: "\\e9a8";
}

.ci-speaker:before {
  content: "\\e9a9";
}

.ci-download:before {
  content: "\\e9aa";
}

.ci-upload:before {
  content: "\\e9ab";
}

.ci-bluetooth-circle:before {
  content: "\\e9ac";
}

.ci-battery:before {
  content: "\\e9ad";
}

.ci-sound-waves:before {
  content: "\\e9ae";
}

.ci-paprika:before {
  content: "\\e9af";
}

.ci-chili:before {
  content: "\\e9b0";
}

.ci-canned-food:before {
  content: "\\e9b1";
}

.ci-toothbrush:before {
  content: "\\e9b2";
}

.ci-pumpkin:before {
  content: "\\e9b3";
}

.ci-orange:before {
  content: "\\e9b4";
}

.ci-broccoli:before {
  content: "\\e9b5";
}

.ci-sauce:before {
  content: "\\e9b6";
}

.ci-soap:before {
  content: "\\e9b7";
}

.ci-toilet-paper:before {
  content: "\\e9b8";
}

.ci-lemon:before {
  content: "\\e9b9";
}

.ci-bread:before {
  content: "\\e9ba";
}

.ci-jam:before {
  content: "\\e9bb";
}

.ci-fish:before {
  content: "\\e9bc";
}

.ci-wine:before {
  content: "\\e9bd";
}

.ci-truck:before {
  content: "\\e9be";
}

.ci-tag:before {
  content: "\\e9bf";
}

.ci-eggs:before {
  content: "\\e9c0";
}

.ci-store:before {
  content: "\\e9c1";
}

.ci-ham-leg:before {
  content: "\\e9c2";
}

.ci-discount:before {
  content: "\\e9c3";
}

.ci-open:before {
  content: "\\e9c4";
}

.ci-juice:before {
  content: "\\e9c5";
}

.ci-cheese:before {
  content: "\\e9c6";
}

.ci-milk:before {
  content: "\\e9c7";
}

.ci-cashier:before {
  content: "\\e9c8";
}

.ci-avocado:before {
  content: "\\e9c9";
}

.ci-apple:before {
  content: "\\e9ca";
}

.ci-pizza:before {
  content: "\\e9cb";
}

.ci-scale:before {
  content: "\\e9cc";
}

.ci-ice-cream:before {
  content: "\\e9cd";
}

.ci-water-bottle:before {
  content: "\\e9ce";
}

.ci-carrot:before {
  content: "\\e9cf";
}

.ci-basket-alt:before {
  content: "\\e9d0";
}

.ci-corn:before {
  content: "\\e9d1";
}

.ci-frozen:before {
  content: "\\e9d2";
}

.ci-lollipop:before {
  content: "\\e9d3";
}

.ci-pot:before {
  content: "\\e9d4";
}

.ci-star-half:before {
  content: "\\e9d5";
}

.ci-eye-off:before {
  content: "\\e9d6";
}

.ci-thumb-up-filled:before {
  content: "\\e9d7";
}

.ci-dot-square:before {
  content: "\\e9d8";
}

.ci-discord:before {
  content: "\\e9d9";
}

.ci-tiktok:before {
  content: "\\e9da";
}

.ci-whatsapp:before {
  content: "\\e9db";
}

.ci-rupee:before {
  content: "\\e9dc";
}

:not(pre) > code[class*=language-],
pre[class*=language-],
pre {
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: var(--bs-gray-100);
  font-size: 0.875em;
}

pre {
  padding-right: 1rem;
  padding-left: 1rem;
}

.code-toolbar :not(pre) > code[class*=language-],
.code-toolbar pre[class*=language-] {
  padding-top: 2rem;
}

code[class*=language-],
pre[class*=language-],
pre {
  color: #404a5c;
}

.line-numbers .line-numbers-rows {
  border-right: 1px solid #d9e1e9;
}
.line-numbers .line-numbers-rows > span::before {
  color: #9aa2b2;
}

div.code-toolbar > .toolbar {
  opacity: 1;
}
div.code-toolbar > .toolbar > .toolbar-item > button {
  display: inline-block;
  margin: 0.375rem 0.5rem;
  padding: 0.25rem 0.75rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 0.25rem;
  border: 1px solid rgba(254, 105, 106, 0.3);
  background-color: transparent;
  color: var(--bs-primary) !important;
  box-shadow: none;
}
div.code-toolbar > .toolbar > .toolbar-item > button:focus {
  outline: none;
  box-shadow: none;
}
div.code-toolbar > .toolbar > .toolbar-item > button:hover {
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color) !important;
}
div.code-toolbar > .toolbar > .toolbar-item > button > span {
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  color: inherit;
  font-size: 0.8125rem;
  box-shadow: none;
}

.token.boolean, .token.constant, .token.deleted, .token.number,
.token.property, .token.symbol, .token.tag {
  color: var(--bs-accent);
}

.token.cdata, .token.comment, .token.doctype, .token.prolog {
  color:var(--bs-gray);
}

.token.attr-name, .token.builtin, .token.char,
.token.inserted, .token.selector {
  color: #4091e3;
}

.token.atrule, .token.attr-value,
.token.keyword, .token.string {
  color: #e3116c;
}

.language-css .token.string, .style .token.string,
.token.entity, .token.operator, .token.url {
  color: #36acaa;
}

.token.class-name, .token.function {
  color: #36acaa;
}

.table:not(.table-dark) thead th, .table:not(.table-dark) tbody th {
  color: var(--bs-body-secondary-color) !important;
}
.table:not(.table-dark) td {
  color: var(--bs-body-color) !important;
}

.table-dark td {
  color: rgba(255, 255, 255, 0.75);
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: var(--bs-gray-100);
}

.table > :not(:last-child) > :last-child > * {
  border-bottom-color: #bccad9;
}

.table.table-dark > :not(:last-child) > :last-child > * {
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

.col-form-label {
  font-size: 0.875rem;
}

input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  display: none;
}

.password-toggle {
  position: relative;
}
.password-toggle .form-control {
  padding-right: 3rem;
}

.password-toggle-btn {
  position: absolute;
  top: 50%;
  right: 0.625rem;
  margin-bottom: 0;
  padding: 0.5rem;
  transform: translateY(-50%);
  font-size: 1.0625rem;
  line-height: 1;
  cursor: pointer;
}
.password-toggle-btn .password-toggle-indicator {
  transition: color 0.2s ease-in-out;
  color:var(--bs-gray);
  font-family: "cartzilla-icons";
  font-style: normal;
}
.password-toggle-btn .password-toggle-indicator::before {
  content: "\\e937";
}
.password-toggle-btn .password-toggle-indicator:hover {
  color: var(--bs-body-color);
}
.password-toggle-btn .password-toggle-check {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
}
.password-toggle-btn .password-toggle-check:checked ~ .password-toggle-indicator::before {
  content: "\\e9d6";
}

.was-validated .password-toggle .form-control:invalid,
.was-validated .password-toggle .form-control.is-invalid,
.was-validated .password-toggle .form-control:valid,
.was-validated .password-toggle .form-control.is-valid {
  padding-right: 4rem;
}
.was-validated .password-toggle .form-control:invalid + .password-toggle-btn,
.was-validated .password-toggle .form-control.is-invalid + .password-toggle-btn,
.was-validated .password-toggle .form-control:valid + .password-toggle-btn,
.was-validated .password-toggle .form-control.is-valid + .password-toggle-btn {
  right: 2.1rem;
}

.form-check-label {
  font-size: 0.875rem;
}

.form-check-justified {
  flex-basis: 0;
  flex-grow: 1;
}
.form-check-justified:not(:last-child) {
  margin-right: 0.5rem;
}
.form-check-justified .form-option-label {
  width: 100%;
}

.form-switch .form-check-input {
  height: 1.25rem;
  border: 0;
  background-color: #d1d9e1;
}
.form-switch .form-check-input:checked {
  background-color: var(--bs-primary);
  box-shadow: 0 0.375rem 0.875rem -0.3rem var(--bs-primary);
}
.form-switch .form-check-input:disabled {
  box-shadow: none;
}
.form-switch .form-check-label {
  margin-top: 0.1875rem;
}

.valid-tooltip,
.invalid-tooltip {
  position: static;
  margin-top: 0.25rem;
}

.valid-tooltip {
  color: var(--bs-success);
}

.invalid-tooltip {
  color: var(--bs-danger);
}

.was-validated .form-control:invalid ~ .invalid-tooltip,
.was-validated .form-control.is-invalid ~ .invalid-tooltip,
.was-validated .form-check-input:invalid ~ .invalid-tooltip,
.was-validated .form-check-input.is-invalid ~ .invalid-tooltip {
  display: table;
}
.was-validated .form-control:valid ~ .valid-tooltip,
.was-validated .form-control.is-valid ~ .valid-tooltip,
.was-validated .form-check-input:valid ~ .valid-tooltip,
.was-validated .form-check-input.is-valid ~ .valid-tooltip {
  display: table;
}
.was-validated .form-control:valid,
.was-validated .form-control.is-valid,
.was-validated .form-select:valid,
.was-validated .form-select.is-valid {
  border-color: var(--bs-gray-400) !important;
}

.was-validated .form-check-input:valid ~ .form-check-label,
.was-validated .form-check-input.is-valid ~ .form-check-label {
  color: inherit;
}

.was-validated .form-check-input:valid:checked,
.was-validated .form-check-input.is-valid:checked {
  border-color: var(--bs-primary);
  background-color: var(--bs-primary);
}

.form-control:disabled {
  cursor: not-allowed;
}

.subscription-status {
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  text-align: center;
}
.subscription-status.status-success, .subscription-status.status-error {
  margin-top: 0.5rem;
  padding: 0.25rem 0.375rem;
}
.subscription-status.status-success {
  background-color: rgba(66, 214, 151, 0.1);
  color: #29bc7d;
}
.subscription-status.status-error {
  background-color: rgba(243, 71, 112, 0.1);
  color: var(--bs-danger);
}

.form-option {
  padding-left: 0;
}
.form-option.form-check-inline {
  margin-right: 0.25rem;
}
.form-option .form-check-input {
  border: 0;
  background: none;
}

.form-option-label {
  position: relative;
  min-width: 2rem;
  height: 2rem;
  margin-bottom: 0;
  padding-top: 0.0625rem;
  padding-right: 0.375rem;
  padding-left: 0.375rem;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.25rem;
  color: var(--bs-body-color);
  font-size: 0.75rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.75rem;
  cursor: pointer;
}
.form-option-label:hover {
  border-color: #c9d5e0;
  color: var(--bs-body-secondary-color);
}

.form-option-color {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -0.75rem;
  margin-left: -0.75rem;
  background-position: top left;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
}

.form-check-input:checked ~ .form-option-label {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
}

.file-drop-area {
  position: relative;
  padding: 2rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 2px dashed var(--bs-gray-400);
  background-color: var(--bs-light);
  text-align: center;
  cursor: pointer;
}
.file-drop-area .file-drop-input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  opacity: 0;
  outline: none;
  cursor: pointer;
  z-index: 2;
}
.file-drop-area .file-drop-icon {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--bs-gray-500);
  font-size: 1.625rem;
}
.file-drop-area .file-drop-preview {
  max-width: 16rem;
  margin-right: auto;
  margin-bottom: 0.75rem;
  margin-left: auto;
}
.file-drop-area .file-drop-message {
  display: block;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
}
.file-drop-area .btn {
  position: relative;
  z-index: 3;
}
.file-drop-area:hover {
  border-color: #c4cfd9;
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary.active, .btn-primary.show {
  border-color: #fe3638;
  background-color: #fe3638;
}

.btn-accent:hover, .btn-accent:active, .btn-accent:focus, .btn-accent.active, .btn-accent.show {
  border-color: #363cad;
  background-color: #363cad;
}

.btn-secondary:hover, .btn-secondary:active, .btn-secondary:focus, .btn-secondary.active, .btn-secondary.show {
  border-color: #d1d9e8;
  background-color: #d1d9e8;
}

.btn-success:hover, .btn-success:active, .btn-success:focus, .btn-success.active, .btn-success.show {
  border-color: #29bc7d;
  background-color: #29bc7d;
}

.btn-info:hover, .btn-info:active, .btn-info:focus, .btn-info.active, .btn-info.show {
  border-color: #3699fe;
  background-color: #3699fe;
}

.btn-warning:hover, .btn-warning:active, .btn-warning:focus, .btn-warning.active, .btn-warning.show {
  border-color: #fe8736;
  background-color: #fe8736;
}

.btn-danger:hover, .btn-danger:active, .btn-danger:focus, .btn-danger.active, .btn-danger.show {
  border-color: #f0174b;
  background-color: #f0174b;
}

.btn-light:hover, .btn-light:active, .btn-light:focus, .btn-light.active, .btn-light.show {
  border-color: #e6e6e6;
  background-color: #e6e6e6;
}

.btn-dark:hover, .btn-dark:active, .btn-dark:focus, .btn-dark.active, .btn-dark.show {
  border-color: #222732;
  background-color: #222732;
}

.btn-primary, .btn-success,
.btn-danger, .btn-warning,
.btn-info, .btn-dark {
  color: var(--bs-body-secondary-color) !important;
}

.btn-secondary, .btn-secondary:hover,
.btn-outline-secondary,
.btn-outline-secondary:hover,
.btn-light,
.btn-light:hover {
  color: var(--bs-body-color) !important;
  border-color: transparent;
}

.btn-secondary {
  border-color: var(--bs-gray-300);
}

.btn-light:hover,
.btn-light:not(:disabled):not(.disabled):active,
.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled).show {
  border-color: var(--bs-light);
  background-color: var(--bs-light);
}

.btn-outline-primary {
  border-color: rgba(254, 105, 106, 0.35);
}

.btn-outline-accent {
  border-color: rgba(78, 84, 200, 0.35);
}

.btn-outline-secondary {
  border-color: rgba(243, 245, 249, 0.35);
}

.btn-outline-success {
  border-color: rgba(66, 214, 151, 0.35);
}

.btn-outline-info {
  border-color: rgba(105, 179, 254, 0.35);
}

.btn-outline-warning {
  border-color: rgba(254, 165, 105, 0.35);
}

.btn-outline-danger {
  border-color: rgba(243, 71, 112, 0.35);
}

.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-outline-dark {
  border-color: rgba(55, 63, 80, 0.35);
}

[class^=btn-outline-]:hover, [class^=btn-outline-]:active, [class^=btn-outline-].active, [class^=btn-outline-].show, [class*=" btn-outline-"]:hover, [class*=" btn-outline-"]:active, [class*=" btn-outline-"].active, [class*=" btn-outline-"].show {
  color: var(--bs-body-secondary-color) !important;
}

.btn-outline-light:hover, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.show {
  color: var(--bs-body-color) !important;
}

.btn-outline-secondary {
  border-color: var(--bs-gray-400);
}
.btn-outline-secondary:hover, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.show {
  border-color: var(--bs-gray-400) !important;
  color: var(--bs-body-color) !important;
}

.btn-primary.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}

.btn-accent.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(78, 84, 200, 0.9);
}

.btn-secondary.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(243, 245, 249, 0.9);
}

.btn-success.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(66, 214, 151, 0.9);
}

.btn-info.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(105, 179, 254, 0.9);
}

.btn-warning.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 165, 105, 0.9);
}

.btn-danger.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(243, 71, 112, 0.9);
}

.btn-light.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(255, 255, 255, 0.9);
}

.btn-dark.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(55, 63, 80, 0.9);
}

.btn-secondary.btn-shadow,
.btn-light.btn-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 0, 0, 0.15);
}

.btn-shadow:hover {
  box-shadow: none;
}

.btn > i {
  margin-top: -0.1875rem;
  vertical-align: middle;
}

.btn-icon {
  padding: 0.625rem 0.875rem;
}

.btn-market {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  padding-left: 2.8125rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 0.4375rem;
  background-position: center left 0.75rem;
  background-color: var(--bs-gray-900);
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
}
.btn-market .btn-market-title {
  display: block;
  color: var(--bs-body-secondary-color);
  font-size: 1rem;
}
.btn-market .btn-market-subtitle {
  display: block;
  margin-bottom: -0.125rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.6875rem;
}
.btn-market:hover {
  background-color: #212835;
}

.btn-apple {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.btn-google {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.btn-windows {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMC4xNzYsMjI0TDAuMDAxLDY3Ljk2M2wxOTItMjYuMDcyVjIyNEgwLjE3NnogTTIyNC4wMDEsMzcuMjQxTDQ3OS45MzcsMHYyMjRIMjI0LjAwMVYzNy4yNDF6IE00NzkuOTk5LDI1NmwtMC4wNjIsMjI0ICAgbC0yNTUuOTM2LTM2LjAwOFYyNTZINDc5Ljk5OXogTTE5Mi4wMDEsNDM5LjkxOEwwLjE1Nyw0MTMuNjIxTDAuMTQ3LDI1NmgxOTEuODU0VjQzOS45MTh6IiBmaWxsPSIjMDBiY2YyIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.btn-amazon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QjFCQzQ2QjRGNkQxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QjFCQzQ2QTRGNkQxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QUM1ODJFMkIxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QUM1ODJFM0IxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk2CzRIAAAcFSURBVHja5FxpbBZVFH2ULlhQCq2oiBWLWqCI0AoqKILgGo2KEqlGjSKKIuJaC9EgRKNYURL9YQ2KawKICO5RqZYYsKDFtS1VsSpaU2ypgQYo0HpP5lTGz2/pvNnrTU7yLXNn3px5775777tvurW3tysf5DDBEMEAwUmCEwX9+TsalCRoEfwuqBF8KagTVAt2e9nQZA+vdYRgimCi4GJBd41z7BK8LlgjeMOTVqMHuYxcwRrBgXZnZYegyO32d3NxiGG4LBVMdvkZN7JnfuzGyZNcavQkwXYPyIFkCsoED4SFoDsFHwpSPTb8CwQPO31Sp4fYbMFi5a9MEzwfRILGu2UHNORYwS9BGmIpgldVcGR+0GzQI3T0giKY1XoHZYjBAazHuTT1ywUrOOvtFfQQDBPMEmTYaNd0wZIgOIrzNB29zYKcBOcuseFIljjhKDoxxC7U0FkuGCnYmuC4ewVzNNt1ahCGGILNXy3qIOAcalEHAWuuRZ0/BUcKDvhppM/X0HlQQ+dtDZ0setm+zmKtFo9HCuM9jeuUabYv3e90x0uCfvReewoOZZAai3g4kjs1rlNnwz8LVKjRgwT1EeQIjicGCdoEM5gEsyonCGo19PIEVUFKmO0hGgRbnIwZ/fI4k1TXFtvEJgf8BtNo13R9mv1dgSDYpwJlJO6zaL/6MiLPofHXlX1hI+gYwVjBZYLBDHCz/u9DbKCgkK7AoLAZMTcJwpBZJLgozFbeLYKeFNzRFaZBpwk6TvCpClbyLDAEnS5Y39UcKacIynWInEbGa0i471DGUnMD7dk8XzxNB2IxrH/9wClcR5BmxVLRa4KvYjh3urEY4sAf/e5BT9sg5ynB7UGOxewSNFwZyXEduVIZyfpAi91g9SZNvVkWyWkPI0FYd7peQ289h2UoYkY7BI1SeinNpRo6PcJGEBzBMZq672u6EaEiCOSM09BrVsYKqlXJ12xnml8EwS/J0dDbRb/HK4LS/SIoW3CUhp5O4SbW/s+yERv6QlCa0qsgy1DWqy6m2ZjFJvtFEIZJq4beIcqoj7bSe4pt3N9UwdF+EIT1+D80dWdYOPYZZSTt7cg9fhD0vUpcmRFLrhOM7sRxJYJLHZipkbgr8JogeMPrbDT6E8EZMf7rJXjL7pOPkBf9SHecI/jAZsNB1HPKyP1gSp5CuCHIHCwU/OYVQZiN6ml4wyJPCO72Khb7S/CCCpfs93KIQVAp9p2HN7iKQbJOgu5spVHHbTcfhNKSxz0i5zHB5Zz6rQiKtvKUbpG7Q9uGNrS7K3Mjrrexk3pVgsygbIfaJDjF4V6DoqtL1H9rFDHEahPkiZBWucB2CxzegLbSwV5TnuDpF8TRfdape3Jjl94EQY0NYioFkzp5rdFR9Oe4suNwb2m2Xlh/c8xNNUiooarjZCJabgYBL2oWsWl3C92GGotNQBnNMga2M+U+VnVCBxnRkRyqiPX2MLbcKPjZfF/mNAKWjlNshhBmWccLjqJt6kuSujMbgOKmnWzQF8pY4GuznFYoza6Rm7lVGYVX7yY4fASzoWMYn/Wno4sHhcLzCkYH2DDc9C8/SC60gm4+DriaCl1FzhU8xIfVGVkopBdH9qBr6GkW8mnODqGnHE3OUwcXChoJ5MWbOQvmRMk8/lP2lxyRBLuKYxJFT1ieuZb5m9oQE/Q1CdhOpzGa5HF49TSFUTE9aWz6f5OfJ9B4olLs8JAShIC6Lg45iuHSN6bvdYlCDThnq03f72IWsUj5uIjnkCCffh97ViF/w8TRUT/ZZA5L4sViqERdEnFi5FO2KWMLZu+QEZPOdqP9jyrjnSG38L8BphHymTKVzCQKVlG5EVm4hC1GxUw8IdmVH3BiYF9K6W+h3Vkmg91RfDHRdPxiq9H8AhrtliiW/gb6MNUchsMCQgqcx9sEmwXfkghzj0ebc01OacdCwk/KeCmCijaLxZN3eFFUgZ0Wo0GLTA4ifKpKwQYPSYG3ji0LVzAdHEvgupirUvqYguwbIw+2siC3jd72XBX/FRDj1MF1+zo+xWoavgqlt18sUlI4tDHLDmfYMDiBzj72+FcifkeFGyrY8NqdspgZRYuxWD7H6pkWb6yVSbZ6+iVNNIgN/NzCYd/Ghwd7gf1nKOLsR0OKmGuIxUliJR3fyL1qvUzhzsBoMabukm4le8lUJsI7u06fynhohEfDDj0X1WxrY/yfyZl6plsp12UM+LCGtVUFRz5nFDA0DjmKPWe6irOM7tSGukV0tIrYOL9kLXs1gtKXnTih0zsOS9i48cpI5jd7QEoVPWMYa7zYabmTJ3erOLKcuJ+GfCx9qcE0jHakgQm21bSFFW6y73b1KDIEHxHzmZzKpt+RzxkpgxmEVHWwZA56uznDNNFd2ESXod7LMfu3AAMA3eQjZHI91/8AAAAASUVORK5CYII=);
}

.btn-scroll-top {
  display: block;
  position: fixed;
  right: -4.125rem;
  bottom: 1.25rem;
  width: 2.75rem;
  height: 2.75rem;
  transition: right 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s, background-color 0.25s ease-in-out;
  border-radius: 50%;
  background-color: rgba(43, 52, 69, 0.25);
  color: var(--bs-body-secondary-color);
  text-align: center;
  opacity: 0;
  z-index: 1025;
}
.btn-scroll-top > .btn-scroll-top-icon {
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 2.625rem;
}
.btn-scroll-top .btn-scroll-top-tooltip {
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out;
  visibility: hidden;
  opacity: 0;
}
.btn-scroll-top:hover {
  background-color: rgba(43, 52, 69, 0.5);
  color: var(--bs-body-secondary-color);
}
.btn-scroll-top:hover .btn-scroll-top-tooltip {
  visibility: visible;
  opacity: 1;
}
.btn-scroll-top.show {
  right: 1.25rem;
  opacity: 1;
}
.btn-scroll-top.right-15 {
  right: 2.1875rem;
}
@media (max-width: 499.98px) {
  .btn-scroll-top {
    width: 2.2rem;
    height: 2.2rem;
    bottom: 1rem;
  }
  .btn-scroll-top > .btn-scroll-top-icon {
    line-height: 2.075rem;
  }
  .btn-scroll-top.show {
    right: 1rem;
  }
  .btn-scroll-top.right-15 {
    right: 1.9375rem;
  }
}

.btn-like,
.btn-dislike {
  display: inline-block;
  padding: 0;
  padding-left: 0.625rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  border: 0;
  background: 0;
  color:var(--bs-gray);
  font-size: 0.875rem;
  text-decoration: none !important;
  white-space: nowrap;
  vertical-align: middle;
}
.btn-like::before,
.btn-dislike::before {
  display: inline-block;
  margin-right: 0.375rem;
  font-family: "cartzilla-icons";
  font-size: 1.25em;
  vertical-align: middle;
  content: "\\e985";
}
.btn-like:first-child,
.btn-dislike:first-child {
  padding-right: 0.625rem;
  padding-left: 0;
  border-right: 1px solid #d9e1e9;
}
.btn-like:focus,
.btn-dislike:focus {
  outline: none;
}
.btn-like:hover,
.btn-dislike:hover {
  color: var(--bs-body-color);
}
.btn-like.active::before,
.btn-dislike.active::before {
  content: "\\e9d7";
}

.btn-like::before {
  margin-top: -0.325rem;
  color: var(--bs-success);
}

.btn-dislike::before {
  transform: rotate(-180deg);
  color: var(--bs-danger);
}

@-moz-document url-prefix() {
  .btn-dislike::before {
    margin-bottom: -0.325rem;
  }
}
.btn-wishlist {
  width: 2.75rem;
  height: 2.75rem;
  padding: 0 !important;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 0;
  border-radius: 50%;
  background-color: var(--bs-gray-200);
  color: var(--bs-body-secondary-color);
  text-align: center;
}
.btn-wishlist > i {
  font-size: 1.0625rem;
  line-height: 2.75rem;
}
.btn-wishlist:hover {
  color: var(--bs-primary);
}
.btn-wishlist:focus {
  outline: 0;
}
.btn-wishlist.btn-sm, .btn-group-sm > .btn-wishlist.btn {
  width: 2rem;
  height: 2rem;
}
.btn-wishlist.btn-sm > i, .btn-group-sm > .btn-wishlist.btn > i {
  font-size: 0.8125rem;
  line-height: 2rem;
}

.btn-video {
  display: inline-block;
  width: 4.5rem;
  height: 4.5rem;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 50%;
  background-color: var(--bs-light);
  color: var(--bs-body-color);
  text-align: center;
  line-height: 4.5rem;
  box-shadow: 0 0.375rem 1rem -0.25rem rgba(43, 52, 69, 0.2);
  vertical-align: middle;
}
.btn-video::before {
  font-family: "cartzilla-icons";
  font-size: 0.75rem;
  font-weight: 700;
  content: "\\e969";
}
.btn-video:hover {
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color);
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}

.btn-social {
  display: inline-block;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 1px solid transparent;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  border-radius: 0.3125rem;
  background-color: var(--bs-gray-200);
  color: var(--bs-body-color);
  font-size: 0.875rem;
  text-align: center;
  text-decoration: none !important;
}
.btn-social > i {
  line-height: 2.125rem;
}
.btn-social:hover {
  color: var(--bs-body-secondary-color);
}
.btn-social:focus {
  outline: none;
}
.btn-social:active {
  transition: none;
  box-shadow: none !important;
}
.btn-social.bs-light {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--bs-body-secondary-color);
}
.btn-social.bs-light:hover {
  background-color: var(--bs-light) !important;
  box-shadow: none !important;
}

.bs-lg {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.3125rem;
  font-size: 1rem;
}
.bs-lg > i {
  line-height: 2.625rem;
}

.bs-sm {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}
.bs-sm > i {
  line-height: 1.625rem;
}

.bs-outline {
  border-color: var(--bs-gray-300);
  background-color: transparent;
}
.bs-outline.bs-light {
  border-color: rgba(255, 255, 255, 0.12);
  background-color: transparent;
}
.bs-outline:hover {
  border-color: transparent;
}

.bs-facebook:hover {
  background-color: #3b5998;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(59, 89, 152, 0.9);
}
.bs-facebook:hover.bs-light {
  color: #3b5998;
}

.bs-twitter:hover {
  background-color: #1da1f2;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(29, 161, 242, 0.9);
}
.bs-twitter:hover.bs-light {
  color: #1da1f2;
}

.bs-instagram:hover {
  background-color: #5851db;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(88, 81, 219, 0.9);
}
.bs-instagram:hover.bs-light {
  color: #5851db;
}

.bs-google:hover {
  background-color: #ea4335;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(234, 67, 53, 0.9);
}
.bs-google:hover.bs-light {
  color: #ea4335;
}

.bs-linkedin:hover {
  background-color: #0077b5;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 119, 181, 0.9);
}
.bs-linkedin:hover.bs-light {
  color: #0077b5;
}

.bs-pinterest:hover {
  background-color: #bd081c;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(189, 8, 28, 0.9);
}
.bs-pinterest:hover.bs-light {
  color: #bd081c;
}

.bs-tumblr:hover {
  background-color: #35465c;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(53, 70, 92, 0.9);
}
.bs-tumblr:hover.bs-light {
  color: #35465c;
}

.bs-behance:hover {
  background-color: #1769ff;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(23, 105, 255, 0.9);
}
.bs-behance:hover.bs-light {
  color: #1769ff;
}

.bs-dribbble:hover {
  background-color: #ea4c89;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(234, 76, 137, 0.9);
}
.bs-dribbble:hover.bs-light {
  color: #ea4c89;
}

.bs-vk:hover {
  background-color: #45668e;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(69, 102, 142, 0.9);
}
.bs-vk:hover.bs-light {
  color: #45668e;
}

.bs-odnoklassniki:hover {
  background-color: #ed812b;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(237, 129, 43, 0.9);
}
.bs-odnoklassniki:hover.bs-light {
  color: #ed812b;
}

.bs-skype:hover {
  background-color: #00aff0;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 175, 240, 0.9);
}
.bs-skype:hover.bs-light {
  color: #00aff0;
}

.bs-hangouts:hover {
  background-color: #0f9d58;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(15, 157, 88, 0.9);
}
.bs-hangouts:hover.bs-light {
  color: #0f9d58;
}

.bs-messenger:hover {
  background-color: #0084ff;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 132, 255, 0.9);
}
.bs-messenger:hover.bs-light {
  color: #0084ff;
}

.bs-viber:hover {
  background-color: #59267c;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(89, 38, 124, 0.9);
}
.bs-viber:hover.bs-light {
  color: #59267c;
}

.bs-telegram:hover {
  background-color: #0088cc;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 136, 204, 0.9);
}
.bs-telegram:hover.bs-light {
  color: #0088cc;
}

.bs-youtube:hover {
  background-color: #ff0000;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(255, 0, 0, 0.9);
}
.bs-youtube:hover.bs-light {
  color: #ff0000;
}

.bs-vimeo:hover {
  background-color: #1ab7ea;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(26, 183, 234, 0.9);
}
.bs-vimeo:hover.bs-light {
  color: #1ab7ea;
}

.bs-wechat:hover {
  background-color: #7bb32e;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(123, 179, 46, 0.9);
}
.bs-wechat:hover.bs-light {
  color: #7bb32e;
}

.bs-discord:hover {
  background-color: #7289da;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(114, 137, 218, 0.9);
}
.bs-discord:hover.bs-light {
  color: #7289da;
}

.bs-tiktok:hover {
  background-color: #25f4ee;
  box-shadow: 0 0.5rem 1.125rem -0.5rem #25f4ee;
}
.bs-tiktok:hover.bs-light {
  color: #25f4ee;
}

.bs-whatsapp:hover {
  background-color: #25d366;
  box-shadow: 0 0.5rem 1.125rem -0.5rem #25d366;
}
.bs-whatsapp:hover.bs-light {
  color: #25d366;
}

.btn-share {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  text-decoration: none !important;
  vertical-align: middle;
}
.btn-share > i {
  margin-top: -0.125rem;
  margin-right: 0.3125rem;
  font-size: 1.1em;
  vertical-align: middle;
}
.btn-share.btn-twitter {
  background-color: rgba(29, 161, 242, 0.08);
  color: #1da1f2;
}
.btn-share.btn-twitter:hover {
  background-color: #1da1f2;
}
.btn-share.btn-instagram {
  background-color: rgba(88, 81, 219, 0.08);
  color: #5851db;
}
.btn-share.btn-instagram:hover {
  background-color: #5851db;
}
.btn-share.btn-facebook {
  background-color: rgba(59, 89, 152, 0.08);
  color: #3b5998;
}
.btn-share.btn-facebook:hover {
  background-color: #3b5998;
}
.btn-share:hover {
  color: var(--bs-body-secondary-color);
  box-shadow: none;
}

.btn-group .btn-outline-secondary:hover, .btn-group .btn-outline-secondary:active, .btn-group .btn-outline-secondary.active {
  border-color: var(--bs-gray-300) !important;
}

.dropdown .dropdown-toggle::after, .dropup .dropdown-toggle::after,
.dropstart .dropdown-toggle::after, .dropend .dropdown-toggle::after {
  margin-left: 0.3rem;
  vertical-align: middle;
}

.btn.dropdown-toggle::after {
  margin-left: 0.35rem;
}

h1 .dropdown-toggle::after, h2 .dropdown-toggle::after, h3 .dropdown-toggle::after, h4 .dropdown-toggle::after, h5 .dropdown-toggle::after,
.h1 .dropdown-toggle::after, .h2 .dropdown-toggle::after, .h3 .dropdown-toggle::after, .h4 .dropdown-toggle::after, .h5 .dropdown-toggle::after {
  margin-left: 0.5rem !important;
  border-top-width: 0.375rem;
  border-right-width: 0.375rem;
  border-left-width: 0.375rem;
}

.dropdown-menu {
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  border-color: transparent;
}
.dropdown-menu li:hover > .dropdown-item {
  color: var(--bs-primary);
}
.dropdown-menu .active > .dropdown-item {
  color: var(--bs-primary);
}
.dropdown-menu .active > .dropdown-item,
.dropdown-menu .dropdown-item.active {
  pointer-events: none;
}
.dropdown-menu.dropdown-menu-dark {
  border-width: 0;
}
.dropdown-menu.dropdown-menu-dark li:hover > .dropdown-item {
  color: var(--bs-body-secondary-color);
}
.dropdown-menu.dropdown-menu-dark .active > .dropdown-item {
  color: var(--bs-body-secondary-color);
}

.dropdown-header {
  margin-bottom: 0.25rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--bs-gray-300);
}

.dropdown-menu-dark .dropdown-header {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.dropdown-item {
  position: relative;
  width: 100%;
  transition: all 0.25s ease-in-out;
  font-size: 0.875rem;
  font-weight: normal;
}
.dropdown-item > i, .dropdown-item .badge {
  margin-top: -0.125rem;
  vertical-align: middle;
}

.dropdown-menu.show {
  -webkit-animation: fade-in 0.25s ease-in-out;
  animation: fade-in 0.25s ease-in-out;
}

.dropdown-toggle-split::after {
  margin-left: -0.0625rem !important;
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes slide-up {
  from {
    transform: translateY(0.5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-up {
  from {
    transform: translateY(0.5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.input-group .position-absolute {
  z-index: 5;
}
.input-group .position-absolute + .form-control, .input-group .position-absolute + .password-toggle .form-control {
  padding-left: 2.5rem;
}

.nav-link:not(.dropdown-toggle).active {
  pointer-events: none;
}

.nav-tabs:not(.card-header-tabs) {
  margin-bottom: 1.25rem;
}
.nav-tabs.card-header-tabs {
  margin-top: -0.3125rem;
  margin-right: -1.25rem;
  margin-left: -1.25rem;
}
.nav-tabs.card-header-tabs .nav-link.active {
  background-color: transparent;
  border-bottom-color: transparent;
}
.nav-tabs .nav-link {
  position: relative;
  border: 0;
}
.nav-tabs .nav-link::before {
  position: absolute;
  display: block;
  bottom: 0;
  left: 1.25rem;
  width: calc(100% - (1.25rem * 2));
  height: 1px;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  background-color: transparent;
  content: "";
}
.nav-tabs .nav-link.active::before {
  background-color: var(--bs-primary);
}
.nav-tabs.nav-fill .nav-link::before, .nav-tabs.nav-justified .nav-link::before {
  left: 0;
  width: 100%;
}

.media-tabs {
  border: 0;
}
.media-tabs .nav-item {
  margin-bottom: 0;
  text-align: left;
}
.media-tabs .nav-link {
  padding: 0.375rem 0.625rem;
}
.media-tabs .nav-link::before {
  display: none !important;
}

.media-tab-media {
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 50%;
  background-color: var(--bs-light);
  color: var(--bs-body-color);
  text-align: center;
  overflow: hidden;
}
.media-tab-media > i {
  font-size: 1.25rem;
  line-height: calc(3.75rem - (1px * 2));
}
.media-tab-media > img {
  display: block;
  width: 100%;
  border-radius: 50%;
}

.media-tab-title,
.media-tab-subtitle {
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
}

a.nav-link:hover .media-tab-media {
  border-color: rgba(254, 105, 106, 0.35);
  color: var(--bs-primary);
}

.nav-link.active .media-tab-media,
.nav-link.active:hover .media-tab-media {
  border-color: var(--bs-primary);
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color);
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}
.nav-link.active .media-tab-title,
.nav-link.active:hover .media-tab-title {
  color: var(--bs-primary) !important;
}
.nav-link.active .media-tab-subtitle,
.nav-link.active:hover .media-tab-subtitle {
  color: rgba(254, 105, 106, 0.65) !important;
}

.nav-link.disabled .media-tab-media,
.nav-link.completed .media-tab-media {
  background-color: var(--bs-gray-100);
  color:var(--bs-gray);
}

.nav-link.disabled .media-tab-title {
  color:var(--bs-gray);
}

.nav-link.completed .media-tab-media {
  overflow: visible;
}
.nav-link.completed .media-tab-media::after {
  position: absolute;
  top: -0.175rem;
  right: -0.175rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #eafaf3;
  border: 1px solid var(--bs-success);
  color: var(--bs-success);
  font-family: "cartzilla-icons";
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 1.25rem;
  content: "\\e91d";
}

.nav-pills .nav-item {
  margin-right: 0.667rem;
}
.nav-pills .nav-item:last-child {
  margin-right: 0;
}
.nav-pills.flex-column .nav-item {
  margin-right: 0;
  margin-bottom: 0.667rem;
}
.nav-pills.flex-column .nav-item:last-child {
  margin-bottom: 0;
}
.nav-pills .nav-link {
  padding-top: 0.675rem;
  padding-bottom: 0.675rem;
  background-color: var(--bs-gray-200);
  color: var(--bs-body-color);
  font-size: 0.9375rem;
}
.nav-pills .nav-link:hover:not(.active):not([aria-expanded=true]), .nav-pills .nav-link.show {
  color: var(--bs-body-color);
  background-color: #dfe4ef;
}
.nav-pills .nav-link.disabled {
  background-color: #fafbfc;
  color:var(--bs-gray);
}
.nav-pills .nav-link.disabled:hover:not(.active) {
  background-color: transparent;
}
.nav-pills .nav-link.active {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}
.nav-pills .nav-link i {
  margin-top: -0.25rem;
}

.modal-content .card-header-tabs {
  margin-right: -1.25rem;
  margin-bottom: -1rem;
  margin-left: -1.25rem;
}

.nav-link-style {
  color: var(--bs-body-color);
}
.nav-link-style > i {
  margin-top: -0.125rem;
  vertical-align: middle;
}
.nav-link-style:hover {
  color: var(--bs-primary);
}

.active > .nav-link-style,
.nav-link-style.active {
  color: var(--bs-primary);
}

.nav-link-style.nav-link-light {
  color: rgba(255, 255, 255, 0.65);
}
.nav-link-style.nav-link-light:hover {
  color: var(--bs-body-secondary-color);
}

.active > .nav-link-style.nav-link-light,
.nav-link-style.nav-link-light.active {
  color: var(--bs-body-secondary-color);
}

.radio-tab-pane {
  display: none;
}
.radio-tab-pane.active {
  display: block;
}

.navbar-brand {
  display: inline-block;
  font-weight: 500;
  vertical-align: middle;
}
.navbar-brand > img {
  display: block;
}

.navbar-nav .nav-item {
  margin-bottom: 0.667rem;
  border-radius: 0.3125rem;
}
.navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
  font-weight: 500;
}
.navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item > * {
  font-weight: 400;
}
.navbar-nav .nav-link {
  padding: 0.667rem 1.125rem;
  font-weight: 500;
}
.navbar-nav .dropdown-menu {
  min-width: 12.5rem;
  padding-top: 0;
  box-shadow: none;
  border: none;
  background-color: transparent;
}
.navbar-nav .dropdown-menu .dropdown-menu {
  width: calc(100% - (1rem * 2));
  margin: 0 1rem;
}

.navbar.fixed-top {
  position: relative;
}

.navbar-mega-nav {
  position: relative;
}
.navbar-mega-nav::after {
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 1.875rem;
  content: "";
}

.mega-dropdown-column {
  width: 100%;
  max-width: 15rem;
}

.navbar-mega-nav .dropdown-menu > .mega-dropdown {
  position: static;
}
.navbar-mega-nav .dropdown-menu > .dropdown > a {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--bs-gray-300);
}
.navbar-mega-nav .dropdown-menu > .dropdown:last-child > a {
  border-bottom: 0;
}

.navbar-tool {
  position: relative;
  display: flex;
  align-items: center;
}
.navbar-tool.dropdown::before {
  position: absolute;
  bottom: -1rem;
  left: -10%;
  width: 120%;
  height: 1rem;
  content: "";
}
.navbar-tool .dropdown-menu {
  top: 100%;
  margin-top: 0.5rem !important;
}
.navbar-tool .dropdown-menu.dropdown-menu-end {
  left: auto;
  right: 0;
}
.navbar-tool .navbar-tool-label {
  position: absolute;
  top: -0.3125rem;
  right: -0.3125rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color);
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.25rem;
}
.navbar-tool .navbar-tool-tooltip {
  display: none;
}
@media (min-width: 992px) {
  .navbar-tool .navbar-tool-tooltip {
    display: block;
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.2s ease-in-out, top 0.2s ease-in-out;
    padding: 0.0625rem 0.375rem;
    border-radius: 0.25rem;
    background-color: var(--bs-gray-900);
    color: var(--bs-body-secondary-color);
    font-size: 0.6875rem;
    white-space: nowrap;
    opacity: 0;
  }
  .navbar-tool:hover .navbar-tool-tooltip {
    top: -0.75rem;
    opacity: 0.9;
  }
}

.navbar-tool-icon-box {
  position: relative;
  width: 2.875rem;
  height: 2.875rem;
  transition: color 0.25s ease-in-out;
  border-radius: 50%;
  line-height: 2.625rem;
  text-align: center;
}
.navbar-tool-icon-box.dropdown-toggle::after {
  display: none;
}

.navbar-tool-icon {
  font-size: 1.25rem;
  line-height: 2.875rem;
}

.navbar-tool-text {
  display: none;
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: 0.875rem;
  transition: color 0.25s ease-in-out;
  font-size: 0.875rem;
  text-decoration: none !important;
  white-space: nowrap;
}
.navbar-tool-text > small, .navbar-tool-text > .small {
  display: block;
  margin-bottom: -0.125rem;
}

.dropdown .navbar-tool-text::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid;
  border-right: 0.275rem solid transparent;
  border-bottom: 0;
  border-left: 0.275rem solid transparent;
}
.dropdown .navbar-tool-text:empty::after {
  margin-left: 0;
}

@media (max-width: 767.98px) {
  .search-box {
    display: none;
  }
}
@media (min-width: 500px) {
  .navbar-expand-sm.fixed-top {
    position: fixed;
  }
  .navbar-expand-sm .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-sm .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
    font-weight: normal;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: normal;
  }
  .navbar-expand-sm .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
    display: none;
  }
  .navbar-expand-sm .navbar-mega-nav::after {
    display: block;
  }
  .navbar-expand-sm .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
    top: 0.35rem;
  }
  .navbar-expand-sm .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
    top: 0.375rem;
    min-height: 100%;
    min-height: calc(100% + .25rem);
    -webkit-animation: none !important;
    animation: none !important;
  }
  .navbar-expand-sm .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
    position: absolute;
    top: 0;
    right: 16rem;
    width: 1px;
    height: 100%;
    background-color: var(--bs-gray-300);
    content: "";
  }
  .navbar-expand-sm .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-sm .dropdown-menu.dropdown-menu-dark {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: var(--bs-body-secondary-color);
  }
  .navbar-expand-sm .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-sm .dropdown-menu.show {
    display: none;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown > .dropdown-toggle {
    position: relative;
    padding-right: 1.95rem;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown > .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.23375rem;
    vertical-align: 0.23375rem;
    content: "";
    border-top: 0.275rem solid transparent;
    border-right: 0;
    border-bottom: 0.275rem solid transparent;
    border-left: 0.275rem solid;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown > .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 50%;
    right: 1rem;
    margin-top: -0.3em;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown .dropdown-menu {
    display: none;
    top: 0;
    right: auto;
    left: 100%;
    width: auto;
    margin-top: -0.5rem;
    margin-right: 0;
    margin-left: -0.25rem;
  }
  .navbar-expand-sm .dropdown-menu > .dropdown:hover > .dropdown-menu {
    -webkit-animation: fade-in 0.25s ease-in-out;
    animation: fade-in 0.25s ease-in-out;
  }
  .navbar-expand-sm .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: var(--bs-light);
    background-color: var(--bs-light);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }
  .navbar-expand-sm .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
    background-color: var(--bs-light);
  }
  .navbar-expand-sm .dropdown:hover > .dropdown-menu {
    display: block;
    -webkit-animation: slide-up 0.25s ease-in-out;
    animation: slide-up 0.25s ease-in-out;
  }
  .navbar-expand-sm .navbar-tool-text {
    display: block;
  }
  .navbar-expand-sm .mega-dropdown-column {
    width: 15rem;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md.fixed-top {
    position: fixed;
  }
  .navbar-expand-md .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-md .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
    font-weight: normal;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: normal;
  }
  .navbar-expand-md .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
    display: none;
  }
  .navbar-expand-md .navbar-mega-nav::after {
    display: block;
  }
  .navbar-expand-md .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
    top: 0.35rem;
  }
  .navbar-expand-md .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
    top: 0.375rem;
    min-height: 100%;
    min-height: calc(100% + .25rem);
    -webkit-animation: none !important;
    animation: none !important;
  }
  .navbar-expand-md .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
    position: absolute;
    top: 0;
    right: 16rem;
    width: 1px;
    height: 100%;
    background-color: var(--bs-gray-300);
    content: "";
  }
  .navbar-expand-md .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-md .dropdown-menu.dropdown-menu-dark {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: var(--bs-body-secondary-color);
  }
  .navbar-expand-md .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-md .dropdown-menu.show {
    display: none;
  }
  .navbar-expand-md .dropdown-menu > .dropdown > .dropdown-toggle {
    position: relative;
    padding-right: 1.95rem;
  }
  .navbar-expand-md .dropdown-menu > .dropdown > .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.23375rem;
    vertical-align: 0.23375rem;
    content: "";
    border-top: 0.275rem solid transparent;
    border-right: 0;
    border-bottom: 0.275rem solid transparent;
    border-left: 0.275rem solid;
  }
  .navbar-expand-md .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .navbar-expand-md .dropdown-menu > .dropdown > .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 50%;
    right: 1rem;
    margin-top: -0.3em;
  }
  .navbar-expand-md .dropdown-menu > .dropdown .dropdown-menu {
    display: none;
    top: 0;
    right: auto;
    left: 100%;
    width: auto;
    margin-top: -0.5rem;
    margin-right: 0;
    margin-left: -0.25rem;
  }
  .navbar-expand-md .dropdown-menu > .dropdown:hover > .dropdown-menu {
    -webkit-animation: fade-in 0.25s ease-in-out;
    animation: fade-in 0.25s ease-in-out;
  }
  .navbar-expand-md .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: var(--bs-light);
    background-color: var(--bs-light);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }
  .navbar-expand-md .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
    background-color: var(--bs-light);
  }
  .navbar-expand-md .dropdown:hover > .dropdown-menu {
    display: block;
    -webkit-animation: slide-up 0.25s ease-in-out;
    animation: slide-up 0.25s ease-in-out;
  }
  .navbar-expand-md .navbar-tool-text {
    display: block;
  }
  .navbar-expand-md .mega-dropdown-column {
    width: 15rem;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg.fixed-top {
    position: fixed;
  }
  .navbar-expand-lg .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-lg .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
    font-weight: normal;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: normal;
  }
  .navbar-expand-lg .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
    display: none;
  }
  .navbar-expand-lg .navbar-mega-nav::after {
    display: block;
  }
  .navbar-expand-lg .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
    top: 0.35rem;
  }
  .navbar-expand-lg .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
    top: 0.375rem;
    min-height: 100%;
    min-height: calc(100% + .25rem);
    -webkit-animation: none !important;
    animation: none !important;
  }
  .navbar-expand-lg .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
    position: absolute;
    top: 0;
    right: 16rem;
    width: 1px;
    height: 100%;
    background-color: var(--bs-gray-300);
    content: "";
  }
  .navbar-expand-lg .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-lg .dropdown-menu.dropdown-menu-dark {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: var(--bs-body-secondary-color);
  }
  .navbar-expand-lg .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-lg .dropdown-menu.show {
    display: none;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown > .dropdown-toggle {
    position: relative;
    padding-right: 1.95rem;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown > .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.23375rem;
    vertical-align: 0.23375rem;
    content: "";
    border-top: 0.275rem solid transparent;
    border-right: 0;
    border-bottom: 0.275rem solid transparent;
    border-left: 0.275rem solid;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown > .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 50%;
    right: 1rem;
    margin-top: -0.3em;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown .dropdown-menu {
    display: none;
    top: 0;
    right: auto;
    left: 100%;
    width: auto;
    margin-top: -0.5rem;
    margin-right: 0;
    margin-left: -0.25rem;
  }
  .navbar-expand-lg .dropdown-menu > .dropdown:hover > .dropdown-menu {
    -webkit-animation: fade-in 0.25s ease-in-out;
    animation: fade-in 0.25s ease-in-out;
  }
  .navbar-expand-lg .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: var(--bs-light);
    background-color: var(--bs-light);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }
  .navbar-expand-lg .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
    background-color: var(--bs-light);
  }
  .navbar-expand-lg .dropdown:hover > .dropdown-menu {
    display: block;
    -webkit-animation: slide-up 0.25s ease-in-out;
    animation: slide-up 0.25s ease-in-out;
  }
  .navbar-expand-lg .navbar-tool-text {
    display: block;
  }
  .navbar-expand-lg .mega-dropdown-column {
    width: 15rem;
  }
}
@media (min-width: 1280px) {
  .navbar-expand-xl.fixed-top {
    position: fixed;
  }
  .navbar-expand-xl .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-xl .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
    font-weight: normal;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: normal;
  }
  .navbar-expand-xl .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
    display: none;
  }
  .navbar-expand-xl .navbar-mega-nav::after {
    display: block;
  }
  .navbar-expand-xl .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
    top: 0.35rem;
  }
  .navbar-expand-xl .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
    top: 0.375rem;
    min-height: 100%;
    min-height: calc(100% + .25rem);
    -webkit-animation: none !important;
    animation: none !important;
  }
  .navbar-expand-xl .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
    position: absolute;
    top: 0;
    right: 16rem;
    width: 1px;
    height: 100%;
    background-color: var(--bs-gray-300);
    content: "";
  }
  .navbar-expand-xl .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-xl .dropdown-menu.dropdown-menu-dark {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: var(--bs-body-secondary-color);
  }
  .navbar-expand-xl .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-xl .dropdown-menu.show {
    display: none;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown > .dropdown-toggle {
    position: relative;
    padding-right: 1.95rem;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown > .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.23375rem;
    vertical-align: 0.23375rem;
    content: "";
    border-top: 0.275rem solid transparent;
    border-right: 0;
    border-bottom: 0.275rem solid transparent;
    border-left: 0.275rem solid;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown > .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 50%;
    right: 1rem;
    margin-top: -0.3em;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown .dropdown-menu {
    display: none;
    top: 0;
    right: auto;
    left: 100%;
    width: auto;
    margin-top: -0.5rem;
    margin-right: 0;
    margin-left: -0.25rem;
  }
  .navbar-expand-xl .dropdown-menu > .dropdown:hover > .dropdown-menu {
    -webkit-animation: fade-in 0.25s ease-in-out;
    animation: fade-in 0.25s ease-in-out;
  }
  .navbar-expand-xl .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: var(--bs-light);
    background-color: var(--bs-light);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }
  .navbar-expand-xl .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
    background-color: var(--bs-light);
  }
  .navbar-expand-xl .dropdown:hover > .dropdown-menu {
    display: block;
    -webkit-animation: slide-up 0.25s ease-in-out;
    animation: slide-up 0.25s ease-in-out;
  }
  .navbar-expand-xl .navbar-tool-text {
    display: block;
  }
  .navbar-expand-xl .mega-dropdown-column {
    width: 15rem;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl.fixed-top {
    position: fixed;
  }
  .navbar-expand-xxl .navbar-collapse {
    width: auto;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-nav .nav-item {
    margin-bottom: 0;
    background-color: transparent;
  }
  .navbar-expand-xxl .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
    font-weight: normal;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-top: 1.125rem;
    padding-bottom: 0.875rem;
    font-weight: normal;
  }
  .navbar-expand-xxl .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
    display: none;
  }
  .navbar-expand-xxl .navbar-mega-nav::after {
    display: block;
  }
  .navbar-expand-xxl .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
    top: 0.35rem;
  }
  .navbar-expand-xxl .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
    top: 0.375rem;
    min-height: 100%;
    min-height: calc(100% + .25rem);
    -webkit-animation: none !important;
    animation: none !important;
  }
  .navbar-expand-xxl .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
    position: absolute;
    top: 0;
    right: 16rem;
    width: 1px;
    height: 100%;
    background-color: var(--bs-gray-300);
    content: "";
  }
  .navbar-expand-xxl .dropdown-menu {
    margin-top: 0;
    padding-top: 0.5rem;
  }
  .navbar-expand-xxl .dropdown-menu.dropdown-menu-dark {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: var(--bs-body-secondary-color);
  }
  .navbar-expand-xxl .dropdown-menu.dropdown-menu-end {
    left: auto;
    right: 0;
  }
  .navbar-expand-xxl .dropdown-menu.show {
    display: none;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown > .dropdown-toggle {
    position: relative;
    padding-right: 1.95rem;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown > .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.23375rem;
    vertical-align: 0.23375rem;
    content: "";
    border-top: 0.275rem solid transparent;
    border-right: 0;
    border-bottom: 0.275rem solid transparent;
    border-left: 0.275rem solid;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown > .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 50%;
    right: 1rem;
    margin-top: -0.3em;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown .dropdown-menu {
    display: none;
    top: 0;
    right: auto;
    left: 100%;
    width: auto;
    margin-top: -0.5rem;
    margin-right: 0;
    margin-left: -0.25rem;
  }
  .navbar-expand-xxl .dropdown-menu > .dropdown:hover > .dropdown-menu {
    -webkit-animation: fade-in 0.25s ease-in-out;
    animation: fade-in 0.25s ease-in-out;
  }
  .navbar-expand-xxl .dropdown-menu:not(.dropdown-menu-dark) {
    border-color: var(--bs-light);
    background-color: var(--bs-light);
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  }
  .navbar-expand-xxl .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
    background-color: var(--bs-light);
  }
  .navbar-expand-xxl .dropdown:hover > .dropdown-menu {
    display: block;
    -webkit-animation: slide-up 0.25s ease-in-out;
    animation: slide-up 0.25s ease-in-out;
  }
  .navbar-expand-xxl .navbar-tool-text {
    display: block;
  }
  .navbar-expand-xxl .mega-dropdown-column {
    width: 15rem;
  }
}
.navbar-expand.fixed-top {
  position: fixed;
}
.navbar-expand .navbar-collapse {
  width: auto;
  flex-basis: auto;
}
.navbar-expand .navbar-nav .nav-item {
  margin-bottom: 0;
  background-color: transparent;
}
.navbar-expand .navbar-nav .nav-item > .dropdown-menu > li > .dropdown-item {
  font-weight: normal;
}
.navbar-expand .navbar-nav .nav-link {
  padding-top: 1.125rem;
  padding-bottom: 0.875rem;
  font-weight: normal;
}
.navbar-expand .navbar-nav:not(.navbar-mega-nav) .nav-link.dropdown-toggle::after {
  display: none;
}
.navbar-expand .navbar-mega-nav::after {
  display: block;
}
.navbar-expand .navbar-mega-nav .dropdown-menu > .dropdown .dropdown-menu {
  top: 0.35rem;
}
.navbar-expand .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu {
  top: 0.375rem;
  min-height: 100%;
  min-height: calc(100% + .25rem);
  -webkit-animation: none !important;
  animation: none !important;
}
.navbar-expand .navbar-mega-nav .dropdown-menu > .mega-dropdown .dropdown-menu::before {
  position: absolute;
  top: 0;
  right: 16rem;
  width: 1px;
  height: 100%;
  background-color: var(--bs-gray-300);
  content: "";
}
.navbar-expand .dropdown-menu {
  margin-top: 0;
  padding-top: 0.5rem;
}
.navbar-expand .dropdown-menu.dropdown-menu-dark {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: var(--bs-body-secondary-color);
}
.navbar-expand .dropdown-menu.dropdown-menu-end {
  left: auto;
  right: 0;
}
.navbar-expand .dropdown-menu.show {
  display: none;
}
.navbar-expand .dropdown-menu > .dropdown > .dropdown-toggle {
  position: relative;
  padding-right: 1.95rem;
}
.navbar-expand .dropdown-menu > .dropdown > .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.23375rem;
  vertical-align: 0.23375rem;
  content: "";
  border-top: 0.275rem solid transparent;
  border-right: 0;
  border-bottom: 0.275rem solid transparent;
  border-left: 0.275rem solid;
}
.navbar-expand .dropdown-menu > .dropdown > .dropdown-toggle:empty::after {
  margin-left: 0;
}
.navbar-expand .dropdown-menu > .dropdown > .dropdown-toggle::after {
  position: absolute;
  display: block;
  top: 50%;
  right: 1rem;
  margin-top: -0.3em;
}
.navbar-expand .dropdown-menu > .dropdown .dropdown-menu {
  display: none;
  top: 0;
  right: auto;
  left: 100%;
  width: auto;
  margin-top: -0.5rem;
  margin-right: 0;
  margin-left: -0.25rem;
}
.navbar-expand .dropdown-menu > .dropdown:hover > .dropdown-menu {
  -webkit-animation: fade-in 0.25s ease-in-out;
  animation: fade-in 0.25s ease-in-out;
}
.navbar-expand .dropdown-menu:not(.dropdown-menu-dark) {
  border-color: var(--bs-light);
  background-color: var(--bs-light);
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
}
.navbar-expand .dropdown-menu:not(.dropdown-menu-dark) .dropdown-menu {
  background-color: var(--bs-light);
}
.navbar-expand .dropdown:hover > .dropdown-menu {
  display: block;
  -webkit-animation: slide-up 0.25s ease-in-out;
  animation: slide-up 0.25s ease-in-out;
}
.navbar-expand .navbar-tool-text {
  display: block;
}
.navbar-expand .mega-dropdown-column {
  width: 15rem;
}

.navbar-stuck-toggler {
  display: none;
}

@media (min-width: 992px) {
  .navbar-sticky.navbar-stuck {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-animation: navbar-show 0.25s;
    animation: navbar-show 0.25s;
    box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
    z-index: 1030;
  }
  .navbar-sticky.navbar-stuck .navbar-stuck-toggler {
    display: flex;
  }
  .navbar-sticky.navbar-stuck .navbar-stuck-barnd {
    display: block !important;
  }
  .navbar-sticky.navbar-stuck .navbar-stuck-menu {
    display: none;
  }
  .navbar-sticky.navbar-stuck .navbar-stuck-menu.show {
    display: block;
  }
  .navbar-sticky.navbar-stuck.right-15 {
    right: 15px;
    width: calc(100% - 15px);
  }
}
.fixed-top.right-15,
.fixed-bottom.right-15 {
  right: 15px;
}

@-webkit-keyframes navbar-show {
  from {
    transform: translateY(-0.625rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes navbar-show {
  from {
    transform: translateY(-0.625rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.navbar-light .nav-link > i {
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  color:var(--bs-gray);
}
.navbar-light .nav-item {
  background-color: var(--bs-gray-100);
}
.navbar-light .nav-item:hover .nav-link:not(.disabled), .navbar-light .nav-item:hover .nav-link:not(.disabled) > i {
  color: var(--bs-primary);
}
.navbar-light .nav-item.active .nav-link:not(.disabled) > i, .navbar-light .nav-item.show .nav-link:not(.disabled) > i, .navbar-light .nav-item.dropdown .nav-link:focus:not(.disabled) > i, .navbar-light .nav-item.active .nav-link:not(.disabled), .navbar-light .nav-item.show .nav-link:not(.disabled), .navbar-light .nav-item.dropdown .nav-link:focus:not(.disabled) {
  color: var(--bs-primary);
}
.navbar-light .navbar-tool-icon-box {
  color: var(--bs-body-color);
}
.navbar-light .navbar-tool-icon-box.bg-secondary {
  background-color: var(--bs-gray-200) !important;
}
.navbar-light .navbar-tool:hover .navbar-tool-icon-box {
  color: var(--bs-gray-900);
}
.navbar-light .navbar-tool:hover .navbar-tool-icon-box.bg-secondary {
  background-color: var(--bs-gray-200) !important;
}
.navbar-light.bg-secondary .navbar-tool-icon-box.bg-secondary, .navbar-light[class^=bg-faded] .navbar-tool-icon-box.bg-secondary, .navbar-light[class*=" bg-faded"] .navbar-tool-icon-box.bg-secondary, .navbar-light[style^=background-color] .navbar-tool-icon-box.bg-secondary, .navbar-light[style*=" background-color"] .navbar-tool-icon-box.bg-secondary {
  background-color: #e9edf4 !important;
}
.navbar-light.bg-secondary .navbar-tool:hover .navbar-tool-icon-box.bg-secondary, .navbar-light[class^=bg-faded] .navbar-tool:hover .navbar-tool-icon-box.bg-secondary, .navbar-light[class*=" bg-faded"] .navbar-tool:hover .navbar-tool-icon-box.bg-secondary, .navbar-light[style^=background-color] .navbar-tool:hover .navbar-tool-icon-box.bg-secondary, .navbar-light[style*=" background-color"] .navbar-tool:hover .navbar-tool-icon-box.bg-secondary {
  background-color: #e9edf4 !important;
}
.navbar-light .navbar-tool-text {
  color: var(--bs-body-color);
}
.navbar-light .navbar-tool-text > small, .navbar-light .navbar-tool-text > .small {
  color:var(--bs-gray);
}
.navbar-light .navbar-tool:hover .navbar-tool-text {
  color: var(--bs-gray-900);
}
.navbar-light .navbar-mega-nav::after {
  background-color: var(--bs-gray-300);
}

.navbar-dark .nav-link > i {
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  color: rgba(255, 255, 255, 0.5);
}
.navbar-dark .nav-item {
  background-color: rgba(255, 255, 255, 0.05);
}
.navbar-dark .nav-item:hover .nav-link:not(.disabled) {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .nav-item.active .nav-link:not(.disabled) > i, .navbar-dark .nav-item.show .nav-link:not(.disabled) > i, .navbar-dark .nav-item.dropdown .nav-link:focus:not(.disabled) > i, .navbar-dark .nav-item.active .nav-link:not(.disabled), .navbar-dark .nav-item.show .nav-link:not(.disabled), .navbar-dark .nav-item.dropdown .nav-link:focus:not(.disabled) {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-tool-icon-box {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-tool-icon-box.bg-secondary {
  background-color: rgba(255, 255, 255, 0.08) !important;
}
.navbar-dark .navbar-tool-text {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-tool-text > small, .navbar-dark .navbar-tool-text > .small {
  color: rgba(255, 255, 255, 0.5);
}
.navbar-dark .navbar-tool:hover .navbar-tool-text {
  color: var(--bs-body-secondary-color);
}
.navbar-dark .navbar-mega-nav::after {
  background-color: rgba(255, 255, 255, 0.12);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  font-size: 0.875rem;
}
.topbar > .container,
.topbar > .container-fluid,
.topbar > .container-sm,
.topbar > .container-md,
.topbar > .container-lg,
.topbar > .container-xl {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar .topbar-text,
.topbar .topbar-link {
  display: inline-block;
  margin-bottom: 0;
  text-decoration: none !important;
}
.topbar .topbar-text > i,
.topbar .topbar-link > i {
  margin-right: 0.375rem;
  font-size: 1.15em;
  vertical-align: middle;
}
.topbar .tns-carousel [data-controls] {
  margin-top: -1rem;
  width: 2rem;
  height: 2rem;
  transition: color 0.2s ease-in-out;
  border: 0;
  background: 0;
  font-size: 0.9555rem;
  line-height: 2rem;
}
.topbar .tns-carousel [data-controls=prev] {
  left: -2.2rem;
}
.topbar .tns-carousel [data-controls=next] {
  right: -2.2rem;
}

@-moz-document url-prefix() {
  .topbar .tns-carousel [data-controls] {
    margin-top: -0.875rem;
  }
}
.topbar-light .topbar-text,
.topbar-light .topbar-link {
  color: rgba(75, 86, 107, 0.9);
}
.topbar-light .topbar-text > i,
.topbar-light .topbar-link > i {
  color: var(--bs-primary);
}
.topbar-light .topbar-text.text-muted,
.topbar-light .topbar-text > .text-muted,
.topbar-light .topbar-link.text-muted,
.topbar-light .topbar-link > .text-muted {
  color: rgba(125, 135, 156, 0.9) !important;
}
.topbar-light .topbar-link:hover {
  color: var(--bs-body-secondary-color);
}
.topbar-light .topbar-link.active {
  color: var(--bs-body-secondary-color);
}
.topbar-light .show .topbar-link {
  color: var(--bs-body-secondary-color);
}
.topbar-light .tns-carousel [data-controls] {
  color: rgba(75, 86, 107, 0.9);
}
.topbar-light .tns-carousel [data-controls]:hover {
  color: var(--bs-body-secondary-color);
}

.topbar-dark .topbar-text,
.topbar-dark .topbar-link {
  color: rgba(255, 255, 255, 0.65);
}
.topbar-dark .topbar-text > i,
.topbar-dark .topbar-link > i {
  color: var(--bs-primary);
}
.topbar-dark .topbar-text.text-muted,
.topbar-dark .topbar-text > .text-muted,
.topbar-dark .topbar-link.text-muted,
.topbar-dark .topbar-link > .text-muted {
  color: rgba(255, 255, 255, 0.45) !important;
}
.topbar-dark .topbar-link:hover {
  color: var(--bs-body-secondary-color);
}
.topbar-dark .topbar-link.active {
  color: var(--bs-body-secondary-color);
}
.topbar-dark .show .topbar-link {
  color: var(--bs-body-secondary-color);
}
.topbar-dark .tns-carousel [data-controls] {
  color: rgba(255, 255, 255, 0.65);
}
.topbar-dark .tns-carousel [data-controls]:hover {
  color: var(--bs-body-secondary-color);
}

.accordion-button {
  font-weight: 500;
}
.accordion-button::after {
  width: 2.125rem;
  height: 2.125rem;
  border-radius: 50%;
  background-position: center;
  background-color: ${theme.accordion.iconBackgroundColor};
}
.accordion-button:focus {
  box-shadow: none;
}
.accordion-button:not(.collapsed) {
  box-shadow: inset 0 -1px 0 #dde4eb;
}

.breadcrumb-item::before {
  margin-top: 0.0625rem;
  font-family: "cartzilla-icons";
  font-size: 0.9em;
  vertical-align: middle;
}
.breadcrumb-item > a {
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  color: var(--bs-body-color);
}
.breadcrumb-item > a:hover {
  color: var(--bs-primary);
}
.breadcrumb-item > a > i {
  margin-top: -0.175rem;
  margin-right: 0.375rem;
  font-size: 1.05em;
  vertical-align: middle;
}
.breadcrumb-item.active {
  cursor: default;
}

.breadcrumb-light .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}
.breadcrumb-light .breadcrumb-item > a {
  color: var(--bs-body-secondary-color);
}
.breadcrumb-light .breadcrumb-item > a:hover {
  color: var(--bs-body-secondary-color);
}
.breadcrumb-light .breadcrumb-item.active {
  color: rgba(255, 255, 255, 0.6);
}

.pagination {
  margin-bottom: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.page-link {
  position: relative;
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
}
.page-link:focus, .page-link:hover {
  color: var(--bs-body-color);
}
.page-link.page-link-static:hover {
  border-color: transparent;
  background-color: transparent;
  color: var(--bs-body-color);
}
.page-link > i {
  margin-top: -0.125rem;
  vertical-align: middle;
}

.page-item {
  margin: 0.15rem;
}
.page-item.active {
  position: relative;
  z-index: 5;
  cursor: default;
}
.page-item.active > .page-link {
  box-shadow: 0 0.5rem 1.125rem -0.425rem rgba(254, 105, 106, 0.9);
}

.pagination .page-link {
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
}

.pagination-sm .page-link {
  border-radius: 0.25rem;
  font-size: 0.8125rem;
}

.pagination-lg .page-link {
  border-radius: 0.4375rem;
  font-size: 1rem;
}

.entry-navigation {
  display: flex;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.4375rem;
  background-color: var(--bs-light);
}

.entry-navigation-link {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding: 1.25rem 0.75rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border-right: 1px solid var(--bs-gray-300);
  color: var(--bs-body-color);
  font-weight: normal;
  text-align: center;
  text-decoration: none;
}
.entry-navigation-link:last-child {
  border-right: 0;
}
.entry-navigation-link > i {
  margin-top: -0.1875rem;
  vertical-align: middle;
}
.entry-navigation-link:hover {
  color: var(--bs-primary);
  text-decoration: none;
}

.badge.bg-secondary,
.badge.bg-light {
  color: var(--bs-body-secondary-color);
}

.bg-primary.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(254, 105, 106, 0.9);
}

.bg-accent.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(78, 84, 200, 0.9);
}

.bg-secondary.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(243, 245, 249, 0.9);
}

.bg-success.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(66, 214, 151, 0.9);
}

.bg-info.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(105, 179, 254, 0.9);
}

.bg-warning.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(254, 165, 105, 0.9);
}

.bg-danger.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(243, 71, 112, 0.9);
}

.bg-light.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(255, 255, 255, 0.9);
}

.bg-dark.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(55, 63, 80, 0.9);
}

.bg-secondary.badge-shadow,
.bg-light.badge-shadow {
  box-shadow: 0 0.5rem 1.125rem -0.275rem rgba(0, 0, 0, 0.25);
}

.alert-secondary {
  border-color: var(--bs-gray-300);
  background-color: var(--bs-gray-100);
}

.alert-secondary,
.alert-light {
  color: var(--bs-body-color);
}
.alert-secondary .alert-link,
.alert-light .alert-link {
  color: var(--bs-gray-900);
}

.alert-dark {
  border-color: var(--bs-body-secondary-color);
  background-color: var(--bs-body-secondary-color);
  color: var(--bs-body-secondary-color);
}
.alert-dark .alert-link {
  color: var(--bs-body-secondary-color);
}

.alert [class^=ci-], .alert [class*=" ci-"] {
  margin-top: 0.1875rem;
}
.alert hr {
  color: rgba(0, 0, 0, 0.1);
}

.alert-link {
  text-decoration: underline;
}
.alert-link:hover {
  text-decoration: none;
}

.alert-icon {
  display: flex;
  align-items: center;
  margin-top: -0.75rem;
  margin-right: 1.125rem;
  margin-bottom: -0.75rem;
  margin-left: -1.125rem;
  padding: 0.75em;
  border-top-left-radius: 0.4375rem;
  border-bottom-left-radius: 0.4375rem;
  font-size: 1.125rem;
}

.alert-primary .alert-icon {
  background-color: rgba(254, 105, 106, 0.1);
}

.alert-accent .alert-icon {
  background-color: rgba(78, 84, 200, 0.1);
}

.alert-secondary .alert-icon {
  background-color: rgba(243, 245, 249, 0.1);
}

.alert-success .alert-icon {
  background-color: rgba(66, 214, 151, 0.1);
}

.alert-info .alert-icon {
  background-color: rgba(105, 179, 254, 0.1);
}

.alert-warning .alert-icon {
  background-color: rgba(254, 165, 105, 0.1);
}

.alert-danger .alert-icon {
  background-color: rgba(243, 71, 112, 0.1);
}

.alert-light .alert-icon {
  background-color: rgba(255, 255, 255, 0.1);
}

.alert-dark .alert-icon {
  background-color: rgba(55, 63, 80, 0.1);
}

.alert-secondary .alert-icon {
  background-color: var(--bs-gray-300);
}

.alert-light .alert-icon {
  background-color: var(--bs-gray-200);
}

.alert-dismissible .btn-close {
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
}

.list-group-item-action {
  transition: all 0.2s ease-in-out;
}
.list-group-item-action:active {
  transition: none;
}

.list-group-item.active {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
}

.list-group-item-action.list-group-item-primary:hover, .list-group-item-action.list-group-item-primary:active, .list-group-item-action.list-group-item-primary:focus {
  background-color: rgba(254, 105, 106, 0.2);
}

.list-group-item-primary.active {
  background-color: var(--bs-primary) !important;
  border-color: var(--bs-primary);
  box-shadow: none;
}

.list-group-item-action.list-group-item-accent:hover, .list-group-item-action.list-group-item-accent:active, .list-group-item-action.list-group-item-accent:focus {
  background-color: rgba(78, 84, 200, 0.2);
}

.list-group-item-accent.active {
  background-color: var(--bs-accent) !important;
  border-color: var(--bs-accent);
  box-shadow: none;
}

.list-group-item-action.list-group-item-secondary:hover, .list-group-item-action.list-group-item-secondary:active, .list-group-item-action.list-group-item-secondary:focus {
  background-color: rgba(243, 245, 249, 0.2);
}

.list-group-item-secondary.active {
  background-color: var(--bs-gray-200) !important;
  border-color: var(--bs-gray-200);
  box-shadow: none;
}

.list-group-item-action.list-group-item-success:hover, .list-group-item-action.list-group-item-success:active, .list-group-item-action.list-group-item-success:focus {
  background-color: rgba(66, 214, 151, 0.2);
}

.list-group-item-success.active {
  background-color: var(--bs-success) !important;
  border-color: var(--bs-success);
  box-shadow: none;
}

.list-group-item-action.list-group-item-info:hover, .list-group-item-action.list-group-item-info:active, .list-group-item-action.list-group-item-info:focus {
  background-color: rgba(105, 179, 254, 0.2);
}

.list-group-item-info.active {
  background-color: var(--bs-info) !important;
  border-color: var(--bs-info);
  box-shadow: none;
}

.list-group-item-action.list-group-item-warning:hover, .list-group-item-action.list-group-item-warning:active, .list-group-item-action.list-group-item-warning:focus {
  background-color: rgba(254, 165, 105, 0.2);
}

.list-group-item-warning.active {
  background-color: var(--bs-warning) !important;
  border-color: var(--bs-warning);
  box-shadow: none;
}

.list-group-item-action.list-group-item-danger:hover, .list-group-item-action.list-group-item-danger:active, .list-group-item-action.list-group-item-danger:focus {
  background-color: rgba(243, 71, 112, 0.2);
}

.list-group-item-danger.active {
  background-color: var(--bs-danger) !important;
  border-color: var(--bs-danger);
  box-shadow: none;
}

.list-group-item-action.list-group-item-light:hover, .list-group-item-action.list-group-item-light:active, .list-group-item-action.list-group-item-light:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.list-group-item-light.active {
  background-color: var(--bs-light) !important;
  border-color: var(--bs-light);
  box-shadow: none;
}

.list-group-item-action.list-group-item-dark:hover, .list-group-item-action.list-group-item-dark:active, .list-group-item-action.list-group-item-dark:focus {
  background-color: rgba(55, 63, 80, 0.2);
}

.list-group-item-dark.active {
  background-color: var(--bs-body-secondary-color) !important;
  border-color: var(--bs-body-secondary-color);
  box-shadow: none;
}

.list-group-item-secondary,
.list-group-item-light {
  color: var(--bs-body-color) !important;
}

.list-group-item-secondary {
  background-color: var(--bs-gray-100) !important;
}

.list-group-item-light {
  background-color: var(--bs-light) !important;
}

.btn-close {
  transition: opacity 0.15s ease-in-out;
}

.toast-header [class*=ci-] {
  font-size: 1.25em;
}
.toast-header:not([class*=bg-]) {
  border-bottom: 1px solid rgba(227, 233, 239, 0.75);
}

.popover-header {
  font-size: 0.9375rem;
}

.popover.bs-popover-bottom .popover-arrow::after, .popover.bs-popover-auto[data-popper-placement^=bottom] .popover-arrow::after {
  border-bottom-color: var(--bs-gray-100);
}

.modal-quick-view .modal-dialog {
  max-width: 1140px !important;
}
@media (min-width: 500px) {
  .modal-quick-view {
    padding-left: 1rem;
  }
}

.tns-carousel {
  position: relative;
}
.tns-carousel .tns-carousel-inner {
  position: relative;
  display: flex;
  overflow: hidden;
  touch-action: manipulation;
  opacity: 0;
}
.tns-carousel .tns-carousel-inner:active {
  cursor: -webkit-grab;
  cursor: grab;
}
.tns-carousel .tns-carousel-inner.tns-slider {
  display: block;
  opacity: 1;
}
.tns-carousel .tns-carousel-inner > * {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.tns-carousel .tns-controls:focus {
  outline: none;
}
.tns-carousel [data-controls] {
  position: absolute;
  top: 50%;
  width: 2.75rem;
  height: 2.75rem;
  margin-top: -1.375rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 50%;
  background-color: var(--bs-light);
  font-size: 0.8085rem;
  line-height: 2.625rem;
  text-align: center;
  z-index: 10;
}
.tns-carousel [data-controls][disabled] {
  opacity: 0 !important;
}
.tns-carousel [data-controls=prev] {
  left: 1.75rem;
}
.tns-carousel [data-controls=next] {
  right: 1.75rem;
}
.tns-carousel.tns-controls-lg [data-controls] {
  width: 3.25rem;
  height: 3.25rem;
  margin-top: -1.625rem;
  font-size: 0.9555rem;
  line-height: 3.125rem;
}
.tns-carousel.tns-controls-sm [data-controls] {
  width: 2.25rem;
  height: 2.25rem;
  margin-top: -1.125rem;
  font-size: 0.6615rem;
  line-height: 2.125rem;
}
.tns-carousel:not(.tns-controls-static) [data-controls] {
  opacity: 0;
}
.tns-carousel:not(.tns-controls-static) [data-controls=prev] {
  transform: translateX(1rem);
}
.tns-carousel:not(.tns-controls-static) [data-controls=next] {
  transform: translateX(-1rem);
}
.tns-carousel:not(.tns-controls-static):hover [data-controls] {
  transform: none;
  opacity: 1;
}
.tns-carousel.tns-controls-outside {
  padding: 0 1.375rem;
}
.tns-carousel.tns-controls-outside [data-controls=prev] {
  left: 0;
}
.tns-carousel.tns-controls-outside [data-controls=next] {
  right: 0;
}
.tns-carousel.tns-controls-outside.tns-controls-lg {
  padding: 0 1.625rem;
}
.tns-carousel.tns-controls-outside.tns-controls-sm {
  padding: 0 1.125rem;
}
.tns-carousel.tns-nav-enabled:not(.tns-nav-inside) [data-controls] {
  margin-top: -3.0625rem;
}
.tns-carousel.tns-nav-enabled:not(.tns-nav-inside).tns-controls-lg [data-controls] {
  margin-top: -3.3125rem;
}
.tns-carousel.tns-nav-enabled:not(.tns-nav-inside).tns-controls-sm [data-controls] {
  margin-top: -2.8125rem;
}

.tns-carousel .tns-nav {
  padding-top: 0.875rem;
  padding-bottom: 0.5rem;
  text-align: center;
}
.tns-carousel.tns-nav-start .tns-nav {
  text-align: left;
}
.tns-carousel.tns-nav-end .tns-nav {
  text-align: right;
}
.tns-carousel [data-nav] {
  display: inline-block;
  width: 0.3125rem;
  height: 0.3125rem;
  margin: 0 0.375rem;
  padding: 0;
  transition: width 0.2s ease-in-out, background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 0.15625rem;
  background-color: #b6bcc5;
}
.tns-carousel [data-nav]:focus {
  outline: none;
}
.tns-carousel [data-nav].tns-nav-active {
  width: 1.25rem;
  background-color: var(--bs-primary);
}
.tns-carousel.tns-nav-light [data-nav] {
  background-color: var(--bs-light);
}
.tns-carousel.tns-nav-inside .tns-nav {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 1rem;
}

.tns-carousel-controls {
  white-space: nowrap;
}
.tns-carousel-controls button {
  display: none;
}
.tns-carousel-controls:focus {
  outline: none;
}
.tns-carousel-controls [data-controls] {
  display: inline-block;
  width: 2.25rem;
  height: 2.25rem;
  margin: 0.0625rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 50%;
  background-color: var(--bs-light);
  font-size: 0.6615rem;
  line-height: 2.125rem;
  text-align: center;
  z-index: 10;
}
.tns-carousel-controls [data-controls][disabled] {
  opacity: 0 !important;
}

.tns-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.tns-item .from-top, .tns-item .from-bottom,
.tns-item .from-start, .tns-item .from-end,
.tns-item .scale-up, .tns-item .scale-down {
  transition: all 0.45s 0.3s ease-in-out;
  opacity: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.tns-item .from-top {
  transform: translateY(-45px);
}
.tns-item .from-bottom {
  transform: translateY(45px);
}
.tns-item .from-start {
  transform: translateX(-45px);
}
.tns-item .from-end {
  transform: translateX(45px);
}
.tns-item .scale-up {
  transform: scale(0.8);
}
.tns-item .scale-down {
  transform: scale(1.2);
}
.tns-item .delay-1 {
  transition-delay: 0.5s;
}
.tns-item .delay-2 {
  transition-delay: 0.7s;
}
.tns-item .delay-3 {
  transition-delay: 0.9s;
}
.tns-item .delay-4 {
  transition-delay: 1.1s;
}
.tns-item.tns-slide-active .from-top, .tns-item.tns-slide-active .from-bottom {
  transform: translateY(0);
  opacity: 1;
}
.tns-item.tns-slide-active .from-start, .tns-item.tns-slide-active .from-end {
  transform: translateX(0);
  opacity: 1;
}
.tns-item.tns-slide-active .scale-up, .tns-item.tns-slide-active .scale-down {
  transform: scale(1);
  opacity: 1;
}

.gallery-item {
  display: block;
  position: relative;
  text-decoration: none !important;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.gallery-item > img {
  display: block;
  width: 100%;
}
.gallery-item::before {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(43, 52, 69, 0.5);
  content: "";
  opacity: 0;
  z-index: 1;
}
.gallery-item::after {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.875rem;
  height: 2.875rem;
  margin-top: -1.4375rem;
  margin-left: -1.4375rem;
  transform: scale(0.3);
  color: var(--bs-body-secondary-color);
  font-family: "cartzilla-icons";
  font-size: 1.75rem;
  text-align: center;
  line-height: 2.875rem;
  content: "\\e900";
  z-index: 5;
}
.gallery-item .gallery-item-caption {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 0.5rem;
  transform: translateY(0.5rem);
  color: var(--bs-body-secondary-color);
  font-size: 0.875rem;
  text-align: center;
  z-index: 5;
}
.gallery-item::after,
.gallery-item .gallery-item-caption {
  transition: all 0.3s ease-in-out;
  opacity: 0;
}
.gallery-item:hover::before, .gallery-item:hover::after,
.gallery-item:hover .gallery-item-caption {
  transform: none;
  opacity: 1;
}
.gallery-item.video-item::after {
  transform: none;
  border-radius: 50%;
  background-color: var(--bs-light);
  color: var(--bs-body-color);
  font-size: 0.675rem;
  font-weight: 700;
  opacity: 1;
  box-shadow: 0 0.375rem 1rem -0.25rem rgba(0, 0, 0, 0.2);
  content: "\\e969";
}

.lg-backdrop {
  z-index: 1100;
}

.lg-outer {
  z-index: 1110;
}

.lg-on {
  overflow: hidden;
}

.lg-item:focus, .lg:focus, .lg-outer:focus,
.lg-inner:focus {
  outline: none;
}

.steps {
  display: flex;
  width: 100%;
}

.step-item {
  flex-basis: 0;
  flex-grow: 1;
  transition: color 0.25s ease-in-out;
  text-align: center;
  text-decoration: none !important;
}
.step-item:first-child .step-progress {
  border-radius: 0.125rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.step-item:last-child .step-progress {
  border-radius: 0.125rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.step-progress {
  position: relative;
  width: 100%;
  height: 0.25rem;
}

.step-count {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  width: 1.625rem;
  height: 1.625rem;
  margin-left: -0.8125rem;
  border-radius: 50%;
  font-size: 0.875rem;
  line-height: 1.625rem;
}

.step-label {
  padding-top: 1.5625rem;
}
.step-label > i {
  margin-top: -0.25rem;
  margin-right: 0.425rem;
  font-size: 1.2em;
  vertical-align: middle;
}

@media (max-width: 499.98px) {
  .step-label {
    font-size: 0.75rem;
  }
  .step-label > i {
    display: none;
  }
}
.steps-dark .step-item {
  color:var(--bs-gray);
}
.steps-dark .step-count,
.steps-dark .step-progress {
  color: var(--bs-body-color);
  background-color: var(--bs-gray-200);
}
.steps-dark .step-item:hover {
  color: var(--bs-body-color);
}
.steps-dark .step-item.active.current {
  color: var(--bs-body-secondary-color);
  pointer-events: none;
}
.steps-dark .step-item.active .step-count,
.steps-dark .step-item.active .step-progress {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-primary);
}

.steps-light .step-item {
  color: rgba(255, 255, 255, 0.55);
}
.steps-light .step-count,
.steps-light .step-progress {
  color: var(--bs-body-secondary-color);
  background-color: #485268;
}
.steps-light .step-item:hover {
  color: rgba(255, 255, 255, 0.8);
}
.steps-light .step-item.active.current {
  color: var(--bs-body-secondary-color);
  pointer-events: none;
}
.steps-light .step-item.active .step-count,
.steps-light .step-item.active .step-progress {
  color: var(--bs-body-secondary-color);
  background-color: var(--bs-primary);
}

.testimonial {
  margin-bottom: 0;
  padding-top: 0.75rem;
}
.testimonial .card-body {
  padding-top: 2.625rem;
}
.testimonial .testimonial-mark {
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 0.25rem;
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color);
  font-size: 1.875rem;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0.5rem 0.575rem -0.25rem rgba(254, 105, 106, 0.75);
  z-index: 5;
}
.testimonial .testimonial-mark::before {
  content: "''";
}

.countdown {
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
}
.countdown .countdown-value {
  font-weight: 500;
}
.countdown .countdown-label {
  margin-left: 0.125rem;
  font-size: 65%;
}
.countdown .countdown-days,
.countdown .countdown-hours,
.countdown .countdown-minutes,
.countdown .countdown-seconds {
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
.countdown .countdown-seconds {
  margin-right: 0;
}

.ct-line {
  stroke: var(--bs-accent) !important;
  stroke-width: 0.125rem;
}

.ct-point {
  stroke: var(--bs-accent) !important;
  stroke-width: 0.625rem;
}

.ct-bar {
  stroke: var(--bs-accent) !important;
  stroke-width: 0.625rem;
}

.ct-chart-pie .ct-label {
  fill: var(--bs-light);
  font-size: 1rem;
}

.widget .tns-carousel .tns-nav {
  padding-top: 0.5rem;
}

.widget-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.widget-list[data-simplebar] {
  overflow-x: hidden;
}

.widget-title {
  margin-bottom: 1.125rem;
  font-size: 1.0625rem;
  font-weight: 500;
}

.widget-categories .accordion-item {
  border: 0;
  border-radius: 0;
}
.widget-categories .accordion-body {
  padding: 0.625rem 0;
}
.widget-categories .accordion-button {
  padding: 0.444rem 0;
  font-size: 0.9375rem;
  font-weight: normal;
  color: var(--bs-primary);
  box-shadow: none;
}
.widget-categories .accordion-button::after {
  width: 1.375rem;
  height: 1.375rem;
  padding-top: 0.0625rem;
  background-image: none;
  background-color: rgba(254, 105, 106, 0.1);
  font-family: "cartzilla-icons";
  font-size: 0.5rem;
  font-weight: bold;
  content: "\\e906";
  text-align: center;
  line-height: 1.375rem;
}
.widget-categories .accordion-button.collapsed {
  color: var(--bs-body-color);
}
.widget-categories .accordion-button.collapsed::after {
  background-color: var(--bs-gray-200);
}
.widget-categories .accordion-button:hover {
  color: var(--bs-primary);
}
.widget-categories .accordion-button:hover::after {
  background-color: rgba(254, 105, 106, 0.1);
}
.widget-categories .widget-list-item {
  margin-bottom: 0.375rem;
  padding-left: 0.75rem;
}
.widget-categories .widget-list:not([data-simplebar]) {
  border-right: 2px solid var(--bs-gray-300);
}
.widget-categories .widget-list:not([data-simplebar]) .widget-list-item {
  padding-right: 1rem;
}
.widget-categories .widget-list:not([data-simplebar]) .widget-list-item .widget-list:not([data-simplebar]) {
  border-right: 0;
}

.widget-list-item {
  margin-bottom: 0.5rem;
}
.widget-list-item:last-child {
  margin-bottom: 0;
}

.widget-list-link {
  display: block;
  transition: color 0.25s ease-in-out;
  color: var(--bs-body-color);
  font-size: 0.875rem;
  font-weight: normal;
}
.widget-list-link:hover {
  color: var(--bs-primary);
}

.active > .widget-list-link {
  color: var(--bs-primary);
}

.widget-light .widget-list-link {
  color: rgba(255, 255, 255, 0.65);
}
.widget-light .widget-list-link:hover {
  color: var(--bs-body-secondary-color);
}
.widget-light .active > .widget-list-link {
  color: var(--bs-body-secondary-color);
}

.widget-product-title {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
}
.widget-product-title > a {
  color: var(--bs-body-secondary-color);
}
.widget-product-title:hover > a {
  color: var(--bs-primary);
}

.widget-product-meta {
  font-size: 0.875rem;
}

.widget-cart-item {
  position: relative;
}
.widget-cart-item .btn-close {
  position: absolute;
  top: 50%;
  left: 0;
  height: auto;
  padding: 0;
  transform: translateY(-50%);
  transition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;
  background: none;
  font-size: 1.5rem;
  font-weight: 300;
  visibility: hidden;
  opacity: 0;
}
.widget-cart-item > .d-flex {
  transition: all 0.25s ease-in-out;
}
.widget-cart-item:hover > .d-flex {
  transform: translateX(1.125rem);
}
.widget-cart-item:hover .btn-close {
  visibility: visible;
  opacity: 1;
}

.btn-tag {
  display: inline-block;
  padding: 0.375rem 0.5625rem;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.25rem;
  color: var(--bs-body-color);
  font-size: 0.75rem;
  white-space: nowrap;
}
.btn-tag:hover {
  border-color: var(--bs-gray-300);
  background-color: var(--bs-gray-200);
  color: var(--bs-body-color);
}
.btn-tag.active {
  border-color: var(--bs-primary);
  background-color: var(--bs-primary);
  color: var(--bs-body-secondary-color);
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
  pointer-events: none;
  cursor: default;
}

.range-slider-ui {
  height: 0.1875rem;
  margin: 3.5rem 0;
  border: 0;
  background-color: #eceff6;
  box-shadow: none;
}
.range-slider-ui .noUi-connect {
  background-color: var(--bs-primary);
}
.range-slider-ui .noUi-handle {
  top: 50%;
  width: 1.375rem;
  height: 1.375rem;
  margin-top: -0.6875rem;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0.125rem 0.5625rem -0.125rem rgba(0, 0, 0, 0.25);
}
.range-slider-ui .noUi-handle::before, .range-slider-ui .noUi-handle::after {
  display: none;
}
.range-slider-ui .noUi-handle:focus {
  outline: none;
}
.range-slider-ui .noUi-marker-normal {
  display: none;
}
.range-slider-ui .noUi-marker-horizontal.noUi-marker {
  width: 1px;
  background-color: #d0dae4;
}
.range-slider-ui .noUi-marker-horizontal.noUi-marker-large {
  height: 0.75rem;
}
.range-slider-ui .noUi-value {
  padding-top: 0.125rem;
  color: var(--bs-body-color);
  font-size: 0.8125rem;
}
.range-slider-ui .noUi-tooltip {
  padding: 0.25rem 0.5rem;
  border: 0;
  background-color: var(--bs-body-secondary-color);
  color: var(--bs-body-secondary-color);
  font-size: 0.75rem;
  line-height: 1.2;
  border-radius: 0.25rem;
}

html:not([dir=rtl]) .range-slider-ui.noUi-horizontal .noUi-handle {
  right: -0.6875rem;
}


/*
* ===================================================
*     Products
* ===================================================
*/
.product-grid-header {
  display: flex;
  margin-bottom: 1rem;
  color: ${theme.colors.grey600};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-grid-header strong {
  color: ${theme.colors.grey700};
}

.product-grid-header-heading {
  color: ${theme.colors.grey800};
}

.product-grid-header-show {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.3rem;
  color: ${theme.colors.grey600};
}
.product-grid-header-show.active {
  color: ${theme.colors.dark};
  font-weight: bold;
}
.product-grid-header-show:hover, .product-grid-header-show:focus {
  text-decoration: none;
  color: ${theme.colors.dark};
}

.product {
  margin-bottom: 30px;
}
@media (min-width: 768px) {
  .product:hover .product-hover-overlay {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
  .product:hover .product-stars {
    transform: translateY(0);
    opacity: 1;
  }
  .product:hover .product-swap-image-front {
    opacity: 0;
  }
}

.product-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 5px 8px;
  z-index: 20;
}
.product-badge + .product-badge {
  top: 60px;
}
.product-badge + .product-badge + .product-badge {
  top: 110px;
}
.product-badge + .product-badge + .product-badge + .product-badge {
  top: 160px;
}

.product-image {
  position: relative;
  overflow: hidden;
}

.product-stars {
  position: absolute;
  right: 0;
  bottom: 5px;
  transition: all 0.3s;
}
@media (min-width: 768px) {
  .product-stars {
    transform: translateY(1rem);
    opacity: 0;
  }
}

.product-hover-overlay {
  display: flex;
  width: 100%;
  height: 3rem;
  transition: all 0.3s;
  background: rgba(${hexToRgb(theme.colors.light)[0]}, ${
  hexToRgb(theme.colors.light)[1]
},${hexToRgb(theme.colors.light)[2]},0.92);
  align-items: center;
  justify-content: space-between;
  z-index: 20;
}
.product-hover-overlay .product-hover-overlay-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .product-hover-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    padding: 0 1rem;
    transform: translateY(3rem);
    opacity: 0;
  }
}

/* Make the container relative */
.product-swap-image {
  position: relative;
}
.product-swap-image img {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 100%;
}
.product-swap-image .product-swap-image-front {
  position: relative;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  z-index: 10;
}

.banner {
  position: relative;
  overflow: hidden;
  height: 250px;
}
.banner .banner-bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 70%;
  text-align: center;
}
.banner .banner-text {
  position: relative;
  text-align: center;
  z-index: 10;
}
.banner .banner-link::after {
  z-index: 11;
}
.banner img.bg-image,
.banner img.img-fluid {
  transition: all 0.3s;
}
.banner:hover img.bg-image,
.banner:hover img.img-fluid {
  transform: scale(1.05);
}
@media (min-width: 576px) {
  .banner {
    height: 250px;
  }
}
@media (min-width: 992px) {
  .banner {
    min-height: 400px;
  }
}
@media (min-width: 1200px) {
  .banner {
    min-height: 450px;
  }
}

.card-scale {
  position: relative;
  overflow: hidden;
}
.card-scale .img-scale-container {
  position: relative;
  overflow: hidden;
}
.card-scale img.img-scale {
  transition: all 0.3s;
}
.card-scale:hover img.img-scale {
  transform: scale(1.02);
}

.product-card {
  padding-bottom: 1.25rem;
  border: 0;
  transition: all 0.15s ease-in-out;
}
.product-card .product-card-actions,
.product-card > .btn-wishlist,
.product-card .badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 5;
}
.product-card .product-card-actions .btn-action {
  padding: 0.5rem;
  transition: all 0.15s ease-in-out;
  border-radius: 0.25rem;
  background-color: var(--bs-light);
  font-size: 0.8125rem;
  visibility: hidden;
  opacity: 0;
}
.product-card .badge {
  right: auto;
  left: 0.75rem;
}
.product-card .badge.badge-end {
  right: 0.75rem;
  left: auto;
}
.product-card .card-body {
  position: relative;
  background-color: var(--bs-light);
  z-index: 2;
}
.product-card .card-body-hidden {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin-top: -1.25rem;
  transition: all 0.15s ease-in-out;
  border-radius: 0.4375rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: var(--bs-light);
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}
@media (min-width: 500px) {
  .product-card {
    padding-bottom: 0;
  }
}
@media (min-width: 992px) {
  .product-card:hover:not(.card-static) {
    border-color: var(--bs-light) !important;
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .product-card:hover:not(.card-static) .product-card-actions .btn-action {
    opacity: 1;
    visibility: visible;
  }
  .product-card:hover:not(.card-static) .card-body-hidden {
    opacity: 1;
    visibility: visible;
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  }
}

.product-list .product-list-thumb {
  border-radius: 0.4375rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

@media (min-width: 500px) {
  .product-list .product-list-thumb {
    width: 15rem;
    border-radius: 0.4375rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
  }
  .product-list .card-body-hidden {
    top: 50%;
    margin-top: 0;
    transform: translateY(-50%);
    box-shadow: none !important;
  }
}
@media (min-width: 992px) {
  .product-list:hover + .border-top {
    opacity: 0;
  }
}
.product-card-alt {
  border: 0;
}
.product-card-alt .card-body {
  padding: 1rem 0.625rem;
}
.product-card-alt .product-thumb {
  position: relative;
  border-radius: 0.4375rem;
  overflow: hidden;
}
.product-card-alt .product-thumb > img {
  display: block;
  width: 100%;
}
.product-card-alt .product-thumb-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 52, 69, 0.5);
  z-index: 1;
}
.product-card-alt .btn-wishlist {
  top: 0.75rem;
  right: 0.75rem;
  background-color: var(--bs-light);
  z-index: 5;
  visibility: hidden;
}
.product-card-alt .badge {
  position: absolute;
  right: auto;
  left: 0.75rem;
  z-index: 5;
}
.product-card-alt .product-card-actions {
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  z-index: 5;
  visibility: hidden;
}
.product-card-alt .product-thumb-overlay,
.product-card-alt .btn-wishlist,
.product-card-alt .product-card-actions {
  position: absolute;
  transition: all 0.15s ease-in-out;
  opacity: 0;
}
@media (min-width: 992px) {
  .product-card-alt .product-thumb:hover .product-thumb-overlay,
.product-card-alt .product-thumb:hover .btn-wishlist,
.product-card-alt .product-thumb:hover .product-card-actions {
    visibility: visible;
    opacity: 1;
  }
}

.product-title > a {
  transition: color 0.25s ease-in-out;
  color: var(--bs-body-secondary-color);
  text-decoration: none !important;
}
.product-title > a:hover {
  color: var(--bs-primary);
}

.product-meta {
  transition: color 0.25s ease-in-out;
  color:var(--bs-gray);
  text-decoration: none !important;
}
.product-meta:hover {
  color: var(--bs-body-color);
}

.product-floating-btn {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  z-index: 10;
}
.product-card:hover .product-floating-btn {
  opacity: 1;
}

.star-rating {
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  vertical-align: middle;
}
.star-rating .star-rating-icon {
  display: inline-block;
  margin-right: 0.1875rem;
  color: var(--bs-gray-500);
  font-size: 0.75rem;
  vertical-align: middle;
}
.star-rating .star-rating-icon.active {
  color: var(--bs-warning);
}

.page-title-overlap {
  padding-bottom: 6.375rem;
}
.page-title-overlap + * {
  margin-top: -4.875rem;
}
@media (max-width: 767.98px) {
  .page-title-overlap {
    padding-bottom: 5.5rem;
  }
}

.credit-card-wrapper {
  margin: 1.875rem -0.9375rem;
}
@media (max-width: 499.98px) {
  .credit-card-wrapper .jp-card-container {
    width: 16.25rem !important;
  }
  .credit-card-wrapper .jp-card {
    min-width: 15.625rem !important;
  }
}

@media (min-width: 992px) {
  .product-details {
    width: 100%;
    max-width: 26rem;
    padding-top: 0.25rem;
  }
}
.product-badge {
  position: absolute;
  top: 50%;
  right: -1.75rem;
  padding-top: 0.425rem;
  padding-left: 0.625rem;
  padding-right: 1rem;
  padding-bottom: 0.425rem;
  transform: translateY(-50%);
  border-radius: 0.3125rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 0.8125rem;
}
.product-badge::after {
  position: absolute;
  bottom: -0.475rem;
  right: 0.25rem;
  height: 0;
  width: 0;
  transform: rotate(-45deg);
  border: solid transparent;
  content: " ";
  pointer-events: none;
  border-width: 0.525rem;
}
.product-badge > i {
  margin-top: -0.125rem;
  margin-right: 0.25rem;
  font-size: 1.2em;
  vertical-align: middle;
}
.product-badge.product-available {
  background-color: var(--bs-success);
  color: var(--bs-body-secondary-color);
}
.product-badge.product-available::after {
  border-color: rgba(66, 214, 151, 0);
  border-bottom-color: #29bc7d;
}
.product-badge.product-not-available {
  background-color: var(--bs-gray-200);
  color: var(--bs-body-color);
}
.product-badge.product-not-available::after {
  border-color: rgba(243, 245, 249, 0);
  border-bottom-color: #d8deeb;
}
@media (max-width: 991.98px) {
  .product-badge {
    right: -0.75rem;
  }
}

.modal .product-badge {
  right: -0.575rem;
}

.product-gallery {
  display: flex;
}

.product-gallery-thumblist {
  margin-left: -0.5rem;
}

.product-gallery-thumblist-item {
  display: block;
  position: relative;
  width: 5rem;
  height: 5rem;
  margin: 0.625rem;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid var(--bs-gray-300);
  border-radius: 0.3125rem;
  text-decoration: none !important;
  overflow: hidden;
}
.product-gallery-thumblist-item > img {
  display: block;
  width: 100%;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.6;
}
.product-gallery-thumblist-item .product-gallery-thumblist-item-text {
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0.25rem;
  transform: translateY(-50%);
  color: var(--bs-body-color);
  font-size: 0.875rem;
  text-align: center;
}
.product-gallery-thumblist-item .product-gallery-thumblist-item-text > i {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 1.5em;
}
.product-gallery-thumblist-item:hover {
  border-color: #c9d5e0;
}
.product-gallery-thumblist-item:hover > img {
  opacity: 1;
}
.product-gallery-thumblist-item.active {
  border-color: var(--bs-primary);
}
.product-gallery-thumblist-item.active > img {
  opacity: 1;
}

.product-gallery-preview {
  position: relative;
  width: 100%;
  margin-top: 0.625rem;
}
@media (min-width: 500px) {
  .product-gallery-preview {
    margin-left: 0.625rem;
  }
}

.product-gallery-preview-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  z-index: 1;
}
.product-gallery-preview-item > img {
  display: block;
  width: 100%;
}
.product-gallery-preview-item.active {
  position: relative;
  opacity: 1;
  z-index: 10;
}
.product-gallery-preview-item:hover {
  cursor: crosshair;
}

@media (max-width: 499.98px) {
  .product-gallery {
    display: block;
  }

  .product-gallery-thumblist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -1rem;
    margin-left: -1rem;
    padding-top: 1rem;
  }

  .product-gallery-thumblist-item {
    margin: 0.3125rem;
  }
}
.drift-zoom-pane {
  z-index: 1030;
}

.blog-entry-title > a {
  color: var(--bs-body-secondary-color);
  text-decoration: none !important;
  line-height: 1.3;
}
.blog-entry-title > a:hover {
  color: var(--bs-primary);
}

.blog-entry-thumb {
  display: block;
  position: relative;
  border-radius: 0.4375rem;
  overflow: hidden;
}
.blog-entry-thumb > img {
  display: block;
  width: 100%;
}
.blog-entry-thumb.video-item::before, .blog-entry-thumb.video-item::after {
  display: none;
}

.card > .blog-entry-thumb {
  border-radius: 0;
}

.blog-entry-meta-link {
  display: inline-block;
  color:var(--bs-gray) !important;
  font-weight: normal;
}
.blog-entry-meta-link > i {
  margin-top: -0.0625rem;
  margin-right: 0.375rem;
  vertical-align: middle;
}
.blog-entry-meta-link:hover {
  color: var(--bs-body-color) !important;
}

.blog-entry-meta-label {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--bs-body-color);
  text-decoration: none !important;
  z-index: 5;
}
.blog-entry-meta-label > i {
  margin-top: -0.0625rem;
  margin-right: 0.375rem;
  color:var(--bs-gray);
  vertical-align: middle;
}

.blog-entry-meta-divider {
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin: 0 1rem;
  background-color: #d9e1e9;
  vertical-align: middle;
}

.blog-entry-author-ava {
  display: inline-block;
  width: 2rem !important;
  height: 2rem !important;
  margin-right: 0.5rem;
  padding: 0.125rem;
  border: 1px solid var(--bs-gray-300);
  border-radius: 50%;
  vertical-align: middle;
}
.blog-entry-author-ava > img {
  display: block;
  width: 100%;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .blog-list {
    display: flex;
  }
  .blog-list .blog-start-column {
    width: 37%;
    padding-right: 0.9375rem;
  }
  .blog-list .blog-end-column {
    width: 63%;
    padding-left: 0.9375rem;
  }
}
.featured-posts-carousel [data-controls] {
  margin-top: -2.75rem;
}

.offcanvas {
  will-change: transform, box-shadow;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease;
  box-shadow: none;
  visibility: visible !important;
}
.offcanvas:not(.offcanvas-end):not(.offcanvas-bottom) {
  top: 0;
  left: 0;
  width: 20rem;
  border-right: 0 solid transparent;
  transform: translateX(-100%);
}
.offcanvas.show {
  transform: none !important;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1) !important;
}
.offcanvas.rounded-3 {
  border-radius: 0 !important;
}

.offcanvas-header,
.offcanvas-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 1.25rem 1.5rem;
}
.bg-dark .offcanvas-header,
.bg-dark .offcanvas-footer {
  background-color: rgba(255, 255, 255, 0.05);
}

.offcanvas-body {
  height: 100%;
}
.offcanvas-body::-webkit-scrollbar {
  width: 0.1875rem;
  background-color: transparent;
  opacity: 0;
}
.offcanvas-body::-webkit-scrollbar-thumb {
  background-color: var(--bs-gray-500);
  border-radius: 0.09375rem;
}
.offcanvas-body > .simplebar-track {
  display: block;
  background-color: transparent;
}
.offcanvas-body .simplebar-vertical {
  margin-right: 0.1875rem;
}

.offcanvas-expand .offcanvas-body .widget-links {
  margin-left: -1.5rem;
}
.offcanvas-expand .offcanvas-body .widget-links .widget-title {
  padding-left: 1.5rem;
}
.offcanvas-expand .offcanvas-body .widget-list-link {
  padding-left: 1.375rem;
  border-left: 0.125rem solid transparent;
}
.offcanvas-expand .offcanvas-body .active > .widget-list-link {
  border-left-color: var(--bs-primary);
}
.offcanvas-expand .offcanvas-body .widget-light .active > .widget-list-link {
  border-left-color: var(--bs-light);
}

.sidebar-toggle {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  z-index: 1025;
}

@media (min-width: 992px) {
  .offcanvas-expand {
    transform: none !important;
    z-index: 1031;
  }
  .offcanvas-expand.offcanvas-start, .offcanvas-expand.offcanvas-end, .offcanvas-expand.offcanvas-bottom {
    transform: none !important;
  }

  .offcanvas-collapse {
    display: block;
    position: static;
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;
    width: 100% !important;
    height: auto !important;
    transform: none !important;
    background-color: transparent;
  }
  .offcanvas-collapse .offcanvas-header,
.offcanvas-collapse .offcanvas-footer {
    display: none;
  }
  .offcanvas-collapse .offcanvas-body {
    padding: 0;
    overflow: initial;
  }
  .offcanvas-collapse.rounded-3 {
    border-radius: 0.4375rem !important;
  }

  .offcanvas-enabled {
    padding-left: 21.5rem;
  }
  .offcanvas-enabled.offcanvas-end {
    padding-right: 21.5rem;
    padding-left: 0;
  }
}
.handheld-toolbar {
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid var(--bs-gray-300);
  background-color: var(--bs-light);
  box-shadow: -1.25rem 0 2rem 0 rgba(43, 52, 69, 0.15);
  z-index: 1026;
}

.handheld-toolbar-item {
  padding: 0.5rem;
  padding-top: 0.125rem;
  border-left: 1px solid var(--bs-gray-300);
  text-align: center;
}
.handheld-toolbar-item:first-child {
  border-right: 0;
}
.handheld-toolbar-item .badge {
  font-size: 0.625rem;
}

.handheld-toolbar-icon {
  display: block;
  color: var(--bs-body-color);
  font-size: 1.25rem;
}
.handheld-toolbar-icon > i, .handheld-toolbar-icon > .badge {
  display: inline-block;
  vertical-align: middle;
}

.handheld-toolbar-label {
  display: block;
  color:var(--bs-gray);
  font-size: 0.6875rem;
}

@media (max-width: 991.98px) {
  .handheld-toolbar-enabled .footer {
    padding-bottom: 3.5rem;
  }

  .handheld-toolbar {
    display: block;
  }
  .handheld-toolbar + .btn-scroll-top {
    bottom: 4.5rem;
  }
}
.simplebar-track {
  transition: opacity 0.25s ease-in-out;
  background-color: #e9edf4;
  opacity: 0;
}
.simplebar-track .simplebar-scrollbar {
  border-radius: 0.09375rem;
  background-color: var(--bs-gray-500);
}
.simplebar-track .simplebar-scrollbar::before {
  display: none;
}
.simplebar-track.simplebar-vertical {
  width: 0.1875rem !important;
}
.simplebar-track.simplebar-vertical .simplebar-scrollbar {
  right: 0;
  width: 0.1875rem;
}
.simplebar-track.simplebar-horizontal {
  height: 0.1875rem !important;
}
.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  top: 0;
  height: 0.1875rem !important;
}

[data-simplebar] {
  overflow-y: auto;
}
[data-simplebar]::-webkit-scrollbar {
  width: 0.1875rem;
  background-color: transparent;
  opacity: 0;
}
[data-simplebar]::-webkit-scrollbar-thumb {
  background-color: var(--bs-gray-500);
  border-radius: 0.09375rem;
}
[data-simplebar]:hover .simplebar-track {
  opacity: 1;
}

[data-simplebar]:not(.offcanvas-body) {
  padding-right: 1rem !important;
}

[data-simplebar-auto-hide=false] .simplebar-track {
  opacity: 1;
}

.bg-dark .simplebar-track, .bg-darker .simplebar-track, .dropdown-menu-dark .simplebar-track {
  background-color: transparent;
}
.bg-dark .simplebar-track .simplebar-scrollbar, .bg-darker .simplebar-track .simplebar-scrollbar, .dropdown-menu-dark .simplebar-track .simplebar-scrollbar {
  background-color: #58647d;
}

.masonry-grid[data-columns] {
  margin-right: -0.9375rem;
  margin-left: -0.9375rem;
  overflow: hidden;
}
.masonry-grid[data-columns]::after {
  display: block;
  clear: both;
  content: "";
}
.masonry-grid[data-columns] .masonry-grid-item {
  width: 100%;
  float: left;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  padding-bottom: 1.875rem;
}

.masonry-grid[data-columns="1"] .masonry-grid-item {
  width: 100%;
}

@media (min-width: 500px) {
  .masonry-grid[data-columns="2"] .masonry-grid-item,
.masonry-grid[data-columns="3"] .masonry-grid-item,
.masonry-grid[data-columns="4"] .masonry-grid-item,
.masonry-grid[data-columns="5"] .masonry-grid-item,
.masonry-grid[data-columns="6"] .masonry-grid-item {
    width: 50%;
  }
}
@media (min-width: 768px) {
  .masonry-grid[data-columns="3"] .masonry-grid-item,
.masonry-grid[data-columns="4"] .masonry-grid-item,
.masonry-grid[data-columns="5"] .masonry-grid-item,
.masonry-grid[data-columns="6"] .masonry-grid-item {
    width: 33.33%;
  }
}
@media (min-width: 992px) {
  .masonry-grid[data-columns="4"] .masonry-grid-item,
.masonry-grid[data-columns="5"] .masonry-grid-item,
.masonry-grid[data-columns="6"] .masonry-grid-item {
    width: 25%;
  }
}
@media (min-width: 1280px) {
  .masonry-grid[data-columns="5"] .masonry-grid-item {
    width: 20%;
  }

  .masonry-grid[data-columns="6"] .masonry-grid-item {
    width: 16.66%;
  }
}

/*
     Other
    ------------------------
*/
.overflow-visible {
  overflow: visible !important;
}

.shadow-0 {
  box-shadow: none !important;
}

.left-box {
  box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.7);
}

.hover-scale {
  transition: all 0.2s ease-in-out;
}
.hover-scale:hover {
  transform: scale(1.05);
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

img.bg-image {
  font-family: "object-fit: cover;";
  object-fit: cover;
}

.bg-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.bg-cover.bg-cover-left {
  background-position: left center;
}
.bg-cover.bg-cover-right {
  background-position: right center;
}

.full-screen {
  height: calc(100vh - 82px);
}

.mh-full-screen {
  min-height: 100vh;
}
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .mh-full-screen {
    height: 100vh;
  }
}

.mh-full-screen-with-header {
  min-height: calc(100vh - 140px - 2rem);
}
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .mh-full-screen-with-header {
    height: calc(100vh - 140px - 2rem);
  }
}

/*
* ===================================================
*    AOS additional styles
* ===================================================
*/
@media (max-width: 991.98px) {
  [data-aos-delay] {
    transition-delay: 0s !important;
  }
}

`;
