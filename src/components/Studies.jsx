import Title from './Title'
import StudiesItem from './StudiesItem'
import { useTranslation } from "react-i18next"

function Studies() {

  const [t, i18n] = useTranslation("global")
  let studies = t('studies', { returnObjects: true })

  console.log(i18n.language)
  console.log(studies)

  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-8/12'>
        <Title>
          {t("headings.formation")}  
        </Title>

        <div className="py-10">
          { studies.map( (item) => (
            <StudiesItem 
              year={t(item.year)}
              title={t(item.title)}
              duration={t(item.duration)}
              company={t(item.company)}
              description={t(item.description)}
              key={item.id}
            />)
          )}
        </div>
     
      </div>
    </div>
  )
}

export default Studies