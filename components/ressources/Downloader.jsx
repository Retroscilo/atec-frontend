import React, { useState } from 'react'
import { download } from "../../lib/file"


const File = ({ file }) => {
  const [loading, setLoading] = useState(false)
  const downloadFile = async (file) => {
    setLoading(true)
    await download(file)
    setLoading(false)
  }
  console.log(file)

  return (
    <div className="uk-flex uk-flex-middle uk-width-medium uk-padding-small uk-file">
      <span
        className="uk-margin-right"
        uk-icon={`icon: ${
          file.fichier_a_partager.ext === ".pdf" ? "file-pdf" : "file"
        }`}
      />
      <a
        className="uk-link uk-link-black uk-link-reset uk-margin-right uk-width-expand uk-ellipsis"
        onClick={() => downloadFile(file)}
      >
        {file.nom_du_fichier}
      </a>
      <span style={{ position: 'relative', top: '18px', right: '15px' }} className="uk-text-xxsmall">
        {new Date(file.fichier_a_partager.created_at).toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: 'numeric' })}
      </span>
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