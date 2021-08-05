import axios from 'axios'

const actionInstance = () => {
    return axios.create({
        baseURL : 'http://localhost:8080'
    })
}


export default actionInstance