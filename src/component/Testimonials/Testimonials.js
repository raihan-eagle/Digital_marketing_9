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
            <div className='bg-warning p-1 d-flex m-3 rounded w-50 m-auto'>
                
                <div className='text-tqo'>
                    <p>“ We have worked with Etech-Solution with 2 projects andextremely happy with the output. They are up to date with the current design trend and delivered us the final product in time. " - <span className='title-here'>M. Khaled</span></p>
                </div>
                <div>
                    <img className='image-style m-3' src="https://i.ibb.co/BKwYFzs/mj-rahman-e1450945002509.jpg" alt="" />
                </div>
            </div>
            <br />
            <br />
            <div className='bg-danger p-1 d-flex m-3 rounded m-auto w-75'>
                <div>
                    <img className='image-style m-3' src="https://i.ibb.co/1M2k18k/3117121.jpg" alt="" />
                </div>
                <div className='text-tes'>
                    <p>" I worked with Etech-Solutions with my new website and glad that I choose them earlier. I was a newbi in this field but they helped to understand all the jurgons and helped me to develope my full functional online shop. They really have amazing tech skills  " - <span className='title-here'>Alan </span></p>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-around'>
                
                
                <img  src="https://i.ibb.co/NKKmp93/services-socialmediamarketing-alt-colors-optimized.png" alt="" />
                <img  src="https://i.ibb.co/9bLmdfR/services-analytics-alt-colors-optimized.png" alt="" />
                
            </div>

            <br />
            
        </div>
    );
};

export default Testimonials;




