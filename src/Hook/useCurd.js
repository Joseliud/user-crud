import axios from "axios"
import { useState } from "react"

const useCurd = (BASEURL) => {
  const [response, setresponse] = useState()

  const getApi = (path) => {
    const url = `${BASEURL}${path}`
    axios.get(url)
    .then(res => setresponse(res.data))
    .catch(err => console.log(err))
  }

  const postApi = (path, data) => {
    const url = `${BASEURL}${path}`
    axios.post(url, data)
    .then(res => {
        console.log(res.data)
        setresponse([...response, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteApi = (path, id) => {
    const url = `${BASEURL}${path}${id}/`
    axios.delete(url)
    .then(res => {  
        console.log(res.data)
        setresponse(response.filter(e => e.id !== id))
        })
    .catch(err => console.log(err))
  }

  const updateApi = (path, id, data) => {
    const url = `${BASEURL}${path}${id}/`
    axios.patch(url, data)
       .then(res =>{
        console.log(res.data)
        setresponse(response.map(e => e.id === id ? res.data : e))
       })
       .catch()
  }

  return [ response, getApi, postApi, deleteApi, updateApi ]
}

export default useCurd