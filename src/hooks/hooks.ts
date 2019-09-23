import { useEffect, useRef } from 'react'

/*
 * ToDo:
 * - retrun types
 * - Object is possibly 'undefined' line 17
 */

interface RefObject {
  readonly current: HTMLDivElement | undefined
}

export const useOnClickOutside = (onClick: Function, disabled: boolean): RefObject => {
  const ref = useRef()
  const checkForClick = (e: Event): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClick()
    }
  }

  useEffect((): any => {
    if (!disabled) {
      window.addEventListener('click', checkForClick)
      return (): void => {
        window.removeEventListener('click', checkForClick)
      }
    } else {
      window.removeEventListener('click', checkForClick)
    }
  }, [disabled])
  return ref
}
