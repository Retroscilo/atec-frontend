import React, { useContext } from "react"
import Link from "next/link"
import { GlobalContext } from '../pages/_app.js'

const Nav = ({ hidden }) => {
  const global = useContext(GlobalContext)
  const nav = global.Nav
  return (
    <div>
      <div className="uk-padding-large uk-padding-remove-vertical uk-sticky-fixed uk-width-1-1" uk-sticky={`animation: uk-animation-fade; sel-target: .uk-navbar-container; cls-active: uk-navbar-container; cls-inactive: ${hidden ? 'uk-invisible uk-height-null' : 'uk-background-transparent uk-light uk-position-relative'}; top: 100;`}>
        <nav className="uk-navbar" uk-navbar="true" >
          <div className="uk-navbar-left uk-link-reset">
            <Link href="/">
              <a className="uk-font-large"><h2 className="uk-margin-remove">{nav.title}</h2> </a>
            </Link>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@s">
              {nav.pages.map((page) => {
                return (
                  <li key={page.id}>
                    <Link as={`/${page.url}`} href="/[name]">
                      <a className="uk-link-reset uk-font-large">{page.nom}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="uk-inline uk-hidden@s">
              <span style={{ width: '30px', height: '30px' }} uk-icon="menu" />
              <div uk-dropdown="pos: bottom-left; mode: click;">
                <ul className="uk-nav uk-dropdown-nav">
                  {nav.pages.map((page) => {
                    return (
                      <div key={page.id}>
                        <li>
                          <Link as={`/${page.url}`} href="/[name]">
                            <a className="uk-link-reset uk-font-large font-head">{page.nom}</a>
                          </Link>
                        </li>
                        {(page.id !== nav.pages.length) && <hr style={{ borderTopColor: '#ededed' }} />}
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
