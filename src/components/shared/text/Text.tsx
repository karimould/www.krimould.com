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

  return (
    <div className="container-normal">
      <p className={`${getClassNames(center, preLine)}`}>{children}</p>
    </div>
  )
}

export default Text
