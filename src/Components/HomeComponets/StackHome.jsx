import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'

const StackHome = () => {
    const image = "https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg"
    const heading = "Join The League of Achievers!"
    const description = `LNCT Group of College is one of the Top engineering
              college in Bhopal, MP and Central India.
              LNCT Synonymous with excellence in
              higher education with 32+  Years
              of Academic Excellence and Discipline.`

  return (
    <>
    <Home1 image={image} description={description} heading={heading} />
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
    </>
  )
}

export default StackHome