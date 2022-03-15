import React from 'react';
import { Novelview } from '../components/Novelview'
import data from '../data/Novel.json'
import '../style/Post.css'

function Post() {
    return (
        <div className="Post">
            <div className="Layout">
                {data.map((Novel) => (
                    <Novelview key={Novel.novelName} {...Novel}/>
                ))}
            </div>
        </div>
    );
}

export default Post;