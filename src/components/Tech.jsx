import {IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoGitBranchOutline, IoLogoSass} from 'react-icons/io5'
import { SiTailwindcss, SiStyledcomponents } from 'react-icons/si'
import Title from './Title'
import { useTranslation } from "react-i18next"

function Tech() {

  const [t, i18n] = useTranslation("global")

  return (
    <>
      <section className='flex items-center flex-col justify-center'>
        <div className='w-full md:w-8/12'>
        <Title>
        {t("headings.techno")}    
        </Title>
          <div className='flex flex-wrap justify-center text-indigo-800 dark:text-indigo-200 gap-10'>
              <IoLogoHtml5 size={50} />
              <IoLogoCss3 size={50} />
              <SiTailwindcss size={50} />
              <IoLogoSass size={50} />
              <IoLogoJavascript size={50} />
              <IoLogoReact size={50} />
              <SiStyledcomponents size={50} />
              <IoGitBranchOutline size={50} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tech