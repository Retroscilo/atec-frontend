import React, { useState, useContext } from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Cover from '../components/Cover'
import NextImage from '../components/image'
import NextCover from '../components/coverImage'
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Slideshow from '../components/slideshow'
import marked from 'marked'
import parse from 'html-react-parser'
import Link from 'next/link'

const Home = ({ homepage }) => {
  return (
    <Layout hideNav>
      <Seo seo={homepage.seo} />
      <Cover Cover={homepage.Cover} />
      <div className="uk-section uk-background-muted">
        <div className="uk-container uk-container-large">
          <h3 className="uk-text-center">Pourquoi faire appel à nos services de maîtrise d’œuvre pour la réalisation de votre projet ?</h3>
          <hr />
        </div>
        <div className="uk-flex uk-flex-between uk-flex-wrap uk-padding-large uk-remove-padding-vertical">
        {homepage.prestations.map(card => (
          <div key={card.title} className="uk-card uk-card-default uk-width-1-4@m uk-margin-top uk-border-rounded">
            <div className="uk-card-body uk-text-center">
              <div className="uk-margin-auto uk-margin-bottom" style={{ height: '60px', width: '60px', overflow: 'hidden' }}>
                <NextImage image={card.illustration} />
              </div>
              <h2 className="uk-margin-remove-vertical">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
        </div>
        <div className="uk-flex uk-flex-center uk-margin-top">
          <div className="uk-button uk-button-default uk-button-primary uk-link-reset">
            <Link href="/prestations">
              Voir toutes nos prestations
            </Link>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2 className="uk-text-center">Nos dernières réalisations</h2>
          <hr />
        </div>
        <div className="uk-flex uk-flex-between uk-flex-wrap uk-padding-large uk-remove-padding-vertical">
          {homepage.realisations.map(card => (
            <Link key={card.id} as={`/realisations`} href="/[name]">
              <a className="uk-card uk-card-default uk-width-1-4@m uk-height-medium uk-border-rounded uk-transition-toggle uk-link-reset uk-font-large uk-margin-top" tabIndex="0">
                <NextCover image={card.cover} style="rounded" />
                <div className="uk-overlay-primary uk-position-cover uk-flex uk-flex-middle uk-padding  uk-transition-fade">{card.cover.caption}</div>
              </a>
            </Link>
          ))}
        </div>
        <div className="uk-flex uk-flex-center uk-margin-top">
          <div className="uk-button uk-button-default uk-button-primary uk-link-reset">
            <Link href="/realisations">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </div>
      <div className="uk-section uk-background-primary">
        <Link href="/contact">
          <div className="uk-flex uk-flex-between uk-flex-wrap uk-flex-wrap-middle uk-padding uk-padding-remove-vertical">
            <h2 className="uk-light uk-margin-remove-bottom uk-margin-top">Vous souhaitez réaliser un projet, un devis ?</h2>
            <div className="uk-button uk-border-rounded uk-background-default uk-flex-inline uk-flex-between uk-flex-middle  uk-margin-top"> <div className="uk-margin-right" uk-icon="mail" /> Contactez nous</div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([
    fetchAPI("/homepage"),
  ])

  return {
    props: { homepage },
    revalidate: 1,
  }
}

export default Home
