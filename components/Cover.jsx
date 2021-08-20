import React, { useContext } from 'react'
import Image from 'next/image'
import cover from '../public/cover.jpg'
import Link from 'next/link'
import { GlobalContext } from '../pages/_app.js'
import marked from 'marked'
import parse from 'html-react-parser'

const Cover = ({ Cover }) => {
  const global = useContext(GlobalContext)
  const nav = global.Nav
  if(!nav) return (<div>Loading...</div>)
  return (
    <>
      <div className="uk-height-viewport uk-background-cover uk-light" uk-parallax="bgy: -500" uk-height-viewport="true" style={{ backgroundImage: `url(${cover.src})` }}>
        <div className="uk-position-center-left uk-padding uk-container uk-container-expand">
          <h1 className="uk-margin-remove-vertical uk-margin-left uk-heading-2xlarge" uk-parallax="opacity: 1,0; y: 0, -100; viewport: -0.5">{Cover.Legend}</h1>
          <h3 className="uk-margin-left uk-margin-remove-vertical">{parse(marked(Cover.Subtitle))}</h3>
          <div className="uk-flex uk-flex-center uk-margin-top uk-flex-wrap uk-flex-wrap-middle">
            {nav.pages.map((page) => (
              <Link key={page.id} as={`/${page.url}`} href="/[name]">
                <a className="uk-button uk-button-default uk-width-small uk-margin-right uk-margin-left uk-heading-small uk-link-reset uk-margin-top" >
                    {page.nom}
                  </a>
              </Link>
            ))}
          </div>
        </div>
          <a href="#belowCover" uk-scroll="true" className="uk-margin-auto uk-position-bottom uk-flex uk-flex-center uk-flex-middle" style={{ position: 'relative', border: '2px solid white', borderRadius: '100px', width: '50px', height: '50px', cursor: 'pointer', marginBottom: '10vh' }}>
            <div className="uk-animation-hop" uk-icon="icon: chevron-down; ratio: 2;" />
          </a>
      </div>
      <div id="belowCover" className="uk-background-muted" style={{ height: '80px' }}></div>
    </>
  )
}

export default Cover