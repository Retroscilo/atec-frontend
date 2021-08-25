import React, { useEffect, useState, useRef } from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { getStrapiMedia } from "../lib/media"
import NextImage from "../components/coverImage"
import SmallCover from "../components/smallCover"
import marked from "marked"
import parse from "html-react-parser"
import UIkit from 'uikit'

const download = (fichier_a_partager, name) => {
  if (!fichier_a_partager) {
    throw new Error("Resource URL not provided! You need to provide one");
  }
 fetch(getStrapiMedia(fichier_a_partager))
   .then(response => response.blob())
   .then(blob => {
     const blobURL = URL.createObjectURL(blob);
     const a = document.createElement("a");
     a.href = blobURL;
     a.style = "display: none";

     if (name && name.length) a.download = name;
     document.body.appendChild(a);
     a.click();
   })

};

const File = ({ file }) => {
  return (
  <div className="uk-flex uk-flex-middle uk-width-medium uk-padding-small uk-file">
    <span
      className="uk-margin-right"
      uk-icon={`icon: ${
        file.fichier_a_partager.ext === ".pdf" ? "file-pdf" : "file"
      }`}
    />
    <a
      className="uk-link uk-link-reset uk-margin-right uk-width-expand"
      /* href={file.fichier_a_partager.url} */
      onClick={() => download(file.fichier_a_partager, 'details')}
    >
      {file.nom_du_fichier}
    </a>
    <div uk-icon="download"></div>
  </div>
)}

/* further implement 
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
) */

const Directory = ({ directory }) => {
  console.log(directory)
  const [ selected, setSelected ] = useState(false)
  const button = useRef(null)
  const prompt = e => {
    e.stopPropagation()
    e.preventDefault()
    const input = window.prompt('Saisissez le mot de passe associé au projet :')
    if (input === (directory.mot_de_passe || "")) button.current.click()
  }
  useEffect(() => {
    UIkit.dropdown(`#dropdown-${directory.id}`, { pos: "right-center", mode: "click" })
    UIkit.util.on(`#dropdown-${directory.id}`, 'show', () => {
      setSelected(true)
    })
    UIkit.util.on(`#dropdown-${directory.id}`, 'hide', () => {
      setSelected(false)
    })
  }, [])
  return (
    <div onClick={prompt} className={`uk-card uk-card-default uk-border-rounded uk-width-medium`}>
      <button
        ref={button}
        type="button"
        style={{ pointerEvents: 'none' }}
        className={`${selected && 'uk-button-primary uk-light'} uk-button-reset uk-card-body uk-flex uk-flex-middle uk-width-1-1 uk-margin-remove`}
      >
        <span uk-icon="icon: folder; ratio: 2" className={`uk-margin-right ${selected && 'uk-light'}`} />
        <h2 className="uk-margin-remove">{directory.nom_du_dossier}</h2>
      </button>
      <div id={`dropdown-${directory.id}`}>
        <div className="uk-flex uk-flex-column">
          <span>Fichiers disponibles</span> 
          <hr className="uk-margin-remove-bottom" />
          {directory.fichiers.map((file, i) => (
            <div key={file.id}>
              <File file={file} />
              {directory.fichiers.length !== i + 1 && <hr className="uk-margin-remove" />}
            </div>
          ))}
        </div>
      </div>
    </div>
)}

const Ressources = ({ ressources }) => {
  const [ DOMReady, setDOMReady] = useState(false)
  useEffect(() => setDOMReady(true), [])
  return (
    <Layout>
      <Seo seo={ressources.seo} />
      <SmallCover
        img={ressources.header.image}
        title={ressources.header.title}
      />
      <div className="uk-container" style={{ height: '50vh' }}>
        <h3>
          Téléchargez les ressources mises à disposition pour votre projet et partagez-en.
        </h3>
        {DOMReady && <div className="uk-flex uk-flex-wrap uk-flex-column">
          {ressources.Dossiers.map((dossier) => (
            <Directory key={dossier.id} directory={dossier} />
          ))}
        </div>}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [ ressources ] = await Promise.all([fetchAPI("/ressources")])

  return {
    props: { ressources },
    revalidate: 1,
  }
}

export default Ressources
