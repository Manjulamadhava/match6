import {AiFillClockCircle} from 'react-icons/ai'

const CourseTime = props => {
  const {CourseDetails} = props
  const {courseTitle, description, duration, tagsList} = CourseDetails
  return (
    <>
      <h1>{courseTitle}</h1>
      <AiFillClockCircle color="#171f46" />
      <p>{duration}</p>
      <p>{description}</p>
      {tagsList.map(each => (
        <p>{each.name}</p>
      ))}
    </>
  )
}

export default CourseTime
