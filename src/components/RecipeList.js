import { Link } from 'react-router-dom';
import deleteIcon from '../assetts/delete-icon.svg'

// styles
import './RecipeList.css';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/Config';

export default function RecipeList({ recipes }) {
  const {mode} =useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>;
  }
  const handleClick=(id)=>{
         projectFirestore.collection('recipes').doc(id).delete();
  }

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img src={deleteIcon} alt="delete" className='delete' onClick={()=>handleClick(recipe.id)} />
        </div>
      ))}
    </div>
  );
}
