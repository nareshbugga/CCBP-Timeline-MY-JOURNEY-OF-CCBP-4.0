// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {eachList} = props
  const {courseTitle, description, duration, tagsList} = eachList
  return (
    <div>
      <div className="sub-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon-style" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tag-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="tag-items">
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
