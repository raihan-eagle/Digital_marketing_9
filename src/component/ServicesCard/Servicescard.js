import React from 'react';

const Servicescard = (props) => {
    const{id, name, Description, packages, Price, url} = props.service
    return (
        <div className='col-12 d-md-flex justify-content-center align-items-center'>
                <div className="card shadow-sm mb-3 " >
                    <div className="row g-0">
                        <div className="col-md-4 bg-light text-center">
                            <img src={url} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{id} . {name}</h5>
                                <p className="card-text p-2">{Description}</p>
                                <div className='d-md-flex justify-content-start align-items-center mb-2'>
                                    <a class="btn btn-warning" href="/services" role="button">Learn More</a>
                                </div>
                                <p className="card-text"><small className="text-muted">Package: {packages}</small></p>
                                <p className="card-text"><small className="text-muted">Price: {Price} BDT</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Servicescard;