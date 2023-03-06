// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {eachList} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachList
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="sub-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon-style" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        className="nav-link"
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
