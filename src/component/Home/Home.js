import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faPeopleCarry } from '@fortawesome/free-solid-svg-icons'
import Card from '../Card/Card';



const Home = () => {
    const element = <FontAwesomeIcon icon={faPeopleArrows} />
    const element2 = <FontAwesomeIcon icon={faPeopleCarry}/>

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const slicedServices = services.slice(0,4)
    return (
        <div className='container'>
            <div className='d-md-flex justify-content-md-center align-items-md-center holder-two p-2 m-2 shadow-sm'>
                <img src="https://images.assetsdelivery.com/compings_v2/iuriimotov/iuriimotov1901/iuriimotov190100072.jpg" alt="" />
                <div className='px-md-3 mx-md-3'>
                    <h1 className='pb-3 mb-3'> Guaranteed Increase of your Website sale!</h1>
                    <p className='w-75 fw-light'>E-Solution will help you increase conversion rate and grow your business faster. Our developers and engineers will test and; optimize regularly so that you can leave the tech out of your equation.</p>
                </div>
            </div>
            <div className='d-md-flex justify-content-md-center align-items-md-center p-1 m-1'>
                <div >
                    <img src="https://i.ibb.co/D4pthM4/seo-specialist-workplace-optimized.png" alt="" />
                </div>
                <div>
                    <h1 className='mb-3 pb-3'>
                        Appear On the Front Page of Google!
                    </h1>
                    <h4 className='pt-3 pb-3 fw-light'>
                        We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.
                    </h4>
                    <p className='pt-3 mt-3'>
                        {element2} Connect with pre-qualified customers
                        <br />
                        <br />
                        {element} Save time and money
                        <br />
                        <br />
                        {element2} Rely on an experienced and knowledgeable team
                    </p>
                </div>
            </div>
            <div>
                <hr />
                <div>
                    <h1 className='text-center m-3 p-3'>Full Service Digital Creative Agency
                    </h1>
                    <h2 className='text-center m-3 p-3 fw-light'>We pride ourselves on delivering compelling, digital marketing solutions. Our winning solutions and experiences help many of our clients interact and engage with their customers in the best possible way.
                    </h2>
                    <br />
                </div>
                <div className='row m-2'>
                    {

                        slicedServices.map((service)=><Card
                                                service={service}
                                                key={service.id}
                                                ></Card>)
                    }
                    
                </div>
            </div>
            <div>
                <div className='bg-danger p-1 d-flex m-3 rounded'>
                    <div>
                        <img className='image-style m-3' src="https://i.ibb.co/pWffrmc/erika.jpg" alt="" />
                    </div>
                    <div className='text-tes'>
                        <p>" I worked with Etech-Solutions with my popular blog and impressed with the amazing tech skills this team possess. Also ran into a serious Wordpress issue solved by Etech-Solutions within hours. Great design skills quick response is what makes me happy to recommend them. " - <span className='title-here'>Patricia</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;