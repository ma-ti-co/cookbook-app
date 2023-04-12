import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ButtonGroup, CardMedia, Divider, Fab } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import IngredientTable from './IngredientTable';
import IngredientAccordion from './IngredientAccordion';
import RecipeRating from './RecipeRating';
import RecipeTime from './RecipeTime';
import { Recipe } from '../../lib/schema';
import { supabase } from '../../lib/initSupabase';




const RecipeItem = (props:Recipe) => {

  return (
    <Card sx={{mb:4}}>
        <CardContent sx={{p:0}}>
            <Box sx={{px:2}}>
                <Typography sx={{my:3}} component="h2" variant="h5" color="text.secondary" gutterBottom>
                {props.item.title}
                </Typography>
            </Box>
            <CardMedia 
                component="img"
                src={props.item.image ? props.item.image : 'https://video-images.vice.com/articles/633762c7856cce009accf305/lede/1664574799135-dal-tadka-recipe1.jpeg?crop=1xw:0.84375xh;center,center&resize=1000:*'}
                object-fit="cover"
                alt=""
                height="400px"
                width="100%"
            />
        <Box sx={{p:3}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <RecipeRating rating={props.item.difficulty}/>
                <RecipeTime time={props.item.time.toString()}/>
            </Box>
            <Typography sx={{my:3}} component="h3" variant="subtitle1">
                {props.item.description}
            </Typography>
            <IngredientAccordion id={props.item.ingredients.toString()} ingredients={props.item.ingredients} />
            <Box mt={5}>
                <ButtonGroup size="small">
                <Button disabled variant="contained" aria-label="edit">
                    Edit <EditIcon />
                </Button>
                <Button variant="contained" onClick={() => props.deleteRecipe(props.item.id)}>
                    Delete <DeleteIcon/>
                </Button>
                </ButtonGroup>
            </Box>
        </Box>
        </CardContent>
    </Card>
    
  )
}

export default RecipeItem
