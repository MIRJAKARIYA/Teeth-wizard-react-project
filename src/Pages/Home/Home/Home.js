import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import useServices from '../../../useServices';
import SingleService from '../../Shared/SingleService/SingleService';
import './Home.css';
const Home = () => {
    const services = useServices();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <div className='services-container'  id='services'>
                <h1 className='text-center mb-5'>Services</h1>
                <div className='row gy-4'>
                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;