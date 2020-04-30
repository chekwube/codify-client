import React from 'react'
import {Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './sidebar.css'

const Sidebar = (props) => {
    return(
        <div className="container-fluid position-sticky" id="sidebar">
            <div id='img-div'>
                <Link to={`/`}>
                    <img src={'https://thumbs.dreamstime.com/b/surreal-elephant-young-girl-who-friends-deep-dark-forest-woods-imagination-love-friendship-nature-peace-harmony-125298254.jpg'} className='rounded-circle img-thumbnail' alt="My Avatar"/>
                </Link>
            </div>
            <div id="about" className="text-light">I am Julius Chekwube Okeke, a Software Developer. I delight in finding ways to solve problems through technology</div>
            <div id="contact">
                <div className="row row-cols-3">
                    <div className="col-sm-4 link-tag">
                        <a href="https://www.linkedin.com/in/juliusokeke/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="col-sm-4 link-tag">
                        <a href="https://github.com/chekwube" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    <div className="col-sm-4 link-tag">
                        <a href="https://twitter.com/real_cheks" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row" id="categories">
                {
                    props.loading?
                    (
                        <div className="mx-auto d-flex align-items-center">
                            <Loader
                                type="Oval"
                                color="#ffffff"
                                height={30}
                                width={30}
                            />
                        </div>
                    ):(
                        props.categories.map((data, index)=>{
                            return (
                                <Link to={`/category/${data}`} className="col-6 text-warning mb-1" key={index}>
                                    <span className="btn btn-primary btn-sm font-weight-bold">
                                        {data}
                                    </span>
                                </Link>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar