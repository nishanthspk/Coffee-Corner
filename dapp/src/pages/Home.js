import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Output from '../components/output';

function Home() {
 
  return (
    <div className='bg-green-600 h-screen '>
      <Navbar />
      
       <Form /> 
       <Output />
    
    </div>
  );
}

export default Home;
