import React from 'react'
import './timeline.scss'
import TimelineElement from './TimelineElement'

interface TimeLineProps {
  locale: string
}

const Timeline = ({ locale }: TimeLineProps): JSX.Element => {
  const elems = []

  for (var i = 0; i < 6; i++) {
    elems.push(<TimelineElement index={i} locale={locale} />)
  }

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

  const handleScroll = (): void => {
    var elem = document.getElementById('timeline-scroll')
    if (typeof elem !== 'undefined' && elem !== null) {
      srollRight(elem, 300, 500)
    }
  }
  return (
    <div className="container-normal">
      <button onClick={(): void => handleScroll()} className="float-right">
        ->
      </button>
      <div id="timeline-scroll" className="timeline-container border-t-2 border-black overflow-x-auto">
        <div className="flex">{elems}</div>
      </div>
      <div className="mt-10">
        <a>DOWNLOAD CV AS PDF</a>
      </div>
    </div>
  )
}

export default Timeline
