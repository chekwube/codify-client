import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import Skeleton from 'react-skeleton-loader';
import Loader from 'react-loader-spinner'
import * as moment from 'moment'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import { getTutorials, getCategories } from '../../utils/apis'
import './home.css'

const Home = () => {
    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTutorials = () => {
        getTutorials()
        .then((result)=>{
            setArticles({...result.data})
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const fetchCategories = ()=> {
        getCategories()
        .then((result)=>{
            setCategories(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchCategories()
        fetchTutorials()
    }, [])

    let props = {
        categories, loading
    }

    return(
        <div className="container-fluid">
            <Header/>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col-md-3 d-none d-md-block">
                    <Sidebar {...props}/>
                </div>
                {loading?
                    (
                        <div className="col-md-9 text-center d-flex align-items-center justify-content-center">
                            <Loader
                                type="Oval"
                                color="#ffffff"
                                height={70}
                                width={70}
                            />
                        </div>
                    ):(
                        <div className="col-md-9 text-left mt-5 content-margin">
                            {
                                Object.values(articles).map((data, index)=>{
                                    return (
                                        <div className="row p-1 mb-5" key={index}>
                                            <div className="col-9 col-md-9">
                                                <Link to={`/article/${data._id}`} className="text-light topic">{data.topic}</Link>
                                            </div>
                                            <div className="col-3 col-md-3">
                                                <div className="row">
                                                    <p className="text-secondary">{moment(data.date).format('ll')}</p>
                                                </div>
                                                <div className="row">
                                                    <Link to={`/category/${data.category}`} className="text-light">
                                                        <span className="btn btn-primary btn-sm font-weight-bold category">
                                                            {data.category}
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

                <div className="col-md-3 d-md-none">
                    <Sidebar {...props}/>
                </div>
            </div>
        </div>
    )
}

export default Home