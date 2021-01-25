import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../services/api';

const Chart = () => {


// Chamada para api --------------------------------------->

  const [list, setList] = useState([]);
  
   useEffect(() => {
    getDados()

    const interval=setInterval(()=>{
        getDados()
       },5000)
       return()=>clearInterval(interval)
  }, [])

  function getDados() {
    api.get('/users/1/data')
   .then((response) => {
     setList(response.data)
   })
   .catch((error) =>{
     console.log(error)
   })
  }
  console.log(list)

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