import Title from "./Title"
import CalculadoraPicture from '../assets/Calculadora_screenshoot.png'
import EspaiCarmePicture from '../assets/Espai_screenshoot.png'

function Portfolio() {
  return (
    <section className="flex items-center flex-col justify-center my-10">
      <div className='w-full md:w-8/12'>
        <Title>
          Portoflio  
        </Title>
        <div className="py-10 grid md:grid-cols-2 gap-3">
          <figure>
            <img 
            src={CalculadoraPicture} 
            alt="imatge Projecte Calculadora" 
            className="w-full h-60"
            />
            <figcaption 
            className="py-4 dark:text-indigo-300 text-indigo-800">
              Projecte Vanilla JavaScript, d'una calculadora de cotitzacions en el Règim d'artistes de la Seguretat Social. Penjada a la web de l'assessoria Monday.
              <a
              className="underline block font-bold" 
              href="https://calculadora.esmonday.com/" target="_blank" rel="noopener noreferrer">Click per veure el projecte Calculadora Artistes</a>
            </figcaption>
          </figure>
          <figure>
            <img 
            src={EspaiCarmePicture} 
            alt="imatge Projecte Espai Carme" 
            className="w-full h-60"
            />
            <figcaption 
            className="py-4 dark:text-indigo-300 text-indigo-800">
              Restaurant Espai de la Carme, projecte fet amb React i Tailwind CSS. Penjat a la web del restaurant. Desenvolupat amb Strapi ( Headless ) i desplegat amb Render.io.
              <a
              className="underline block font-bold" 
              href="http://espaidelacarme.com/" target="_blank" rel="noopener noreferrer">Click per veure el projecte Espai Carme</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Portfolio