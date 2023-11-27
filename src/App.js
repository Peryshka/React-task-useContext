import {useState, useContext, createContext} from 'react';
import MainPage from './components/MainPage';
import styled from './App.module.css';

export const ThemeCont = createContext(null);

function App() {
  const [theme,setTheme] = useState('light');
  return (
    <ThemeCont.Provider value={theme}>
        <MainPage />
      <label className={styled.label}>
        <input
          className={styled['inp']}
        type="checkbox"
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(
            e.target.checked ? 'dark' : 'light'
          )
        }}
        />
        Switch Mode
      </label>
    </ThemeCont.Provider>
  );
}

export default App;
