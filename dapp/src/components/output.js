import React, { useEffect, useState } from 'react';
import { GETMEMO } from '../ContractIntegration';


 

const Output = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [hexvalue, setHexValue] = useState('');
    const [entries, setEntries] = useState([]);

    const get = async () => {
        const answer = await GETMEMO();
        if (Array.isArray(answer)) {
            const formattedEntries = answer.map(entry => ({
                name: entry[0],
                message: entry[1],
                date: entry[2].toString(),
                hexvalue: entry[3]
            }));
            setEntries(formattedEntries);
        } else {
            console.error('Invalid answer format:', answer);
        }
        
    }
    
    useEffect(() => {
     get()
        
    }, []);

      
   
      
      
  return (
    
             <div className='mt-16'>

                <div className='grid grid-cols-5 text-xl gap-2  text-center font-semibold font-mono mb-5 '>
                    <div>Name</div>
                    <div>Message</div>
                    <div>Date</div>
                    <div className='col-span-2'>ID</div>
                </div>
                
                {entries.map((entry, index) => (
                <div className='grid grid-cols-5 text-md gap-2  text-center font-semibold font-mono m-3' key={index}>
                    <p>{entry.name}</p>
                    <p>{entry.message}</p>
                    <p>{entry.date}</p>
                    <p className='col-span-2'>{entry.hexvalue}</p>
                </div>
                ))}

            </div>
            
    
  )
}

export default Output