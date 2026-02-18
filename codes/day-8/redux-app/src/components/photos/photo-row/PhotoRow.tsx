import type { Photo } from "../../../services/photo"

type PhotoRowPropType = {
    photo: Photo,
    handler: (value: number) => void
}
const PhotoRow = (props: Readonly<PhotoRowPropType>) => {
    const { photo, handler } = props
    return (
        <tr>
            <td>
                <img src={photo.thumbnailUrl} alt="NA" />
            </td>
            <td onClick={
                () => handler(photo.id)
            }>
                <u>{photo.title}</u>
            </td>
            <td>{photo.albumId}</td>
        </tr>
    )
}

export default PhotoRow