import {IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoGitBranchOutline, IoLogoSass, IoLogoLaravel} from 'react-icons/io5'
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
          <div className='py-10 grid grid-cols-3 md:grid-cols-5 place-items-center text-indigo-800 dark:text-indigo-200 gap-10'>
              <IoLogoHtml5 size={75} />
              <IoLogoCss3 size={75} />
              <SiTailwindcss size={75} />
              <IoLogoSass size={75} />
              <IoLogoJavascript size={75} />
              <IoLogoReact size={75} />
              <SiStyledcomponents size={75} />
              <IoLogoLaravel size={75} />
              <IoGitBranchOutline size={75} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tech