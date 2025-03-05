import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableManger = () => {
    const [tables, setTables] = useState([]);
    const [walkInAssignments, setWalkInAssignments] = useState([]);

    useEffect(() => {
        const floorPlan = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            capacity: i % 2 === 0 ? 4 : 2,
            reserved: false,
        }));
        setTables(floorPlan);
    }, []);

    const assignWalkIn = () => {
        const availableTable = tables.find((table) => !table.reserved);
        if (!availableTable) {
            toast.error('No tables available for walk-in customers!');
            return;
        }

        const updatedTables = tables.map((table) =>
            table.id === availableTable.id ? { ...table, reserved: true } : table
        );

        setTables(updatedTables);
        setWalkInAssignments([...walkInAssignments, availableTable]);
        toast.success(`Table ${availableTable.id} assigned to walk-in customer!`);
    };

    const renderFloorPlan = () => (
        <div className="grid grid-cols-5 gap-4 p-4">
            {tables.map((table) => (
                <div
                    key={table.id}
                    className={`p-4 rounded-lg text-white text-center ${
                        table.reserved ? 'bg-red-500' : 'bg-green-500'
                    }`}
                >
                    Table {table.id}
                    <br />
                    Capacity: {table.capacity}
                    <br />
                    {table.reserved ? 'Reserved' : 'Available'}
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-6 bg-gray-300 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Walk-In Customers</h2>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={assignWalkIn}
                >
                    Assign Table
                </button>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Floor Plan</h2>
                {renderFloorPlan()}
            </div>
            <ToastContainer />
        </div>
    );
};

export default TableManger;