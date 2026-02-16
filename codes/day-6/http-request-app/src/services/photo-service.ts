import type { Photo } from "./photo"
import Axios, { type AxiosResponse } from "axios";

export async function getPhotos(): Promise<Photo[]> {
    //sending request via GET method of HTTP protocol
    //Response => type which represents the whole Http Response (inlcuding the Response headers and the body)

    const promise: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/photos')
    const response: Response = await promise
    if (response.ok) {
        const data = await response.json()
        const photos = data as Photo[]
        return photos.slice(0, 10)
    }
    else
        throw new Error(response.statusText)
}

export async function getPhotoById(id: number) {
    /*
    const promise: Promise<AxiosResponse> = Axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const resp: AxiosResponse = await promise
    return resp.data as Photo
    */
    const response: AxiosResponse<Photo> = await Axios.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)
    if (response.status === 200)
        return response.data
    else
        throw new Error(response.statusText)
}

export async function addPhoto(photo: Photo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        body: JSON.stringify(photo),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 201) {
        const data = await response.json()
        return data as Photo
    }
    else
        throw new Error(response.statusText)
}

export async function updatePhoto(id: number, photo: Photo) {
    const response = await Axios.put<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`, photo)

    if (response.status === 200)
        return response.data
    else
        throw new Error(response.statusText)
}

export async function deletePhoto(id: number) {
    const response = await Axios.delete<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)

    if (response.status === 200)
        return response.data
    else
        throw new Error(response.statusText)
}