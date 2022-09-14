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
    instructions: '1. Put salt on chicken\n 2. Put chicken in oven\n 3. Eat chicken',
    ingredients: [
      {
        id: 1, 
        name: 'Chicken',
        amount: '2 lbs'
      }, 
      {
        id: 2, 
        name: 'Salt',
        amount: '2 tsp'
      }
    ]
  },
  {
    id: 2, 
    name: 'Plain Pork',
    servings: 4,
    cookTime: '1:45',
    instructions: '1. Put salt on pork\n 2. Put pork in oven\n 3. Eat pork',
    ingredients: [
      {
        id: 1, 
        name: 'Pork',
        amount: '8 lbs'
      }, 
      {
        id: 2, 
        name: 'Paprika',
        amount: '4 tsp'
      }
    ]
  }
]

export default App;
