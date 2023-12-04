import axios from 'axios'

const api = axios.create({
    baseURL: 'https://diskopukm.palembang.go.id'
})

export default api