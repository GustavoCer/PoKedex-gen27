import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setinfoApi] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => setinfoApi(res.data))
        .catch(err =>console.log(err))
    }

    return [infoApi, getApi]
}   

export default useFetch     