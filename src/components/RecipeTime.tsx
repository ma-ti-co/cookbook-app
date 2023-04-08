import { Typography } from '@mui/material'
import React from 'react'

interface RecipeTimeProps{
    time:string
}

const RecipeTime:React.FC<RecipeTimeProps> = ({time}) => {
  return (
    <div>
      <Typography>⏳ {time} min.</Typography>
    </div>
  )
}

export default RecipeTime
