import studies from '../data/studies'
import StudiesItem from './StudiesItem'
import Title from './Title'


function Studies() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-8/12'>
        <Title>
          Formació  
        </Title>
     
      { studies.map( item => (
        <StudiesItem 
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
  )
}

export default Studies