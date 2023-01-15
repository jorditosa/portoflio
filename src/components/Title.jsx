function Title({children, id}) {
  return (
    <h1
    id={id && id}
    className='text-center md:text-start text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-indigo-900 dark:text-indigo-300'
    >
        {children}
    </h1>
  )
}

export default Title