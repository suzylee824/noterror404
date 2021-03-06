import axios from 'axios';

export default {
    signUp: (obj) => axios.post('/api/signup', obj),
    signIn: (obj) => axios.post('/api/signin', obj),
    setGoals: (arr) => axios.post('/api/goals', arr),
    getGoals: () => axios.get('/api/goals'),
    getFitmoodji: () => axios.get('/api/users'),
    getWod: () => axios.get('/api/workouts'),
    getGender: () => axios.get('/api/gender/:id'),   
    updateUser: (data, id) => axios.put(`/api/user/update/${id}`, data),
    getTip: () => axios.get('/api/tips'),
    getLog: (id) => axios.get(`/api/log/${id}`)
}


