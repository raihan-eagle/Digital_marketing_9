import React, { useEffect, useState } from 'react';
import Servicescard from '../ServicesCard/Servicescard';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='container'>
            <div>
                    <h1 className='text-center m-3 p-3'>Full Service Digital Creative Agency
                    </h1>
                    <h2 className='text-center m-3 p-3 fw-light'>We pride ourselves on delivering compelling, digital marketing solutions. Our winning solutions and experiences help many of our clients interact and engage with their customers in the best possible way.
                    </h2>
                    <br />
                    <br />
                </div>
                <div className='row m-2'>
                    {services.map((service)=><Servicescard
                                                    service={service}
                                                    key={service.id}
                                                ></Servicescard>
                                                )
                                                                    
                    }
                    
                </div>
        </div>
    );
};

export default Services;