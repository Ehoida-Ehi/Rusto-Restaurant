import React, { useState, useEffect, useRef } from 'react';
import { Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { FaBox } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
// Registering necessary ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)


const Dashboard = () => {
  // Data for Pie Chart
  const pieData = {
    labels: ['Sales', 'Revenue', 'Ratings', 'Orders', 'Reviews'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(197, 28, 83, 1)',
          'rgba(47, 128, 255, 1)',
          'rgba(243, 255, 119, 1)',
          'rgba(63, 255, 124, 1)',
          'rgba(107, 44, 245, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  // Data for Line Chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Record',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(0, 20, 255, 1)',
        tension: 0.1,
      },
    ],
  }


  const [typedText, setTypedText] = useState('');
  const textToType = "Welcome to Our Admin Dashboard";
  const paragraphToType = "Serving Delicious Foods and Impeccable Customer Service";
  const [paragraphTypedText, setParagraphTypedText] = useState('');
  const typingSpeed = 50;
  const paragraphTypingSpeed = 40;


  const textIndex = useRef(0)
  const paragraphIndex = useRef(0)

  useEffect(() => {
    if (textIndex.current < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, textIndex.current + 1));
        textIndex.current += 1
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    if (textIndex.current == textToType.length && paragraphIndex.current < paragraphToType.length) {
      const timeout = setTimeout(() => {
        setParagraphTypedText(paragraphToType.substring(0, paragraphIndex.current + 1));
        paragraphIndex.current += 1
      }, paragraphTypingSpeed);
      return () => clearTimeout(timeout);
    }

  }, [typedText, paragraphTypedText]);

  return (
    <div className='p-2 bg-orange-300'>
      <div
        className="relative flex items-center justify-center h-[200px] bg-[url('https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg')] bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-white">
            {typedText}
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            {paragraphTypedText}
          </p>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 mt-8">
        <div className="bg-gradient-to-t from-pink-700 via-pink-600 to-pink-400 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total weekly Sales
            <div>
              💷💶💵
            </div>
          </h3>
          <h3 className="text-xl"> N20,000,000</h3>
        </div>
        {/* menu */}
        <div className="bg-gradient-to-t from-violet-700 via-violet-600 to-violet-400 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Menu
            <div>
              <FaBox size={16} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> 70</h3>
        </div>
        <div className="bg-gradient-to-t from-blue-700 via-blue-600 to-blue-400 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Users
            <div>
              <FaUsers size={16} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> 7</h3>
        </div>
        <div className="bg-gradient-to-t from-amber-700 via-amber-600 to-amber-400 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total ratings
            <div>
              ⭐⭐⭐⭐⭐
            </div>
          </h3>
          <h3 className="text-xl"> 50</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 ]">
        {/* Pie Chart Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-72">
          <h2 className="text-lg font-semibold mb-3 text-center">Dashboard Pie Chart</h2>
          <Pie data={pieData} />
        </div>

        {/* Line Chart Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-72">
          <h2 className="text-lg font-semibold mb-3 text-center">Dashboard Graph</h2>
          <Line data={lineData} />
        </div>

      </div>
    </div>
  )
}

export default Dashboard

