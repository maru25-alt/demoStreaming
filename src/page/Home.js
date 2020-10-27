import React from 'react'
import HomeCard from '../components/HomeCard';

export default function Home() {
   
    return (
       
        <div className="home">
                  <HomeCard name="Series" path="/series"/>
                  <HomeCard name="Movies" path="/movies"/>
        </div>
    )
}
