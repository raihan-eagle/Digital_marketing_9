import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faDesktop, faDice, faMountain } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faBarcode} />
    const elementTwo = <FontAwesomeIcon icon={faDesktop} />
    const elementThree = <FontAwesomeIcon icon={faDice} />
    const elementFour = <FontAwesomeIcon icon={faMountain} />
    return (
        <div>
            <br />
            <br />
            <div className='bg-dark shadow-lg p-2' ></div>
            <div className='d-flex justify-content-around bg-info p-3 '>
                <div className='text-dark text-center'>
                    <h4 >Contact</h4>
                    <p className='text-light bg-secondary p-2 rounded-3 shadow'>Etech-Solution <br /> Tel: 281.572.0485 <br /> hello@etch-solution.com <br /> 801 Orchid Drive <br /> Naples, FL 34101</p>
                </div>
                
                <div className='text-dark text-center'>
                    <h4>Partners</h4>
                    <img src="https://i.ibb.co/jDbx3Sc/Hpay2.webp" alt="" />
                    <br />
                    <img src="https://i.ibb.co/v4fW8Cb/Norton-Gaming2.webp" alt="" />
                    <br />
                    <img src="https://i.ibb.co/PTcPVhS/Respawn2.webp" alt="" />
                </div>
                <div className='text-dark text-center'>
                    <h4 className='text-white'>Navigation</h4>
                    <h4>{element} {elementTwo}</h4>
                    <h3>{elementThree}</h3>
                    <h3>{elementFour}</h3>
                </div>
            </div>
            <h6 className='fw-light text-center bg-dark text-white m-0 pb-3'> © 2021 Etech-Solution </h6>
            
        </div>
    );
};

export default Footer;