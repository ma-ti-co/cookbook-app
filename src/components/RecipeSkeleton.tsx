import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia , Skeleton} from '@mui/material';



const RecipeSkeleton = () => {
  return (
    <Card sx={{
        mb:4
    }}>
        <CardContent>
        <Skeleton variant="rectangular" sx={{
            width:'100%',
            height:'600px'
        }}/>
        <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap:'20px' }}>
            <Skeleton variant="text" sx={{ height: '50px'}} />
            <Skeleton variant="text" sx={{ height: '50px' }} />
        </Box>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ height: '60px' }} />
        </CardContent>
    </Card>
  )
}

export default RecipeSkeleton