import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import IngredientItem from './IngredientItem'


interface IngredientProps {
    ingredients:string[]
}

const IngredientTable: React.FC<IngredientProps> = ({ingredients}) => {

    return (
            <TableContainer>
                <Table>
                    <TableBody>
                        {ingredients.map((node, index) => (
                            <IngredientItem key={index} ingredient={node} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default IngredientTable
