import './App.css';
import RecipeList from './RecipeList';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleReceipes} />
    </div>
  )
}

const sampleReceipes = [
  {
    id: 1, 
    name: 'Plain Chicken',
    servings: 2,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n 2. Put chicken in oven\n 3. Eat chicken'
  },
  {
    id: 2, 
    name: 'Plain Pork',
    servings: 4,
    cookTime: '1:45',
    instructions: '1. Put salt on pork\n 2. Put pork in oven\n 3. Eat pork'
  }
]

export default App;
