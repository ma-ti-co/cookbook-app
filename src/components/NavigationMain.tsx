import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

interface Recipe {
    title:string;
}
interface NavigationProps {
    recipes: Recipe[];
}
const style = {
    position:'sticky',
    top:'0px',
    background:'#fff'
}
const NavigationMain:React.FC <NavigationProps> = ({recipes}) => {
  return (
    <Box sx={style}>
       {recipes.map((node, index) => (
        <Typography key={index}>{node.title}</Typography>
       ))}
    </Box>
  )
}

export default NavigationMain
