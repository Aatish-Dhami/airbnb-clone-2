import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const descr = "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home"
  
  const cardElement = data.map(d => {
    return (
      <Card 
          img={d.coverImg} 
          rating={d.stats.rating} 
          reviewCount={d.stats.reviewCount} 
          location={d.location} 
          title={d.title} 
          price={d.price}
          openSpots={d.openSpots}

        />
    )
  })

  return (
    <div className="App">
      <Navbar img="../images/logo.png"/>
      <div className='main'>
        <Hero img="../images/Hero.png" title="Online Experiences" desc={descr}/>
        <section className="cards-list">
                {cardElement}
            </section>
      </div>
    </div>
  );
}