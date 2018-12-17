import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset
        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    {/* <Link to="/"><img width="30" /></Link>*/}
                    <Link to="/courses">Library</Link>
                    <Link to="/readings">Index</Link>
                    <Link to="/videos">Newsletter</Link>
                    <Link to="/about">About</Link>
                    <Link to="/donate"><button>Donate</button></Link>
                </div>
            </div>
        )
    }
}

export default Header
