import Axios from 'axios'

const getTutorials = () => {
    return (
        Axios.get('https://juliusokeke-api.herokuapp.com/tutorial')
        .then((result)=>{
            return result
        })
        .catch((error)=>{
            console.log(error)
            return error
        })
    )
}

const getOneTutorial = (id) => {
    return (
        Axios.get(`https://juliusokeke-api.herokuapp.com/tutorial/select?id=${id}`)
        .then((result)=>{
            return result
        })
        .catch((error)=>{
            console.log(error)
        })
    )
}

const getCategory = (category) => {
    return (
        Axios.get(`https://juliusokeke-api.herokuapp.com/tutorial/group?category=${category}`)
        .then((result)=>{
            return result
        })
        .catch((error)=>{
            console.log(error)
        })
    )
}

const getCategories = () => {
    return (
        Axios.get(`https://juliusokeke-api.herokuapp.com/tutorial/categories`)
        .then((result)=>{
            return result
        })
        .catch((error)=>{
            console.log(error)
        })
    )
}

export {getTutorials, getOneTutorial, getCategory, getCategories};