import React, { useContext } from "react"
import { GlobalContext } from "../pages/_app.js"
import Link from 'next/link'

const Footer = () => {
  const global = useContext(GlobalContext)
  const nav = global.Nav
  if(!nav) return (<div>Loading...</div>)
  return (
    <div className="uk-container uk-width-1-1 uk-height-small uk-background-secondary uk-light uk-flex footer-clip">
      <p className="uk-container uk-flex uk-flex-middle uk-flex-center uk-height-1-1 uk-text-center uk-margin-remove uk-width-1-2 font-title text-small">
        ATEC 2021 ©
      </p>
      <div className="uk-container uk-flex uk-flex-wrap uk-width-1-2 uk-margin-remove uk-padding">
        {nav.pages.map((page) => (
          <Link key={page.id} as={`/${page.url}`} href="/[name]">
            <a style={{ cursor: 'pointer' }} className="uk-width-small uk-margin-right uk-margin-left uk-link-reset uk-flex uk-flex-middle uk-text-normal">
              {page.nom}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
