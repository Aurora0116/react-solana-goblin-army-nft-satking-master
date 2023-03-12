// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
//style
import "./assets/scss/style.css"

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}
