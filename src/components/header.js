import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

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

    handlePurchase = (token) => {
        const amount = 5000
        const description = "This awesome site"

        const bodyObject = {
            tokenId: token.id,
            email: token.email,
            name: token.name,
            description,
            amount
        }

        fetch('http://localhost:9000/stripe-charge', {
            method: 'POST',
            body: JSON.stringify(bodyObject)
        })
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
                    <StripeCheckout
                        amount={5000}
                        image="https://pa1.narvii.com/6675/45a8a550808fd5a14fde90a6eda7fae8f606199c_128.gif"
                        token={this.handlePurchase}
                        stripeKey={'pk_test_LjLb11ySQ6nhPfe5sqaNYR85'}
                        >
                        <button>Donate</button>
                    </StripeCheckout>
                </div>
            </div>
        )
    }
}

export default Header
