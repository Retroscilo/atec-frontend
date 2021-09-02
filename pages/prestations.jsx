import React from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import SmallCover from "../components/smallCover"
import marked from "marked"
import parse from "html-react-parser"
import NextImage from "../components/coverImage"

const DynamicComponent = ({
  i,
  titre,
  image,
  clipPath,
  paragraphs,
}) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  return (
    <div uk-parallax="y: -80" className={`uk-width-1-1 uk-position-relative ${(i%2 != 0) && 'uk-text-right'}`}>
      <div>
        <h2
          uk-parallax={`x: -80; y: -40;`}
          style={{
            position: "relative",
            top: "20px",
            left: "50px",
            width: "calc(100% - 50px)",
          }}
        >
          {titre}
        </h2>
        <div
          uk-parallax={`x: -50; y: -40;`}
          style={{
            position: "relative",
            top: "20px",
            left: "80px",
            width: "calc(100% - 80px)",
          }}
        >
          {paragraphs.map((p, i) => (
            <p
              key={p.id}
              uk-scrollspy={`cls: visible; hidden: false;`}
              className={`paragraph-${p.id} hidden`}
            >
              {p.paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        style={{ minHeight: '400px' }}
        uk-scrollspy={`cls: discover-${image.id}; offset-top: -100; hidden: false;`}
        className={`mask-${image.id} uk-position-top-left uk-overflow-hidden uk-width-1-1 uk-height-1-1`}
      >
        <NextImage style={{ minHeight: '400px' }} image={image} />
        <div
          style={{ position: "absolute", top: "20px" }}
          className=" uk-light uk-height-1-1"
        >
          <h2
            uk-parallax={`x: -80; y: -40;`}
            style={{
              width: "calc(100% - 50px)",
              position: "relative",
              left: "50px",
            }}
          >
            {titre}
          </h2>
          <div
            uk-parallax={`x: -50; y: -40;`}
            style={{
              width: "calc(100% - 80px)",
              position: "relative",
              left: "80px",
            }}
          >
            {paragraphs.map((p, i) => (
              <p
                key={p.id}
                uk-scrollspy={`cls: visible; hidden: false;`}
                className={`paragraph-${p.id} hidden`}
                uk-scrollspy={`cls: visible; hidden: false;`}
                className={`paragraph-${p.id} hidden`}
              >
                {p.paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .mask-${image.id} {
          transition: clip-path 1s cubic-bezier(.92,.1,.51,.99);
          clip-path: circle(0% at ${clipPath.slice(-7)});
        }

        .discover-${image.id} {
          clip-path: circle(${clipPath});
        }

        .hidden {
          transform: translateX(100px);
          opacity: 0;
        }
        
        .visible {
          transform: translateX(0);
          opacity: 1;
          transition: transform .4s ease, opacity .4s ease;
        }

      `}</style>
    </div>
  )
}

const Prestations = ({ prestations }) => {
  return (
    <Layout>
      <Seo seo={prestations.seo} />
      <SmallCover
        img={prestations.header.image}
        title={prestations.header.title}
      />
      <div
        style={{ minHeight: "101vh", padding: "0 30px" }}
        className="uk-container uk-margin-bottom uk-overflow-hidden"
      >
        {prestations.content.map((prestation, i) => (
          <div key={prestation.id} style={{ marginBottom: "150px" }}>
            <DynamicComponent
              i={i}
              titre={prestation.titre}
              description={prestation.descriptif}
              image={prestation.cover}
              clipPath={prestation.clipPath}
              paragraphs={prestation.paragraphs}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [prestations] = await Promise.all([fetchAPI("/prestations")])

  return {
    props: { prestations },
    revalidate: 1,
  }
}

export default Prestations
