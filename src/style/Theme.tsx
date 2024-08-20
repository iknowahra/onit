
import { DefaultTheme } from 'styled-components';
const BOX_BORDER = '1px solid rgba(var(--b6a,219,219,219),1)';

const theme: DefaultTheme = {
  basicWidth: '320px',
  color: {
    main: '#F2722D',
    lightMain: '#e99d74',
    sub: '#777',
    charcoal: '#333',
    grey: '#c7c7c7',
    lightGrey: '#F5F5F5',
  },
  boxBorder: BOX_BORDER,
};

const nextTheme: DefaultTheme = {
  basicWidth: '320px',

  color: {
    main: '#1c1f25',
    sub: '#fff',
  },
};

export { theme, nextTheme };
