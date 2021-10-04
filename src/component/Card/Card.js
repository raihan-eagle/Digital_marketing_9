import React from 'react';
import './Card.css'

const Card = (props) => {
    const{id, name, Description, packages, Price, url} = props.service
    return (
        <div className='col-md-6 d-md-flex justify-content-center align-items-center'>
                <div className="holder card mb-3 shadow-sm " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={url} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body custom-card-body">
                                <h5 className="card-title">{id} . {name}</h5>
                                <p className="card-text">{Description.slice(0,330)}</p>
                                <div className='d-md-flex justify-content-end align-items-center'>
                                    <a class="btn btn-warning" href="https://www.google.com" role="button">Learn More</a>
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

export default Card;