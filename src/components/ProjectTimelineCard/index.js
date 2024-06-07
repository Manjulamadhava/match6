import {AiFillCalendar} from 'react-icons/ai'

const ProjectTime = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} = {
    projectDetails,
  }
  return (
    <div>
      <img src={imageUrl} />
      <h1>{projectTitle}</h1>
      <AiFillCalendar color="#171f46" />
      <p>{duration}</p>
      <p>{description}</p>
      <p href={projectUrl}>Visit</p>
    </div>
  )
}

export default ProjectTime
