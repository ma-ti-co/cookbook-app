import { useState, useEffect } from 'react'
import RecipeItem from './components/RecipeItem'
import './App.css'
import data from '../public/recipes.json'
import { Box, Card, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import IngredientAccordion from './components/IngredientAccordion';
import NavigationMain from './components/NavigationMain';
import RecipeModal from './components/RecipeModal';
import useFetch from './useFetch';


interface RecipeProps {
  id:number;
  title: string;
  description: string;
  image: string;
  difficulty:number;
  duration:number;
  ingredients:string[];
}

interface JSONProps {
  data:string[] | null;
}


function App() {
  const [recipes, setRecipes] = useState<JSONProps[]>([]);

  setRecipes([]);
  
  // useEffect(() => {
  //   console.log(typeof recipes);
  //   console.log("Rendering");
  //   console.log('fetching now');
  //   console.log(json);
  //   console.log(Array.isArray(json));
  
  // }, [])


  return (
    <Box>

        {/* <Grid container spacing={2}>
          <Grid component={"aside"} md={2}>
            <NavigationMain recipes={recipes} />
            <RecipeModal recipes={recipes} setRecipes={setRecipes}/>
          </Grid>
          <Grid component={"main"} md={6} mdOffset={3}>
          {recipes.map((node, index) => (
            <RecipeItem
              key={index}
              id={index} 
              title={node.title}
              description={node.description}
              ingredients={node.ingredients}
              image={node.image}
              difficulty={node.difficulty}
              duration={node.duration}
            />
          ))}
          </Grid>
        </Grid> */}
    </Box>
  )
}

export default App
