import React from 'react';
import ServiceCard from '../SharedPages/servicecard/ServiceCard';

const ServiceTab = ({items}) => {
    console.log('service tab' , items);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 '>
            {
                items.map(item=> <ServiceCard key={item._id} item={item}></ServiceCard> )
            }
            
        </div>
    );
};

export default ServiceTab;