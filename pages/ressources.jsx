import React from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { getStrapiURL } from "../lib/api"
import NextImage from "../components/coverImage"
import SmallCover from "../components/smallCover"
import marked from "marked"
import parse from "html-react-parser"

const File = ({ file }) => (
  <div className="uk-flex uk-flex-middle uk-width-medium">
    <div
      className="uk-margin-right"
      uk-icon={`icon: ${
        file.fichier_a_partager.ext === ".pdf" ? "file-pdf" : "file"
      }`}
    />
    <a
      className="uk-link uk-link-reset uk-margin-right uk-width-expand"
      href={getStrapiURL(file.fichier_a_partager.url)}
      download
    >
      {file.nom_du_fichier}
    </a>
    <div uk-icon="download"></div>
  </div>
)

const EmbedDirectory = ({ directory }) => (
  <>
    <div className="uk-flex uk-flex-middle">
      <span className="uk-margin-right" uk-icon="icon: folder;" />
      <button style={{ border: 'none' }} className="uk-button uk-button-default uk-padding-remove uk-width-expand uk-text-left">{directory.nom_du_dossier}</button>
      <div uk-dropdown="pos: right-center; mode: click;">
      {directory.fichiers.map((file, i) => (
          <div key={file.id}>
            <File file={file} />
            {directory.fichiers.length !== i + 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
    <hr />
  </>
)

const Directory = ({ directory }) => (
  <div className="uk-card uk-card-default uk-border-rounded uk-width-medium uk-margin-top">
    <button
      type="button"
      className="uk-button-primary uk-card-body uk-flex uk-flex-middle uk-width-1-1 uk-margin-remove"
    >
      <span uk-icon="icon: folder; ratio: 2" className="uk-margin-right" />
      <h2 className="uk-margin-remove uk-light">{directory.nom_du_dossier}</h2>
    </button>
    <div uk-dropdown="pos: right-center; mode: click;">
      <div className="uk-flex uk-flex-column">
        {directory["dossier_"] &&
          directory["dossier_"].map((dossier) => (
            <EmbedDirectory key={dossier.id} directory={dossier} />
          ))}
        {directory.fichiers.map((file, i) => (
          <div key={file.id}>
            <File file={file} />
            {directory.fichiers.length !== i + 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Ressources = ({ ressources }) => {
  console.log(ressources)
  return (
    <Layout>
      <Seo seo={ressources.seo} />
      <SmallCover
        img={ressources.header.image}
        title={ressources.header.title}
      />
      <div className="uk-container uk-height-large">
        <h3>
          Téléchargez les ressources mises à disposition pour votre projet
        </h3>
        <div className="uk-flex uk-flex-wrap uk-flex-column">
          {ressources.Dossiers.map((dossier) => (
            <Directory key={dossier.id} directory={dossier} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [ressources] = await Promise.all([fetchAPI("/ressources")])

  return {
    props: { ressources },
    revalidate: 1,
  }
}

export default Ressources
