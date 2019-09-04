import React from 'react'
import './timeline.scss'
import TimelineElement from './TimelineElement'

interface TimeLineprops {
  locale: string
}

const Timeline = ({ locale }: TimeLineprops): JSX.Element => {
  const elems = []

  for (var i = 0; i < 6; i++) {
    elems.push(<TimelineElement locale={locale} />)
  }

  return (
    <div className="container-normal">
      <div className="timeline-container mt-64 border-t-2 border-black overflow-x-auto">
        <div className="flex">{elems}</div>
      </div>
      <div className="mt-10">
        <a>DOWNLOAD CV AS PDF</a>
      </div>
    </div>
  )
}

export default Timeline
