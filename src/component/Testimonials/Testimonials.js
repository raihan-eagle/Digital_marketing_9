import React from 'react';
import './Testimonials.css'
const Testimonials = () => {
    return (
        <div className='container text-center'>
            <br />
            <br />
            <h1 className='fw-light'>Here is what our Happy Clients wanted to share!</h1>
            <br />
            <br />
            <div className='bg-danger p-1 d-flex m-3 rounded'>
                <div>
                    <img className='image-style m-3' src="https://i.ibb.co/pWffrmc/erika.jpg" alt="" />
                </div>
                <div className='text-tes'>
                    <p>" I worked with Etech-Solutions with my popular blog and impressed with the amazing tech skills this team possess. Also ran into a serious Wordpress issue solved by Etech-Solutions within hours. Great design skills quick response is what makes me happy to recommend them. " - <span className='title-here'>Patricia</span></p>
                </div>
            </div>
            <br />
            <br />
            <div className='d-flex justify-content-center align-items-around'>
                
                <img  src="https://i.ibb.co/fd5cBWw/services-payperclick-optimized.png" alt="" />
                <img  src="https://i.ibb.co/NKKmp93/services-socialmediamarketing-alt-colors-optimized.png" alt="" />
                <img  src="https://i.ibb.co/9bLmdfR/services-analytics-alt-colors-optimized.png" alt="" />
                
            </div>
            <br />
            <br />
            <div className='bg-danger p-1 d-flex m-3 rounded'>
                
                <div className='text-tes'>
                    <p>“ We have worked with Etech-Solution with 2 projects andextremely happy with the output. They are up to date with the current design trend and delivered us the final product in time. " - <span className='title-here'>M. Khaled</span></p>
                </div>
                <div>
                    <img className='image-style m-3' src="https://i.ibb.co/BKwYFzs/mj-rahman-e1450945002509.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;




