import { useEffect, useState } from "react"
import { getPhotos } from "../../../services/photo-service"
import { type Photo } from "../../../models/photo"
import PhotoInfo from "../photo-info/PhotoInfo"
import PhotoRow from "../photo-row/PhotoRow"
import { useSelector, useDispatch } from "react-redux";
import type { AppStoreMapType } from "../../../redux/store"
import {
  photosFetchFailureActionCreator,
  photosFetchDefaultResetActionCreator,
  photosFetchSuccessActionCreator
} from "../../../redux/store";

const PhotoList = () => {
  //useSelector hook provides the reducer map from the redux store to the callback function passed to this hook as an argument
  const photosSliceState = useSelector((reducerMap: AppStoreMapType) => reducerMap.photosState)
  const { photos, requestOver, errorInfo } = photosSliceState
  const dispatch = useDispatch()
  // const [photos, setPhotos] = useState<Photo[]>([])
  // const [errorInfo, setErrorInfo] = useState('')
  // const [requestOver, setRequestOver] = useState(false)
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(0)

  const selectedPhotoIdHandler = (id: number) => {
    setSelectedPhotoId(id)
  }
  const fetchPhotos = async () => {
    //dispatch({type: 'photos_default_reset'})
    dispatch(photosFetchDefaultResetActionCreator())
    try {
      const data = await getPhotos()
      //batch update will take place here
      // setPhotos(data)
      // setErrorInfo('')
      // setRequestOver(true)
      // dispatch({type: 'photos/photos_fetch_success', payload: data })
      dispatch(photosFetchSuccessActionCreator(data))
    } catch (error: any) {
      //batch update will take place here
      // setRequestOver(true)
      // setPhotos([])
      // setErrorInfo(error.message)

      //dispatch({type: 'photos/photos_fetch_failure', payload: error.message })
      dispatch(photosFetchFailureActionCreator(error.message))
    }
  }

  useEffect(
    () => {
      fetchPhotos()
    },
    []
  )

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
                    <PhotoRow photo={photo} handler={selectedPhotoIdHandler} key={photo.id} />
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

  console.log('returning the PL VDOM');
  return photosDesign
  // return (
  //   <div>
  //     <button type="button" onClick={fetchPhotos}>Load Data</button>
  //     <br />
  //     {
  //       photosDesign
  //     }
  //   </div>
  // )
}

export default PhotoList