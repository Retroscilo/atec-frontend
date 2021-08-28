/* 
  (for): allow download to actually trigger and not open in new tab.
  (how): transform fetched ressource into blob to bypass CORS protection which are producing (for).
*/
import { getStrapiMedia } from './media'
import { getStrapiURL } from './api';
import { mapPropertyFromList, replaceItemFromList } from './mutations';

export async function download(file) {
  const { fichier_a_partager, nom_du_fichier } = file
  if (!fichier_a_partager) {
    throw new Error("Resource URL not provided! You need to provide one");
  }
  const res = await fetch(getStrapiMedia(fichier_a_partager))
  const blob = await res.blob() 
  const blobURL = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobURL;
  a.style = "display: none";
  if (nom_du_fichier && nom_du_fichier.length) a.download = nom_du_fichier;
  document.body.appendChild(a);
  a.click();
};

/* 
create new folders structure like:
[ 
  ...
  { // folder
    id, 
    __component, 
    [fichiers]
  },
  ...
]
*/
function createFolderStructure (ressources, newFile, folderId) {
  const folder = ressources.Dossiers.filter(file => file.id === folderId)[0]
  const foldersId = mapPropertyFromList(ressources.Dossiers, 'id')
  .map(id => ({ id, __component: "sections.directory" }))
  const filesId = mapPropertyFromList(folder.fichiers, 'id')
  const newFileList = [...filesId.map(id => ({ id })), { nom_du_fichier: newFile.name, fichier_a_partager: newFile }]
  const newFolder = {
    fichiers: newFileList,
    id: folderId,
    __component: "sections.directory"
  }

  const newFolders = replaceItemFromList(
    foldersId, newFolder, { id: newFolder.id, __component: "sections.directory" }
  )
  return newFolders
}

export async function upload(ressources, uploadedFiles, folderId) {
  async function uploadFile(file) {
    const formData = new FormData()
    formData.append("files", file)
  
    try {
      let res = await fetch(`${getStrapiURL()}/upload`, {
        method: 'POST',
        body: formData
      })
      const [newFile] = await res.json()
      const newFolders = createFolderStructure(ressources, newFile, folderId)
      const put = await fetch(`${getStrapiURL()}/ressources`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Dossiers: newFolders }),
      })
      await put.json()
      return put
    } catch (e) {
      console.log(e)
    }
  }
  await Promise.all(uploadedFiles.map(async (file) => await uploadFile(file)))
}

