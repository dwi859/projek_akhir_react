import axios from 'axios'

export const reigster = NewUser => {
    return axios
        .post('user/register', {
            first_name : NewUser.first_name,
            last_name : NewUser.last_name,
            email : NewUser.email,
            password : NewUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('user/login', {
           username : user.username,
           password : user.password 
        })
        .then(res => {
            localStorage.setitem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}