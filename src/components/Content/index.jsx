import React, { useState } from 'react'
import { Container } from './styles'

import Checkbox from '@material-ui/core/Checkbox';

export default function Content({ task, order }) {
  const [completed, isCompleted] = useState('none')
  const [completedColor, isCompletedColor] = useState('var(--text-color)')

  function handleCompleted(event) {
    if (event.target.checked) {
      isCompletedColor('var(--completed-color)')
      return isCompleted('line-through')
    }
    isCompletedColor('var(--text-color)')
    isCompleted('none')
  }

  return (
    <Container order={ order }>
      <Checkbox onChange={ handleCompleted } />
      <p 
        style={{ 
          textDecoration: `${ completed }`, 
          color: `${ completedColor }` 
          }}>{ task }</p>
    </Container>
  )
}