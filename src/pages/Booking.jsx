import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'; // Install react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for date picker
import './css/DatePickerStyles.css';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const [tables, setTables] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [reservationForm, setReservationForm] = useState({
        name: '',
        phone: '',
        date: null,
        timeSlot: '',
        tableId: null,
        specialRequests: '',
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const floorPlan = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            capacity: i % 2 === 0 ? 4 : 2,
            reserved: false,
        }));
        setTables(floorPlan);
        
        setIsVisible(true); 
    }, []);

    const handleReservation = () => {
        const { name, phone, date, timeSlot, tableId } = reservationForm;

        if (!name || !phone || !date || !timeSlot || !tableId) {
            toast.error('All fields are required!');
            return;
        }

        const tableAlreadyReserved = reservations.some(
            (reservation) =>
                reservation.tableId === tableId &&
                reservation.timeSlot === timeSlot &&
                reservation.date.toDateString() === date.toDateString()
        );
        if (tableAlreadyReserved) {
            toast.error('Table already reserved for this time and date!');
            return;
        }

        const updatedTables = tables.map((table) =>
            table.id === parseInt(tableId) ? { ...table, reserved: true } : table
        );

        setTables(updatedTables);
        setReservations([
            ...reservations,
            { name, phone, date, timeSlot, tableId },
        ]);
        toast.success('Table reserved successfully!');
        setReservationForm({
            name: '',
            phone: '',
            date: null,
            timeSlot: '',
            tableId: null,
            specialRequests: '',
        });
    };

    return (
        <div className="mt-16">
            <div
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2015/04/25/07/55/restaurant-738788_1280.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center h-full text-white">
                    <h1
                       className={`text-6xl md:text-6xl font-bold text-white transition-transform duration-700 ease-out transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                      }`}
                    >
                        Table Reservation
                    </h1>
                    <div className="w-24 h-1 mt-2 bg-white"></div>
                </div>
            </div>

            <div className="p-6 bg-slate-950 min-h-screen">
                <h1 className="text-3xl font-bold text-white mb-3">
                    <span className="text-orange-500">Rusto</span> Restaurant Booking Service
                </h1>

                <p className='text-white font-semibold mb-6 '>Please note that table will be reseverd for 30 minutes**</p>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Reserve a Table</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border rounded"
                            value={reservationForm.name}
                            onChange={(e) =>
                                setReservationForm({ ...reservationForm, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="p-2 border rounded"
                            value={reservationForm.phone}
                            onChange={(e) =>
                                setReservationForm({ ...reservationForm, phone: e.target.value })
                            }
                        />
                        <DatePicker
                            selected={reservationForm.date}
                            onChange={(date) =>
                                setReservationForm({ ...reservationForm, date })
                            }
                            placeholderText="Select Date"
                            className="p-2 border rounded w-full"
                            minDate={new Date()}
                        />
                        <input
                            type="time"
                            className="p-2 border rounded"
                            value={reservationForm.timeSlot}
                            onChange={(e) =>
                                setReservationForm({ ...reservationForm, timeSlot: e.target.value })
                            }
                        />
                        <select
                            className="p-2 border rounded"
                            value={reservationForm.tableId || ''}
                            onChange={(e) =>
                                setReservationForm({ ...reservationForm, tableId: e.target.value })
                            }
                        >
                            <option value="">Select Table</option>
                            {tables
                                .filter((table) => !table.reserved)
                                .map((table) => (
                                    <option key={table.id} value={table.id}>
                                        Table {table.id} - Capacity {table.capacity}
                                    </option>
                                ))}
                        </select>
                        <textarea
                            placeholder="Special Requests"
                            className="col-span-2 p-2 border rounded"
                            value={reservationForm.specialRequests}
                            onChange={(e) =>
                                setReservationForm({
                                    ...reservationForm,
                                    specialRequests: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <button
                        className="mt-4 bg-orange-500 hover:bg-orange-700 hover:scale-105 transition-transform text-white px-4 py-2 rounded"
                        onClick={handleReservation}
                    >
                        Reserve Table
                    </button>
                </div>
                <ToastContainer
                    position="top-center"
                    transition={Flip}
                    autoClose={3000}
                    hideProgressBar={true}
                    closeOnClick
                    pauseOnHover
                    draggable

                />
            </div>
        </div>
    );
};

export default Booking;






