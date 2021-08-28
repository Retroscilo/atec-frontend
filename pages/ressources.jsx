import React, { useEffect, useState, useRef } from "react"
import { fetchAPI } from "../lib/api"
import Seo from "../components/seo"
import Layout from "../components/layout"
import SmallCover from "../components/smallCover"
import UIkit from "uikit"
import { Uploader, Downloader } from '../components/ressources'

const Directory = ({ directory, ressources, refresh }) => {
  const [selected, setSelected] = useState(false)
  const button = useRef(null)

  const prompt = (e) => {
    if (selected) return
    if (!directory.mot_de_passe) {
      button.current.click()
      return
    }
    e.stopPropagation()
    const input = window.prompt("Saisissez le mot de passe associé au projet :")
    if (input === directory.mot_de_passe) button.current.click()
  }

  useEffect(() => {
    UIkit.dropdown(`#dropdown-${directory.id}`, {
      pos: "right-center",
      mode: "click",
    })

    UIkit.util.on(`#dropdown-${directory.id}`, "show", () => {
      setSelected(true)
    })
    UIkit.util.on(`#dropdown-${directory.id}`, "hide", () => {
      setSelected(false)
    })
  }, [])

  return (
    <div style={{ order: directory.id }} className="uk-width-medium uk-position-relative uk-margin-bottom">
      <div className={`uk-card uk-card-default uk-border-rounded `}>
        <button
          ref={button}
          type="button"
          className={`${
            selected && "uk-button-primary uk-light"
          } uk-button-reset uk-card-body uk-flex uk-flex-middle uk-width-1-1 uk-margin-remove`}
        >
          <span
            style={{ minWidth: '40px' }}
            uk-icon="icon: folder; ratio: 2"
            className={`uk-margin-right ${selected && "uk-light"}`}
          />
          <h3 className="uk-margin-remove">{directory.nom_du_dossier}</h3>
        </button>
        <div id={`dropdown-${directory.id}`}>
          <div className="uk-flex uk-flex-column">
            <Downloader directory={directory} />
            <Uploader ressources={ressources} refresh={refresh} directoryId={directory.id} />
          </div>
        </div>
      </div>
      <span
        style={{ top: 0 }}
        className="uk-width-1-1 uk-height-1-1 uk-position-absolute"
        onClickCapture={prompt}
      />
    </div>
  )
}

const Ressources = ({ staticRessources }) => {
  const [ ressources, setRessources ] = useState(staticRessources)

  const updateRessources = () => {
    (async () => {
      const ressources = await fetchAPI('/ressources')
      setRessources(ressources)
    })()
  }

  const [DOMReady, setDOMReady] = useState(false)
  useEffect(() => setDOMReady(true), [])

  return (
    <Layout>
      <Seo seo={ressources.seo} />
      <SmallCover
        img={ressources.header.image}
        title={ressources.header.title}
      />
      <div
        className="uk-container uk-margin-bottom"
        style={{ minHeight: "50vh" }}
      >
        <h3>
          Téléchargez les ressources mises à disposition pour votre projet et
          partagez-en.
        </h3>
        {DOMReady && (
          <div className="uk-flex uk-flex-wrap uk-flex-column">
            {ressources.Dossiers.map((dossier) => (
              <Directory key={dossier.id} directory={dossier} ressources={ressources} refresh={updateRessources} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [ressources] = await Promise.all([fetchAPI("/ressources")])

  return {
    props: { staticRessources: ressources },
    revalidate: 1,
  }
}

export default Ressources
