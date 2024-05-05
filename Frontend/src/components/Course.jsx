import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
import {Link} from "react-router-dom";
function Course() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-0.5">
                <div className='mt-20 items-center justify-center text-center py-10'>
                    <h1 className='text-2xl md:text-4xl'>We are delighted to have <span className='text-pink-500'> you Here:) </span></h1>
                    <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil impedit dolorum nesciunt mollitia possimus reprehenderit, odit placeat illum veritatis aut et voluptatem obcaecati? Inventore, rerum! Harum ipsum expedita voluptatum nisi possimus ab nesciunt aperiam voluptatibus magnam veniam voluptatem aspernatur nemo rerum fugiat deserunt vel pariatur, facere, ipsam amet perspiciatis ex quas deleniti! Minima possimus atque quod reiciendis, commodi rerum.</p>
                    <Link to="/">
                    <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course