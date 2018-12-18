import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
    <div>
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Design School</h1>
                <p>Peruse syllabi from design courses <br />at colleges around the world.</p>
                <div className="Logos">
                    <img src={require('../images/logo-sketch.png')}
                    width="50" />
                    <img src={require('../images/logo-figma.png')}
                    width="50" />
                    <img src={require('../images/logo-studio.png')}
                    width="50" />
                    <img src={require('../images/logo-framer.png')}
                    width="50" />
                    <img src={require('../images/logo-react.png')}
                    width="50" />
                    <img src={require('../images/logo-swift.png')}
                    width="50" />
                </div>
                <Wave />
            </div>
        </div>
        <div className="Cards">
            <h2>1 PDF, more coming</h2>
            <div className="CardGroup">
                <Card
                    title="Tracy Ma"
                    text="12 sections"
                    image={require('../images/wallpaper.jpg')} />
                <Card
                    title="TBD"
                    text="12 sections"
                    image={require('../images/wallpaper2.jpg')} />
                <Card
                    title="TBD"
                    text="12 sections"
                    image={require('../images/wallpaper3.jpg')} />
            </div>
        </div>
        <Section
            image={require('../images/wallpaper2.jpg')}
            logo={require('../images/logo-react.png')}
            title="Class"
            text="Lorem ipsum"
        />
    </div>
)

export default IndexPage
