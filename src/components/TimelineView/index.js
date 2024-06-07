import {Chrono} from 'react-chrono'
import ProjectTime from '../ProjectTimelineCard'
import CourseTime from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCard = each => {
    if (each.category === 'PROJECT') {
      return <ProjectTime key={each.id} ProjectDetails={each} />
    }
    return <CourseTime key={each.id} CourseDetails={each} />
  }
  return (
    <div>
      <h1>MY JOURNEY OF</h1>
      <h1>CCBP 4.0</h1>
      <Chrono
        mode="VERTICL_ALTERNTING"
        items={timelineItemsList}
        theme={{secondary: 'white'}}
      >{timelineItemsList.map(each => renderCard(each))}
       
      </Chrono>
       
    </div>
  )
}
export default TimelineView
