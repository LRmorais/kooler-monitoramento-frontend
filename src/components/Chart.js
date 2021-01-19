import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Chart = () => {


// Chamada para api --------------------------------------->
  const [list, setList] = useState([]);
  
    const getTemp = async () => {
      try {
        const getTemps = await axios.get('http://localhost:3003/users/1/data')
        setList(getTemps.data)
        
      } catch (err) {
        console.error(err.message);
      }
    };
  useEffect(() => {
    getTemp()
    const interval=setInterval(()=>{
      getTemp()
     },5000)
     return()=>clearInterval(interval)
  }, [])
// ------------------------------------------------------------->


  return (
    <>
      <div style={{ display: 'flex', maxWidth: 900, justifyContent: 'center' }}>
        <Line
          data={
            {
              labels: list.map(item => (item.id)),
              datasets: [
                {
                  label: 'Temperatura em °C',
                  data: list.map(item => (item.temp)),
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor:'#FF3030',
                  borderWidth: 1
                }
              ]
            }
          }
          width={400}
          height={600}
          options={{ 
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>

    </>
  );
}

export default Chart;