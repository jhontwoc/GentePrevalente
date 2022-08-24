import axios from 'axios'

const AddCompanyApi = axios.create({
    baseURL: 'https://genteprevalente-default-rtdb.firebaseio.com'
})

export default AddCompanyApi