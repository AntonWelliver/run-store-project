import React from 'react'

const FeaturedRaceItem = ({ race }) => {
    const { message1, message2, message3 } = race;
    return (
        <div className='card bg-light'>
            <h1 className='text-danger text-center lead'>New Information!</h1>
            <h1 className='text-primary text-center'>
                {message1}
            </h1>
            <h2 className='text-primary'>
                {message2}
            </h2>
            <h2 className='text-primary'>
                {message3}
            </h2>
            <p>
                <button className='btn btn-success btn-lg'>Register Here!</button>
            </p>
        </div>
    )
}

export default FeaturedRaceItem
