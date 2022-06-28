// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderItem = eachItem => {
    switch (eachItem.categoryId) {
      case 'PROJECT':
        return <ProjectTimelineCard key={eachItem.id} eachItem={eachItem} />
      case 'COURSE':
        return <CourseTimelineCard key={eachItem.id} eachItem={eachItem} />
      default:
        return null
    }
  }

  return (
    <div className="main-container">
      <h2>MY JOURNEY OF CCBP 4.0 </h2>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderItem(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimelineView
