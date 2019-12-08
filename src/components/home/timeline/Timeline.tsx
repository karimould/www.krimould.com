import React from 'react'
import './timeline.scss'
import TimelineElement from './TimelineElement'
import handleXScroll from '../../../hooks/xScroll'
import { i18n } from '../../../constants/i18n'

interface TimelineProps {
  locale: string
}

interface TimelineElement {
  dateStart: string
  dateEnd: string
  emoji: string
  text: string
}

const Timeline = ({ locale }: TimelineProps): JSX.Element => {
  return (
    <div className="container-normal">
      <button onClick={(): void => handleXScroll('timeline-scroll')} className="float-right text-3xl">
        →
      </button>
      <div id="timeline-scroll" className="timeline-container border-t-2 border-black overflow-x-auto">
        <div className="flex">
          {i18n[locale].timeline.map(
            (element: TimelineElement, i: number): JSX.Element => (
              <TimelineElement
                dateStart={element.dateStart}
                dateEnd={element.dateEnd}
                emoji={element.emoji}
                text={element.text}
                index={i}
              />
            ),
          )}
        </div>
      </div>
      {/* <div className="mt-10">
        <a>DOWNLOAD CV AS PDF</a>
      </div> */}
    </div>
  )
}

export default Timeline
