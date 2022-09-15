import logo from './logo.svg';
import './App.css';
import { LocaleSelector } from '@alchemyeng/advanced-selector';
import { IntlProvider } from 'react-intl';
import { messages, getLocaleObject } from '@alchemyeng/advanced-selector';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  const defaultLocale = getLocaleObject('en-US', 'en-US');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <IntlProvider
          messages={messages(defaultLocale.locale)}
          key={defaultLocale.locale}
          locale={defaultLocale.locale}
          defaultLocale={defaultLocale.locale}
      >
        <ThemeProvider theme={theme}>
          <LocaleSelector
            initialValue={[defaultLocale]}
            closeDialog={() => {}}
            multiple={true}
            requireSelectedItem
            saveButtonAlwaysEnabled
            handleNoneSelected={() => {}}
            open={true}
            exclude={['en']}
          />
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
}

export default App;
