import { useEffect, useRef, useState } from 'react'

/*
 * ToDo:
 * - retrun types
 * - Object is possibly 'undefined' line 17
 */

interface RefObject {
  readonly current: HTMLDivElement | undefined
}

export const useScrollDirection = (): string => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  const [scrollDirection, setScrollDirection] = useState('NONE')

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollDirection(lastScrollPosition > -bodyOffset.top ? 'UP' : 'DOWN')
    setLastScrollPosition(-bodyOffset.top)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', listener)
      return () => {
        window.removeEventListener('scroll', listener)
      }
    }
  })
  return scrollDirection
}

export const useOnClickOutside = (onClick: Function, disabled: boolean): RefObject => {
  const ref = useRef()
  const checkForClick = (e: Event): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClick()
    }
  }

  useEffect((): any => {
    if (typeof window !== 'undefined') {
      if (!disabled) {
        window.addEventListener('click', checkForClick)
        return (): void => {
          window.removeEventListener('click', checkForClick)
        }
      } else {
        window.removeEventListener('click', checkForClick)
      }
    }
  }, [disabled])
  return ref
}
