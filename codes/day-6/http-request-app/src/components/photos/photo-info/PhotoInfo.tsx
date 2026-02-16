import { useState } from "react"
import type { Photo } from "../../../services/photo"
import { getPhotoById } from "../../../services/photo-service"

type PhotoInfoPropType = {
    photoId: number
}
const PhotoInfo = (props: Readonly<PhotoInfoPropType>) => {
    const { photoId } = props

    const [photo, setPhoto] = useState<Photo | undefined>(undefined)
    const [errorInfo, setErrorInfo] = useState('')
    const [requestOver, setRequestOver] = useState(false)

    //when to call this method???
    const fetchPhotoInfo = async () => {
        try {
            const data = await getPhotoById(photoId)
            setPhoto(data)
            setErrorInfo('')
            setRequestOver(true)
        } catch (error: any) {
            setErrorInfo(error?.message)
            setRequestOver(true)
            setPhoto(undefined)
        }
    }

    let design
    if (!requestOver)
        design = <span> Loading....</span>
    else if (errorInfo !== '')
        design = <span>{errorInfo}</span>
    else if (!photo)
        design = <span> no such record</span>
    else
        design = (
            <div>
                <span>Id:&nbsp;{photo.id}</span>
                <br />
                <span>Album Id:&nbsp;{photo.albumId}</span>
                <br />
                <span>Title:&nbsp;{photo.title}</span>
                <br />
                <span>Url:&nbsp;{photo.url}</span>
                <br />
                <span>Image:&nbsp;{photo.thumbnailUrl}</span>
            </div>
        )

    return design
}

export default PhotoInfo