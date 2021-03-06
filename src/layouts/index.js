import React from 'react'
import base from './base.css'
import Link, { withPrefix } from 'gatsby-link'

import '../layouts/base.css'

class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <div className="top-bar">
            <div className="top-bar__container">
              <div>
                <a href="https://www.instagram.com/forrest93/" className="m-r-12"><i className="fa fa-instagram fc--white f-14"></i></a>
                <a href="https://www.twitter.com/RyanPillsbury93/" className="m-r-12"><i className="fa fa-twitter fc--white f-14"></i></a>

              </div>
              <a className="t-sans fc--white f-14 td-none" href="http://eepurl.com/dE9dG5"><b>Subscribe</b></a>
            </div>
        </div>
        <div className="header__nav">
          <Link to="/">
            <img
              className="logo__icon"
              src={withPrefix('images/R.png')}
              alt="Logo"
            />
          </Link>
          <div >
            <Link to="/" className="header__nav--active m-r-12">
              Articles
            </Link>
            <Link to="/contribute" className="header__nav--active ">Contribute</Link>
          </div>
        </div>

        {children()}
        <div className="footer">
        <Link to="/">
            <img
              className="logo__icon"
              src={withPrefix('images/logoRP.png')}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Template
