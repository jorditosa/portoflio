import Title from '../../components/Title'
import timeline from '../../data/timeline'
import TimelineItem from './TimelineItem'


function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-8/12'>
        <Title>
          Experiència  
        </Title>

        <div className="py-10">
        { timeline.map( item => (
          <TimelineItem 
            year={item.year}
            title={item.title}
            duration={item.duration}
            company={item.company}
            description={item.description}
            key={item.id}
          />)
        )}
        </div>
     
      </div>
    </div>
  )
}

export default Timeline