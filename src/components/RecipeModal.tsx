import { Button, Modal, Box, Typography, Card} from '@mui/material'
import React, { useEffect, useState } from 'react'
import RecipeForm from './RecipeForm'
import { Recipe, RecipeFormProps } from '../../lib/schema';


interface ModalProps{
  recipes: any[],
  fetchRecipes: () => void,
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const cardStyle = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    background:'#121212',
    padding:'3rem',
    boxShadow:'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
}


const RecipeModal = ({setRecipes, recipes, fetchRecipes}:ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">Add Recipe</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box>
            <Card sx={cardStyle}>
            <Typography sx={{
              mb:3
            }} id="modal-modal-title" variant="h6" component="h2">
            Add a Recipe
            </Typography>
            <RecipeForm recipes={recipes} setRecipes={setRecipes} fetchRecipes={fetchRecipes} setOpen={setOpen}/>
            </Card>
        </Box>
        </Modal>
    </>
  )
}

export default RecipeModal
