import { useTheme } from '../hooks/useTheme';

import sun from '../assetts/sun.svg';
import './ThemeSelector.css';

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();
  const themeColors = ['#58249c', '#249c6b', '#b70233'];
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
    console.log(mode);
  };
  

  return (
    <div>
      <div className='theme-selector'>
        <div className='mode-toggle'>
          <img src={sun} alt='mode' onClick={toggleMode} style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} />
        </div>
        <div className='theme-buttons'>
          {themeColors.map((color) => (
            <div key={color} onClick={() => changeColor(color)} style={{ background: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
