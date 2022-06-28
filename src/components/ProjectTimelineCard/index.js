// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props

  return (
    <div>
      <img className="img-logo" src={eachItem.imageUrl} alt="project" />
      <div className="course-header">
        <h1>{eachItem.projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{eachItem.duration}</p>
        </div>
      </div>
      <div>
        <p>{eachItem.description}</p>
      </div>
      <a href={eachItem.projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
