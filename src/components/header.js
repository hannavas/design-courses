import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// TODO: include image
const Header = ({ siteTitle }) => (
    <div className="Header">
        <div className="HeaderGroup">
            {/* <Link to="/"><img width="30" /></Link>*/}
            <Link to="/courses">Courses</Link>
            <Link to="/readings">Readings</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/about">About</Link>
            <Link to="/donate"><button>Donate</button></Link>
        </div>
    </div>
)

export default Header
