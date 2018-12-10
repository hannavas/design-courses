import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Design School</h1>
                <p>Peruse resources from design courses at colleges around the world.</p>
                <Link to="/video">Watch the video</Link>
            </div>
        </div>
    </div>
)

export default IndexPage
