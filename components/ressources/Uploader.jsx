import React, { useState, useRef, forwardRef } from "react"
import { upload } from "../../lib/file"
import { removeObjectFromList } from "../../lib/mutations"

const File = ({ file, uploadedFiles, setUploadedFiles }) => {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseOut = () => {
    setHover(false)
  }

  const onClick = (e) => {
    e.stopPropagation()
    const newUploadedFileList = removeObjectFromList(uploadedFiles, file)
    setUploadedFiles(newUploadedFileList)
  }

  return (
    <div
    style={{ zIndex: 1000 }}
      className={`uk-text-small uk-position-relative uk-flex uk-flex-between uk-margin-left ${
        hover && "uk-text-danger"
      }`}
    >
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {file.name}
      </span>
      <span
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseOut}
        onClick={onClick}
        style={{
          position: "relative",
          bottom: 0,
          cursor: "pointer",
        }}
        uk-icon="icon: close; ratio: 0.8"
      />
    </div>
  )
}

const FileInput = forwardRef(({ onChange }, ref) => (
  <span className="uk-flex uk-flex-middle uk-hover">
    <p className="uk-margin-remove-bottom uk-margin-right">
      Ajouter un fichier
    </p>
    <input
      ref={ref}
      onChange={onChange}
      type="file"
      className="uk-margin-remove-bottom uk-margin-right uk-hidden"
      multiple
    />
    <span uk-icon="plus-circle" />
  </span>
))

const Uploader = ({ ressources, refresh, directoryId }) => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [ loading, setLoading ] = useState(false)
  const input = useRef(null)

  function openExplorer() {
    input.current.click()
  }

  const onChange = (e) => {
    if (uploadedFiles?.find((file) => e.target.file == file))
      return alert("Ce fichier est déjà sélectionné !")
    const newUploadedFiles = [ e.target.files[0], ...uploadedFiles ]
    setUploadedFiles(newUploadedFiles.filter(Boolean))
  }

  const onClick = async (e) => {
    e.stopPropagation()
    setLoading(true)
    await upload(ressources, uploadedFiles, directoryId)
    setUploadedFiles([])
    await refresh()
    setLoading(false)
  }

  return (
    <div className="uk-flex uk-flex-top uk-margin-top" onClick={openExplorer}>
      <FileInput ref={input} onChange={onChange} />
      <div className="uk-flex uk-flex-column uk-flex-bottom">
        {uploadedFiles.length > 0 && (
          <>
            <span style={{ maxHeight: '50px', overflowY: 'auto', overflowX: 'visible' }}>
            {uploadedFiles.map((file, i) => (
              <span key={i}>
                <File
                  file={file}
                  setUploadedFiles={setUploadedFiles}
                  uploadedFiles={uploadedFiles}
                />
              </span>
            ))}
            </span>
            <button
              onClick={onClick}
              className="uk-margin-small-top uk-button-primary uk-width-2-3"
            >
              {!loading ? 
                <span>envoyer</span> 
                : 
                <div className="uk-margin-auto" uk-spinner="ratio: 0.4"></div> }
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Uploader
