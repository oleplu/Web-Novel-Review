import React from 'react';
import { Profile }from '../components/Profile'
import data from '../data/Author.json';
import { Comments } from '../components/Comments'

function Author() {
    return (
        <div className="Author">
        {data.map((Author)=>(
            <Profile key={Author.fname} {...Author}/>
        ))}
        <div>
            <Comments />
        </div>
        </div>
    );
}

export default Author;