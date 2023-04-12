import { Card, Typography } from '@mui/material'
import React from 'react'

const RecipeNull = () => {
  return (
    <Card sx={{margin:4, padding:4}}>
      <Typography variant='h4'>No recipes available</Typography>
    </Card>
  )
}

export default RecipeNull
