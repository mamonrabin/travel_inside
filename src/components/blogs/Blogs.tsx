import { blogList } from '@/src/api/blogApi';
import BlogCard from '@/src/cards/BlogCard';
import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 pb-20 mt-6'>
            {
                blogList.map(blog => <BlogCard key={blog.id} blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;