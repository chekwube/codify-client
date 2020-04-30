import React, {useState, useEffect} from 'react'
import * as moment from 'moment'
import Loader from 'react-loader-spinner'
import { getOneTutorial, getCategories } from '../../utils/apis'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import './article.css'

const Article = ({match}) => {
    const [article, setArticle] = useState({})
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

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
        const fetchOneArticle = ()=> {
            getOneTutorial(match.params.id)
            .then((result)=>{
                setArticle(result.data)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        fetchCategories()
        fetchOneArticle()
    }, [match.params.id])

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
                        <div className="col-md-9 text-center text-md-left mt-5 content-margin">
                            <div className="row">
                                <div className="col-md-12 text-light">
                                    <p className="topic">{article.topic}</p>
                                    <p className="text-secondary">Published on {moment(article.date).format('ll')}</p>
                                    <p className="text-left mr-3">{article.content}</p>
                                </div>
                            </div>
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

export default Article