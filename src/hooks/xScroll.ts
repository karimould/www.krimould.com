//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = function(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

const srollRight = (elem: HTMLElement, scrollPos: number, duration: number): void => {
  let start = elem.scrollLeft,
    currentTime = 0,
    increment = 20
  let animateScroll = (): void => {
    currentTime += increment
    let val = easeInOutQuad(currentTime, start, scrollPos, duration)
    elem.scrollLeft = val
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

const handleXScroll = (id: string): void => {
  var elem = document.getElementById(id)
  if (typeof elem !== 'undefined' && elem !== null) {
    srollRight(elem, 300, 500)
  }
}

export default handleXScroll
