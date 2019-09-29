import React from 'react'
import './timeline.scss'
import TimelineElement from './TimelineElement'
import handleXScroll from '../../../hooks/xScroll'

interface TimeLineProps {
  locale: string
}

const Timeline = ({ locale }: TimeLineProps): JSX.Element => {
  const elems = []

  for (var i = 0; i < 6; i++) {
    elems.push(<TimelineElement index={i} locale={locale} />)
  }

  return (
    <div className="container-normal">
      <button onClick={(): void => handleXScroll('timeline-scroll')} className="float-right text-3xl">
        →
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
