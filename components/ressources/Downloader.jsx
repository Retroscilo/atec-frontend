import React, { useState } from 'react'
import { download } from "../../lib/file"


const File = ({ file }) => {
  const [loading, setLoading] = useState(false)
  const downloadFile = async (file) => {
    setLoading(true)
    await download(file)
    setLoading(false)
  }

  return (
    <div className="uk-flex uk-flex-middle uk-width-medium uk-padding-small uk-file">
      <span
        className="uk-margin-right"
        uk-icon={`icon: ${
          file.fichier_a_partager.ext === ".pdf" ? "file-pdf" : "file"
        }`}
      />
      <a
        className="uk-link uk-link-black uk-link-reset uk-margin-right uk-width-expand"
        onClick={() => downloadFile(file)}
      >
        {file.nom_du_fichier}
      </a>
      {!loading && <div uk-icon="download"></div>}
      {loading && <div uk-spinner="ratio: 0.8"></div>}
    </div>
  )
}

const Downloader = ({ directory }) => {
  return (
    <>
      <span className="uk-flex uk-flex-align">Fichiers disponibles</span>
      <hr className="uk-margin-remove-bottom" />
      {directory.fichiers.map((file, i) => (
        <div key={file.id}>
          <File file={file} />
          <hr className="uk-margin-remove" />
        </div>
      ))}
    </>
  )
}

export default Downloader