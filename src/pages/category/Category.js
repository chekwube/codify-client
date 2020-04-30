import React, {useState, useEffect} from 'react'
import * as moment from 'moment'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {getCategory, getCategories} from '../../utils/apis'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import './category.css'

const Category = ({match}) => {
    const [category, setCategory] = useState({})
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCategories = () => {
        getCategories()
        .then((result)=>{
            setCategories(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        const fetchCategory = ()=> {
            getCategory(match.params.category)
            .then((result)=>{
                setCategory(result.data)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        fetchCategories()
        fetchCategory()
    }, [match.params.category])

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
                            Object.values(category).map((data)=>{
                                return (
                                    <div className="row p-1" key={data}>
                                        <div className="col-9 col-md-9">
                                            <Link to={`/article/${data._id}`} className="text-light topic">{data.topic}</Link>
                                        </div>
                                        <div className="col-3 col-md-3">
                                            <div className="row">
                                                <p className="text-light">{moment(data.date).format('ll')}</p>
                                            </div>
                                            <div className="row">
                                                <Link to={`/category/${data.category}`} className="text-light">
                                                    <span className="btn btn-primary btn-sm font-weight-bold">
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

export default Category