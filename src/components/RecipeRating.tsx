import React from 'react'
import '../Rating.css'
import { Typography } from '@mui/material';

interface RatingProps{
    rating:number
}


const RecipeRating:React.FC<RatingProps> = (props) => {

    const maxVal:number = 5;
    const stars = new Array(maxVal).fill(null);
  return (
    <div>
        <Typography component="h6">Difficulty:</Typography>
        {stars.map((node, index) => (
            index < props.rating ? <span key={index} className='chef'>🧑‍🍳</span> : <span key={index} className='chef fadedOut'>🧑‍🍳</span>
        ))}
    </div>
  )
}

export default RecipeRating
