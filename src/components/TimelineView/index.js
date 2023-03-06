/* eslint-disable prefer-const */
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="main-container">
        <h1 className="main-heading">MY JOURNEY OF</h1>
        <p className="CCBP">CCBP 4.0</p>

        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          disableNavOnKey
          theme={{
            secondary: 'white',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachList => {
            if (eachList.categoryId === 'COURSE') {
              return (
                <div>
                  <CourseTimeLineCard eachList={eachList} key={eachList.id} />
                </div>
              )
            }
            return (
              <div>
                <ProjectTimeLineCard eachList={eachList} key={eachList.id} />
              </div>
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
