import React from 'react';
import '../style/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div className="Home">
          <img src="https://www.gtplanet.net/forum/media/lo-fi-japanese-chill.46850/full"></img>
          <div className="center">
            <p className="Head">Web Novel Review</p>
            <div>
              <Link to ="/post"><button>กดที่นี่เพื่อเข้าสู่หน้าหลัก</button></Link>
            </div>
          </div>
      </div>
    );
}

export default Home;
