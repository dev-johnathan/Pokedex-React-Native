import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
// import { Welcome } from './src/global/pages/welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       {/* <Welcome/> */}

       <Home />

        </ThemeProvider>
  );
}

;