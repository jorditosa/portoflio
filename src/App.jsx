import { useState, useEffect } from 'react'
import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import Intro from './components/Intro'
import Tech from './components/Tech'
import Timeline from './components/Timeline'
import Studies from './components/Studies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fetch from './components/Fetch'
import Portfolio from './components/Portfolio'

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (
    <>
      <button
      type='button'
      onClick={handleThemeSwitch}
      className="fixed p-2 z-10 right-4 top-4 bg-indigo-100 text-lg rounded-md"
      >
        {theme === 'dark' ? (<BsSun size={24}/>) : (<BsMoon size={24}/>) }
      </button>
      <div className='bg-white 
      dark:bg-stone-900 text-stone-900 dark:text-stone-200 min-h-screen font-inter'>
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
          <Tech />
          <Portfolio />
          <Timeline />
          <Studies />
          <Fetch />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
