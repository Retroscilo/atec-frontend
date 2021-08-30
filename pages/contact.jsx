import React from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import SmallCover from "../components/smallCover"

const Contact = ({ contact }) => {
  console.log(contact)
  return (
    <Layout>
      <Seo seo={contact.seo} />
      <SmallCover img={contact.header.image} title={contact.header.title} />
      <div
        className="uk-container uk-margin-bottom"
        style={{ minHeight: "51vh" }}
      >
        <h1>Agence A.T.E.C</h1>
        <span className="uk-flex uk-flex-wrap uk-flex-between">
          <span className="uk-flex uk-flex-column uk-margin-bottom">

            <h3>
              19 chemin de l'Avenir <br />
              97427 ETANG SALE
            </h3>
            <hr />
            <a className="text-primary" href="tel:0692868086p262"><span className="uk-margin-right uk-margin-top" uk-icon="icon: phone; ratio: 1.5" />(+262) 6.92.86.80.86</a>
            <a className="text-primary" href="mailto:marc@torresrun.fr"><span className="uk-margin-right uk-margin-top" uk-icon="icon: mail; ratio: 1.5" />marc@torresrun.fr</a>
          </span>
          <iframe
            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.427098710808!2d55.37256406252848!3d-21.255903704049295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182a26ebb563629%3A0xe0c47de6a599f917!2s22-19%20Lot.%20les%20Coteaux%20de%20l&#39;Avenir%2C%20Etang-Sal%C3%A9%20les%20Hauts%2C%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1630318411402!5m2!1sfr!2sfr"}
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </span>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [contact] = await Promise.all([fetchAPI("/contact")])

  return {
    props: { contact },
    revalidate: 1,
  }
}

export default Contact
