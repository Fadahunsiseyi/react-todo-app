import React from 'react'
import { useLocation,Link,Route,Routes } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => {
   const {pathname} = useLocation()
   console.log(pathname,'in the about session')
  return (
    <div className="about__content">
       <ul className="about__list">
      <li>
        <Link to={`${pathname}/about-app`}>About/App</Link>
      </li>
      <li>
        <Link to={`${pathname}/about-author`}>About/Author</Link>
      </li>
    </ul>
    <Routes>
    <Route path={`${pathname}/:slug`} element={<SinglePage />} />
    </Routes>
    </div>
  )
}

export default About
