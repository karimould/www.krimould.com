import React from 'react'

interface SeparatorProps {
  distance: small | medium | large
}

const Separator = ({ distance }: SeparatorProps): JSX.Element => {
  const getClassName = (distance): string => {
    if (distance === 'small') {
      return 'mt-5'
    }
    if (distance === 'medium') {
      return 'mt-32'
    }
    if (distance === 'large') {
      return 'mt-64'
    }
  }
  return <div className={getClassName(distance)}></div>
}

export default Separator
