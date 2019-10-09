import React from 'react'
import './timeline.scss'

interface TimelineElementProps {
  dateStart: string
  dateEnd: string
  emoji: string
  text: string
  index: number
}

const TimelineElement = ({ index, dateStart, dateEnd, emoji, text }: TimelineElementProps): JSX.Element => {
  return (
    <div id={'timeline-element-' + index} className="timeline-element border-r-2 border-black mt-5 mr-5">
      <div className="heading font-bold text-2xl text-center min-h-5">
        <p>{dateStart}</p>
        <p>{dateEnd}</p>
      </div>
      <div className="emoji text-center">
        <p>{emoji}</p>
      </div>
      <div>
        <p className="text-1xl text-center word-break">{text}</p>
      </div>
    </div>
  )
}

export default TimelineElement
