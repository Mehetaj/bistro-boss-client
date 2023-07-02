import React from 'react';

const MenuItem = ({item}) => {
    const { name,recipe,price, image } = item;
    
    // console.log(item);

    return (
        <div className='flex items-center space-x-4'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} width={100} height={100} className='' src={image} alt="" />
            <div>
                <h3 className=' uppercase
                '>{name}--------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;