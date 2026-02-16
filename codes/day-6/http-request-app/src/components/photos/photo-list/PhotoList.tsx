import { useState } from "react"
import { getPhotos } from "../../../services/photo-service"
import { type Photo } from "../../../services/photo"
import PhotoInfo from "../photo-info/PhotoInfo"

const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [errorInfo, setErrorInfo] = useState('')
  const [requestOver, setRequestOver] = useState(false)

  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(0)

  const fetchPhotos = async () => {
    try {
      const data = await getPhotos()
      setPhotos(data)
      setErrorInfo('')
      setRequestOver(true)
    } catch (error: any) {
      setRequestOver(true)
      setPhotos([])
      setErrorInfo(error.message)
    }
  }

  let photosDesign

  if (!requestOver)
    photosDesign = <span>Loading..please wait</span>
  else if (errorInfo !== '')
    photosDesign = <span>{errorInfo}</span>
  else if (photos.length === 0)
    photosDesign = <span>No records</span>
  else
    photosDesign = (
      <div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Album ID</th>
            </tr>
          </thead>
          <tbody>
            {
              photos.map(
                (photo) => {
                  return (
                    <tr key={photo.id}>
                      <td>
                        <img src={photo.thumbnailUrl} alt="NA" />
                      </td>
                      <td onClick={
                        () => setSelectedPhotoId(photo.id)
                      }>
                        <u>{photo.title}</u>
                      </td>
                      <td>{photo.albumId}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
        <br />
        <br />
        {
          /*selectedPhotoId > 0 && <PhotoInfo />*/
          selectedPhotoId > 0 ? <PhotoInfo photoId={selectedPhotoId} /> : <span>Select a photo to view the details</span>
        }
      </div>
    )

  return (
    <div>
      <button type="button" onClick={fetchPhotos}>Load Data</button>
      <br />
      {
        photosDesign
      }
    </div>
  )
}

export default PhotoList