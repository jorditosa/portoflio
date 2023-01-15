function StudiesItem({year, title, duration, company, description, id}) {

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li 
        className="mb-10 ml-4"
        key={id}
        >
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
              <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white dark:text-orange-900 bg-orange-800 dark:bg-orange-300 rounded-md">
                  {year}
                </span>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-orange-100">
                  {title}
                </h3>
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                  {company}
                </h4>
              </div>
              <div className="my-3 text-sm font-normal leading-none text-stone-400 dark:text-stone-200">
                {duration}
              </div>
              <p className="my-2 text-base font-normal text-stone-900 dark:text-stone-200">
                {description}
              </p>
        </li>
    </ol>
  )
}

export default StudiesItem