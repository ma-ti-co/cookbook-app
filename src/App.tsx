import { useState, useEffect, useRef } from 'react';
import RecipeItem from './components/RecipeItem';
import Navigation from './components/NavigationMain';
import './App.css';
import { Alert, Box, Card, Container, Skeleton, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import IngredientAccordion from './components/IngredientAccordion';
import NavigationMain from './components/NavigationMain';
import RecipeModal from './components/RecipeModal';
import RecipeSkeleton from './components/RecipeSkeleton';
import {supabase} from '../lib/initSupabase'
import { Recipe, RecipeFormProps } from '../lib/schema';
import RecipeNull from './components/RecipeNull';




const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const placeholderItems = [null, null, null]

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    setLoading(true);
    const {data, error} = await supabase
      .from('recipes')
      .select('*')
      .order('id',  { ascending: false });
      if(error) console.log('error', error)
      else{
        setRecipes(data);
        setTimeout(function(){
          setLoading(false);
        }, 1000) 
      }
  }

  const deleteRecipe = async (id: number) => {
    const {data, error} = await supabase
      .from('recipes')
      .delete()
      .eq('id', id)
    if(!error){
      setDeleted(true);
      setRecipes((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const props = {
    'recipes':recipes,
    'setRecipes':setRecipes,
    'fetchRecipes':fetchRecipes
  }


  return (
    <>
    {deleted ? <Alert sx={{position:'fixed', bottom:'1rem', left:'50%', transform:'translateX(-50%)'}} variant='filled' severity='success' onClose={() => setDeleted(false)}>Recipe has been deleted</Alert>:''}
      <Navigation {...props} />
      {
      <Box sx={{width:'45%', margin:'auto'}}>
          {!loading && recipes.length == 0 ? <RecipeNull />:''}
          <Stack spacing={2} mt={2}>
            {!loading ? 
              recipes.map((node) => (
              <RecipeItem
                item={node}
                deleteRecipe={deleteRecipe}
              />
              ))
            :
            placeholderItems.map((node) => <RecipeSkeleton />)
          }
          </Stack>
        </Box>
       }
    </>
  )
}

export default App
