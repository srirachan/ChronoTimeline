// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {eachItem} = props
  console.log(eachItem)
  return (
    <div>
      <div className="heading-section">
        <h1>{eachItem.courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{eachItem.duration}</p>
        </div>
      </div>
      <p>{eachItem.description}</p>
      <ul type="none">
        {eachItem.tagsList.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
