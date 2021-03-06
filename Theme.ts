import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
    ...options,
  })
}