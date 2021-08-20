import React from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import NextImage from "../components/coverImage"
import SmallCover from '../components/smallCover'

const Card = ({ text, url }) => (
  <div className="uk-card uk-margin-right uk-margin-left uk-card-default uk-margin-top uk-border-rounded uk-width-sm uk-flex uk-flex-column uk-flex-center">
    <img
      style={{ height: "120px", paddingBottom: 0 }}
      className="uk-padding"
      src={url}
      alt=""
    />
    <div
      style={{ height: "145px", paddingTop: 0, paddingBottom: "25px" }}
      className="uk-card-body uk-height-1-2 uk-flex uk-flex-middle"
    >
      {text}
    </div>
  </div>
)

const agence = ({ agence }) => {
  console.log(agence)
  return (
    <Layout footer>
      <Seo seo={agence.seo} />
      <SmallCover img={agence.header.image} title={agence.header.title} />
      <div>
        <div className="uk-container uk-text-center">
          <h2>
            Grace à une solide expérience de plus de{" "}
            <span className="text-primary">30 ans</span> dans la{" "}
            <span className="text-primary"> Maîtrise d’Œuvre</span>, nous
            réalisons et vous assistons dans tous vos{" "}
            <span className="text-primary">projets de construction</span>
          </h2>
          <h2>Notre savoir faire:</h2>
          <hr />
        </div>
        {agence.content.map((content) => {
          return (
            <div
              key={content.id}
              className="uk-position-relative uk-height-medium uk-width-1-1 uk-margin-top-large"
            >
              <div
                uk-scrollspy="cls: discover; offset-top: -300; hidden: false;"
                className={`uk-height-medium uk-width-1-1 hidden--${
                  content.left ? "left" : "right"
                } uk-background-cover uk-position-absolute`}
              >
                <NextImage image={content.cover} />
              </div>
              <h2
                style={{ width: "100%" }}
                className="uk-height-medium uk-padding uk-padding-remove-vertical uk-flex-inline uk-position-center uk-flex-middle uk-flex-center uk-text-center responsive-text-medium uk-margin-remove"
              >
                {content.text}
              </h2>
              <h2
                style={{ width: "100%", color: 'white' }}
                uk-scrollspy="cls: discover; offset-top: -300; hidden: false;"
                className={`uk-height-medium uk-padding responsive-text-medium uk-padding-remove-vertical uk-flex-inline uk-position-center uk-flex-middle uk-flex-center uk-text-center hidden--${
                  content.left ? "left" : "right"
                } hidden__text uk-margin-remove`}
              >
                {content.text}
              </h2>
            </div>
          )
        })}
        <div className="uk-container uk-text-center uk-background-muted">
          <h2 className="uk-margin-top-large">Notre activité concerne:</h2>
          <hr />
          <div className="uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-center uk-margin-bottom">
            <Card
              url="/house.svg"
              text="Les habitats individuels ou collectifs"
            />
            <Card url="/patrimonial.svg" text="Les biens patrimoniaux" />
            <Card
              url="/office.svg"
              text="La création de locaux professionnels ou de franchises"
            />
            <Card
              url="/store.svg"
              text="L’aménagement de commerces (prêt à porter, alimentation,
                pharmacie…)"
            />
          </div>
        </div>
        <div className="uk-container uk-text-center uk-margin-top-large uk-margin-bottom">
          <h2>Notre équipe</h2>
          <hr />
          <div>
            <h3>
              <span className="text-primary">Marc Torres</span>, concepteur et Economiste de la construction, vous
              accompagnera dans la concrétisation et la mise en oeuvre de vos
              projets.
            </h3>
            <img className="uk-height-medium" src="/marc.jpeg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [agence] = await Promise.all([fetchAPI("/agence")])

  return {
    props: { agence },
    revalidate: 1,
  }
}

export default agence
