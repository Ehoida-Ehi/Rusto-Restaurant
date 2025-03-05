import React, { useState, useEffect, useRef } from 'react';
import { FaBox } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const DashSuperAdmin = () => {
    const [typedText, setTypedText] = useState('');
    const textToType = "Welcome to Super Admin Dashboard";
    const paragraphToType = "Empowering Excellence, Simplifying Management – Your Restaurant at a Glance.";
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
        <div className='p-2'>
            <div
                className="relative flex items-center justify-center h-[200px] bg-[url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg')] bg-cover bg-center"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative text-center">
                    <h1 className="text-4xl font-bold text-orange-500">
                        {typedText}
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                        {paragraphTypedText}
                    </p>
                </div>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 mt-8">
                <div className="bg-black p-4 rounded-lg shadow-md">
                    <h3 className="flex flex-col text-white text-lg font-bold">
                        Generated Revenue
                        <div>
                            💷💶💵
                        </div>
                    </h3>
                    <h3 className="text-xl text-white"> N20,000,000</h3>
                </div>
                {/* menu */}
                <div className="bg-black p-4 rounded-lg shadow-md">
                    <h3 className="flex flex-col text-white text-lg font-bold">
                        Total Branches
                        <div>
                            <FaBox size={16} color="currentColor" />
                        </div>
                    </h3>
                    <h3 className="text-xl text-white"> 70</h3>
                </div>
                <div className="bg-black p-4 rounded-lg shadow-md">
                    <h3 className="flex flex-col text-white text-lg font-bold">
                        Total Admins Registered
                        <div>
                            <FaUsers size={16} color="currentColor" />
                        </div>
                    </h3>
                    <h3 className="text-xl text-white"> 7</h3>
                </div>
                <div className="bg-black p-4 rounded-lg shadow-md">
                    <h3 className="flex flex-col text-white text-lg font-bold">
                        Total ratings
                        <div>
                            ⭐⭐⭐⭐⭐
                        </div>
                    </h3>
                    <h3 className="text-xl text-white"> 50</h3>
                </div>
            </div>
        </div>
    )
}

export default DashSuperAdmin