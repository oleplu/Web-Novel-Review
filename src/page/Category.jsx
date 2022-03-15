import React, { useState } from 'react';
import '../style/Category.css'
import data from '../data/Novel.json'
import { Novelview } from '../components/Novelview'

function Category() {
    const [searchText, setSearchText] = useState('');
    const filterNovel = data.filter((Novel) => {
        if(!!Novel.tag.includes(searchText)) {
            return Novel.tag.includes(searchText);
        }else if(!!Novel.original.includes(searchText)){
            return Novel.original.includes(searchText);
        }else if(!!Novel.novelName.includes(searchText)){
            return Novel.novelName.includes(searchText);
        }else {
            return Novel.status.includes(searchText);
        }
    })
    return (
        <div className="">
            <input className="Input" type="text" placeholder="Search" value={searchText} onChange={(event) => {setSearchText(event.target.value)}}/>
            <div className="Layout">
                {filterNovel.map((Novel)=> (
                    <Novelview key={Novel.novelName} {...Novel}/>
                ))}
            </div>
        </div>
    );
}

export default Category;