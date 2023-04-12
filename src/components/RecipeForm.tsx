import React, { useEffect, useState, FormEvent } from 'react'
import { Recipe } from '../../lib/schema'
import { Box, TextField, FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material'
import { supabase } from '../../lib/initSupabase';



interface RecipeFormProps{
    recipes:any[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    fetchRecipes: () => void,
    setRecipes:React.Dispatch<React.SetStateAction<Recipe[]>>;
  }

interface Form{
    title:string,
    description:string,
    image:string,
    difficulty:number,
    time:number,
    ingredients:string[]
}


const RecipeForm = ({setRecipes, recipes, fetchRecipes, setOpen}:RecipeFormProps) => {
    
    const defaultFormValues:Form = 
    {
        title: '',
        description: '',
        image:'https://lipsum.app/400x400/',
        difficulty:0,
        time: 15,
        ingredients:[]
    }

    const [formValues, setFormValues] = useState(defaultFormValues)
    const [errors, setErrors] = useState<any[]>([])
    const formElements = Object.keys(defaultFormValues);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {data, error} = await supabase
        .from('recipes')
        .insert([formValues]);
        console.log(data);
        if(!error){
            // const newList = [formValues, ...recipes];
            // setRecipes(newList);
            fetchRecipes();
            setOpen(false);
        }else{
            if(error){
                console.log(error.message);
            }
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.currentTarget;
        if(name === 'ingredients'){
            const valueArray:string[] = value.split(',');
            setFormValues({...formValues, ['ingredients']:valueArray});
        }else{
            setFormValues({...formValues, [name]:value})
        }

    }


    return (
    <form action="" method="post" onSubmit={handleSubmit}>
    {formElements.map((value, key) => {
        if(Object.keys(defaultFormValues)[key]==='difficulty' ||Object.keys(defaultFormValues)[key]==='time'){
            return <TextField 
            key={key} 
            sx={{marginBottom:'1rem'}} 
            fullWidth 
            id={`field-${value[0]}`} 
            name={Object.keys(defaultFormValues)[key]} 
            label={Object.keys(defaultFormValues)[key].toUpperCase()} 
            variant="outlined"
            type="number"
            required
            onChange={handleChange}
        />
        }else if(Object.keys(defaultFormValues)[key]==='ingredients'){
            return <TextField 
            key={key} 
            sx={{marginBottom:'1rem'}} 
            fullWidth 
            id={`field-${value[0]}`} 
            name={Object.keys(defaultFormValues)[key]} 
            label={Object.keys(defaultFormValues)[key].toUpperCase()} 
            variant="outlined"
            required
            onChange={handleChange}
            helperText="Separate each ingredient with a comma"
        />
        }else if(Object.keys(defaultFormValues)[key]==='image'){
            return <TextField 
            key={key} 
            sx={{marginBottom:'1rem'}} 
            fullWidth 
            id={`field-${value[0]}`} 
            name={Object.keys(defaultFormValues)[key]} 
            label={Object.keys(defaultFormValues)[key].toUpperCase()} 
            variant="outlined"
            onChange={handleChange}
        />
        }else{
            return <TextField 
            key={key} 
            sx={{marginBottom:'1rem'}} 
            fullWidth 
            required
            id={`field-${value[0]}`} 
            name={Object.keys(defaultFormValues)[key]} 
            label={Object.keys(defaultFormValues)[key].toUpperCase()} 
            variant="outlined"
            onChange={handleChange}
        />
        }
    }
    
    
    
    )}
    <Button type="submit" variant="contained">Add Recipe</Button>
    </form>
  )
}

export default RecipeForm
