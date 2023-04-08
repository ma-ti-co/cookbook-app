import { Button, Modal, Box, Typography, Card} from '@mui/material'
import React from 'react'
import RecipeForm from './RecipeForm'


const cardStyle = {
    position:'absolute',
    top:'20%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    background:'white',
    padding:'3rem'
}

interface RecipeProps {
  id:number;
  title: string;
  description: string;
  image: string;
  difficulty:number;
  duration:number;
  ingredients:string[];
}


interface RecipeFormProps {
  recipes:string[];
  setRecipes: () => void
}

const RecipeModal:React.FC<RecipeFormProps> = ({recipes, setRecipes}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="outlined">Open modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box>
        {JSON.stringify(recipes)}
            <Card sx={cardStyle}>
            <Typography sx={{
              mb:3
            }} id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <RecipeForm recipes={recipes} setRecipes={setRecipes}/>
            </Card>
        </Box>
        </Modal>
    </>
  )
}

export default RecipeModal
