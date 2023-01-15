import Title from "./Title"
import CalculadoraPicture from '../assets/Calculadora_screenshoot.png'

function Portfolio() {
  return (
    <section className="flex items-center flex-col justify-center my-10">
      <div className='w-full md:w-8/12'>
        <Title>
          Portoflio  
        </Title>
        <figure>
          <img 
          className="w-max md:w-6/12"
          src={CalculadoraPicture} 
          alt="imatge Projecte Calculadora" />
          <figcaption 
          className="py-4 dark:text-indigo-300 text-indigo-800">
            Projecte Vanilla JavaScript, d'una calculadora de cotitzacions en el Règim d'artistes de la Seguretat Social. Penjada a la web de l'assessoria Monday.
            <a
            className="underline block font-bold" 
            href="https://calculadora.esmonday.com/" target="_blank" rel="noopener noreferrer">Click per veure el projecte Calculadora Artistes</a>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Portfolio