import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material'


interface RecipeProps {
    id?:number;
    title: string;
    description: string;
    image: string;
    difficulty:number;
    duration:number;
    ingredients:string[];
}


interface RecipeFormProps {
    recipes:string[];
    setRecipes: ([]) => void
}


const RecipeForm:React.FC<RecipeFormProps> = ({recipes, setRecipes}) => {

    const submitRecipe: () => void = () => {
        const recipe:RecipeProps = {
            'title':'title',
            'description':'some description',
            'image':'https://lipsum.app/640x480',
            'difficulty':4,
            'duration':30,
            'ingredients':['butter']
        }
        const updatedList = [recipe, ...recipes];
        setRecipes(updatedList);
    }

  return (
    <form action="" method="post">
        <FormControl fullWidth={true} variant="standard" required>
            <InputLabel htmlFor="recipe-title">Add a new Recipe</InputLabel>
            <Input id="recipe-title" />
        </FormControl>
        <Button variant="outlined" onClick={submitRecipe}>Submit</Button>
    </form>
  )
}

export default RecipeForm
