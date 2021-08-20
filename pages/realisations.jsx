import React from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import NextImage from "../components/coverImage"
import SmallCover from "../components/smallCover"
import marked from "marked"
import parse from "html-react-parser"

const Realisations = ({ realisations }) => {
  return (
    <Layout>
      <Seo seo={realisations.seo} />
      <SmallCover
        img={realisations.header.image}
        title={realisations.header.title}
      />
      <div className="">
        {realisations.content.map((content) => {
          const side = content.left ? "left" : "right"
          const padding = content.left
            ? "0 5% 0 40% !important"
            : "0 40% 0 5% !important"
          function getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min)) + min
          }
          const textParallax = getRandomInt(-150, -220)
          return (
            <div
              key={content.id}
              className="uk-position-relative uk-height-medium uk-width-1-1 uk-margin-top-large"
            >
              <div
                uk-scrollspy={`cls: discover__crop--${side}; offset-top: -100; hidden: false;`}
                uk-parallax={`y: ${getRandomInt(-250, -320)}`}
                className={`uk-height-medium uk-width-1-1 hidden--${side} uk-background-cover uk-position-absolute crop--${side}`}
              >
                <div
                  uk-slideshow={`autoplay: true; autoplay-interval: ${getRandomInt(
                    3500,
                    6000
                  )};pause-on-hover: true; animation: fade; min-height: 300; max-height: 300;`}
                  className=""
                >
                  <div
                    className="uk-position-relative uk-visible-toggle uk-light"
                    tabIndex="-1"
                  >
                    <ul
                      className="uk-slideshow-items"
                      style={{ height: "300px !important" }}
                    >
                      {content.covers.map((image) => {
                        return (
                          <li key={image.id}>
                            <NextImage style="" image={image} />
                          </li>
                        )
                      })}
                    </ul>
                    <a
                      className="uk-position-center-left uk-position-small"
                      href="#"
                      uk-slidenav-previous="true"
                      uk-slideshow-item="previous"
                    ></a>
                    <a
                      className="uk-position-center-right uk-position-small"
                      href="#"
                      uk-slidenav-next="true"
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
              </div>
              <h3
                uk-parallax={`y: ${textParallax}`}
                style={{ width: "100%", padding, pointerEvents: "none" }}
                className={`uk-height-medium uk-padding uk-padding-remove-vertical uk-flex-inline  uk-flex-middle uk-flex-center uk-text-left responsive-text-medium uk-margin-remove responsive-text-medium`}
              >
                {parse(marked(content.description))}
              </h3>
              <h3
                uk-parallax={`y: ${textParallax}`}
                style={{
                  width: "100%",
                  padding,
                  position: "absolute",
                  left: 0,
                  pointerEvents: "none",
                  color: "white",
                }}
                uk-scrollspy={`cls: discover__crop--${side}; offset-top: -100; hidden: false;`}
                className={`responsive-text-medium uk-height-medium uk-padding responsive-text-medium uk-padding-remove-vertical uk-flex-inline uk-flex-middle uk-flex-center uk-text-left hidden--${side} hidden__text uk-margin-remove`}
              >
                {parse(marked(content.description))}
              </h3>
            </div>
          )
        })}
      </div>
      <div uk-parallax="y: -220px" className="uk-container">
        <div
          style={{ right: "50px", top: 50, zIndex: '-1' }}
          className="uk-position-absolute"
        >
          <img className="uk-width-large uk-visible@s" src="/construction.svg" alt="" />
        </div>
        <h3>Exemple de carnets de détails</h3>
        <DetailsLink url="/musee.pdf" text="Musée de musique de l'océan Indien" />
        <DetailsLink url="/aeroclub.pdf" text="Aéroclub" />
        <DetailsLink url="/arbradelice.pdf" text="Restaurant l'arbradélice" />
        <DetailsLink url="/cloture.pdf" text="Clôtures de l'arbradélice" />
      </div>
    </Layout>
  )
}

const DetailsLink = ({ text, url }) => (
  <a
    className="uk-width-medium uk-margin-top uk-button uk-button-primary uk-box-shadow-small uk-border-rounded uk-flex uk-flex-between uk-flex-middle uk-padding-right"
    href={url}
    target="_blank"
  >
    <p className="uk-margin-remove uk-margin-right uk-flex uk-flex-middle uk-text-left">
      {text}
    </p>
    <span uk-icon="icon: link; ratio: 1.5"></span>
  </a>
)

export async function getStaticProps() {
  // Run API calls in parallel
  const [realisations] = await Promise.all([fetchAPI("/realisations")])

  return {
    props: { realisations },
    revalidate: 1,
  }
}

export default Realisations
