import React from 'react';
import BookForm from './BookForm';
import BookCart from './BookCart';

const BookTour = () => {
    return (
        <div className='lg:px-20 flex lg:flex-row flex-col pb-12 gap-5'>
            <div className='flex-2'>
                <BookForm/>
            </div>
            <div className='flex-1'>
                <BookCart/>
            </div>
        </div>
    );
};

export default BookTour;