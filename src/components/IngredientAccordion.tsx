import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import IngredientTable from './IngredientTable';
import { ExpandMoreOutlined } from '@mui/icons-material'

interface IngredientAccordionProps {
    id: string;
    ingredients:string[];
}

const IngredientAccordion:React.FC<IngredientAccordionProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel:string) => (event: React.SyntheticEvent, isExpanded:boolean) => {
        setExpanded(isExpanded ? panel: false)
    }
  return (
    <Accordion expanded={expanded === `panel${props.id}`} onChange={handleChange(`panel${props.id}`)}>
        <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls={`panel${props.id}bh-content`}
            id={`panel${props.id}bh-header`}
        >
            <Typography>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <IngredientTable ingredients={props.ingredients}/>
        </AccordionDetails>
    </Accordion>
  )
}

export default IngredientAccordion

