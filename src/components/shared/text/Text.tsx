import React, { ReactNode } from 'react'

interface TextProps {
  locale: string
  center?: boolean
  preLine?: boolean
  children?: ReactNode
}

const Text = ({ locale, children, center, preLine }: TextProps): JSX.Element => {
  const getClassNames = (center?: boolean, preLine?: boolean): string => {
    const classNames: string[] = []
    if (center) {
      classNames.push('text-center')
    }

    if (preLine) {
      classNames.push('whitespace-pre-line')
    }
    return classNames.join(' ')
  }

  return <p className={`${getClassNames(center, preLine)}`}>{children}</p>
}

export default Text
