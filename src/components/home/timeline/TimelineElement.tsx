import React from 'react'
import './timeline.scss'

interface TimeLineElementProps {
  locale: string
}

const TimelineElement = ({ locale }: TimeLineElementProps): JSX.Element => {
  return (
    <div className="timeline-element border-r-2 border-black mt-5 mr-5">
      <div className="heading font-bold text-2xl text-center">
        <p>OCT / 17</p>
      </div>
      <div className="emoji text-center">
        <p>🎓</p>
      </div>
      <div>
        <p className="text-1xl text-center">
          BACHELOR
          <br />
          DEGRESS
          <br />
          COMPUTER
          <br />
          SIENCE
          <br />
          AND
          <br />
          ECONIMICS
          <br />
          UNIVERSITY
          <br />
          OF
          <br />
          HILDESHEIM
        </p>
      </div>
    </div>
  )
}

export default TimelineElement
