import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #94a4ba;
    text-align: center;
`

const SectionCellGroup = styled.div`
    max-width: 800px;
    margin: 0 auto 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding: 0 20px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);

    }
`

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
        <SectionCaption>12 sections, 6 hours</SectionCaption>
        <SectionCellGroup>
            {staticdata.cells.map(cell => (
                <Cell
                    title={cell.title}
                    image={cell.image} />
            ))}
        </SectionCellGroup>
    </div>
)

export default IndexPage
