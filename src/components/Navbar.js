import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTheme } from '../hooks/useTheme';
import Searchbar from './Searchbar';

import './Navbar.css';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Expert</h1>
        </Link>
        <Searchbar />

        <Link to='/create'>Create Recipe + </Link>
      </nav>
    </div>
  );
}
