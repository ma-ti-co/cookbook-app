import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import IngredientTable from './IngredientTable';
import IngredientAccordion from './IngredientAccordion';
import RecipeRating from './RecipeRating';
import RecipeTime from './RecipeTime';

interface RecipeProps {
    id:number;
    title: string;
    description: string;
    image: string;
    difficulty:number;
    duration:number;
    ingredients:string[];
}


const RecipeItem: React.FC<RecipeProps> = (props) => {
    let idAsString = props.id.toString();
  return (
    <Card sx={{
        mb:4
    }}>
        <CardContent>
            <CardMedia 
                component="img"
                src={props.image}
                object-fit="cover"
                alt=""
            />
        <Typography sx={{
            my:3
        }} component="h2" variant="h4" color="text.secondary" gutterBottom>
            {props.title}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <RecipeRating rating={props.difficulty}/>
            <RecipeTime time={props.duration.toString()}/>
        </Box>
        <Typography sx={{
            my:3
        }} component="h3" variant="h6">{props.description}</Typography>
        <IngredientAccordion id={idAsString} ingredients={props.ingredients} />
        </CardContent>
    </Card>
  )
}

export default RecipeItem
