import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  animation: {
    x: {
      duration: 5000,
      from: -500
    },
    y: {
      duration: 3000,
      from: 500
    }
  },

  plugins: {
    legend: {
      labels: {
          // This more specific font property overrides the global property
          font: {
              family:'Sans-serif',             
              weight: 'bold'

          }
      }
  },

    title: {
      display: true,
      text: 'Overall Leading Board',
      
    }, 
  },
  maintainAspectRatio:false, 
  responsive: true,
  indexAxis: 'y',
  scales: {
    xAxes: {
      stacked: true,  
      ticks:
      {
        font: function (context) {
          var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
          var size = Math.round(avgSize / 32);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
              size: size,
              weight: 'bold'
          };
      },
      }
              
    },
    y: {
      
        ticks:
      {
        font: function (context) {
          var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
          var size = Math.round(avgSize / 45);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
              size: size,
              weight: 'bold'
          };
      },

    },

      stacked: true,
      grid: {
        display: false,
        borderColor: 'black',
     },
    
    },  
  },
};

const labels = ['ARYABHATTA', 'BHASKARA', 'CHARAKA', 'SUSURUTA', 'KAUTILYA', 'VYASA', 'BRAHMAGUPTA', 'VARAHAMIHIRA', 'MAITREYI', 'GARGI', 'RAMANUJA','KAPILA'];

export const data = {
  labels,
  
  datasets: [
    
    {
      
      label: 'Sports',
      data: [20,20,200,50,60,80,80,100,130,130,120,1200],
      backgroundColor:'#D79922',
      categoryPercentage: 1.1, // notice here 
      barPercentage: 0.8,
      
    },
    {
      label: 'Culty',
      data: [20,160,180,50,60,80,80,100,10,90,120,10],
      backgroundColor: 'rgb(75, 192, 192)',
      categoryPercentage: 1.1, // notice here 
      barPercentage: 0.8,
    },
    {
      label: 'Techy',
      data: [20,20,210,50,30,80,80,130,130,10,10,10],
      backgroundColor: 'rgb(53, 162, 235)',
      categoryPercentage: 1.1, // notice here 
      barPercentage: 0.8,
    },
  ],
};



const leader = () => {
  return (
    <div className="FirstTab">
      <div className="canvas-container">
      <Bar options={options} data={data} />
      </div>
    </div>
  );
};
export default leader;