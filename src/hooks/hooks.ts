import { useEffect, useRef, useState } from 'react'

/*
 * ToDo:
 * - retrun types
 * - ref readPnly (l 42)
 */

interface RefObject {
  readonly current: HTMLDivElement | undefined
}

export const useScrollDirection = (): string => {
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
  const [bodyOffset, setBodyOffset] = useState<ClientRect | null>(
    typeof document !== 'undefined' ? document.body.getBoundingClientRect() : null,
  )
  const [scrollDirection, setScrollDirection] = useState<string>('NONE')

  const listener = (): void => {
    if (bodyOffset !== null) {
      setBodyOffset(document.body.getBoundingClientRect())
      setScrollDirection(lastScrollPosition > -bodyOffset.top || bodyOffset.top >= 0 ? 'UP' : 'DOWN')
      setLastScrollPosition(-bodyOffset.top)
    }
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

export const useOnClickOutside = (onClick: () => void, disabled: boolean): RefObject => {
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
