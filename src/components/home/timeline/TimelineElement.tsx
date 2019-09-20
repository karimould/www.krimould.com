import React from 'react'
import './timeline.scss'

interface TimeLineElementProps {
  locale: string
  index: number
}

const TimelineElement = ({ locale, index }: TimeLineElementProps): JSX.Element => {
  return (
    <div id={'timeline-element-' + index} className="timeline-element border-r-2 border-black mt-5 mr-5">
      <div className="heading font-bold text-2xl text-center">
        <p>OCT / 17</p>
      </div>
      <div className="emoji text-center">
        <p>🎓</p>
      </div>
      <div>
        <p className="text-1xl text-center word-break">
          BACHELOR DEGRESS COMPUTER SIENCE AND ECONIMICS UNIVERSITY OF HILDESHEIM
        </p>
      </div>
    </div>
  )
}

export default TimelineElement
