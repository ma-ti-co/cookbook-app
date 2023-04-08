import { TableCell, TableRow } from '@mui/material'
import React from 'react'

interface IngredientItemProps {
    ingredient:string
}

const IngredientItem:React.FC<IngredientItemProps> = ({ingredient}) => {
  return (
    <TableRow>
        <TableCell>
            {ingredient}
        </TableCell>
    </TableRow>
  )
}

export default IngredientItem
