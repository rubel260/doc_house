import React from 'react';

const DashboardCover = ({heading , subheading}) => {
    return (
        <div>
        <h1 className='text-gray-600 text-3xl font-bold'>Dashboard</h1>
        <div className='text-center py-3'>
            <p >--{heading}--</p>
            <h1 className='text-2xl font-bold'>{subheading}</h1>
        </div>
            
        </div>
    );
};

export default DashboardCover;