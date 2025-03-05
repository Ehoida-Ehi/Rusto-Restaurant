import { MdEdit, MdDelete } from 'react-icons/md'; // Ensure to import both icons

const AllStaff = () => {
  const contactDetails = {
    name: "John",
    phone: "+1234567890",
    date: "2022-01-01",
    table: "table1",
    specialRequest: "i want window seat",
  };

  return (
    <div className="p-4 bg-slate-300">
      <div className="mt-4">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-black mb-6 text-center">
          <span className="text-orange-500">Rusto</span> Restaurant Booking Card
        </h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Details Card 1 */}
          <div>
            <div className="relative border w-full p-6 rounded-lg shadow-lg bg-white">
              {/* Edit and Trash Bin Icons */}
              <div className="absolute top-3 right-3 flex space-x-3">
                <button
                  className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  aria-label="Edit contact details"
                >
                  <MdEdit className="w-6 h-6" />
                </button>
                <button
                  className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
                  aria-label="Delete contact details"
                >
                  <MdDelete className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {contactDetails.name}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Phone:</span> {contactDetails.phone}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Date:</span> {contactDetails.date}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Table:</span> {contactDetails.table}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Special Request:</span> {contactDetails.specialRequest}
              </p>
            </div>
          </div>

          {/* Contact Details Card 2 */}
          <div>
            <div className="relative border w-full p-6 rounded-lg shadow-lg bg-white">
              {/* Edit and Trash Bin Icons */}
              <div className="absolute top-3 right-3 flex space-x-3">
                <button
                  className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  aria-label="Edit contact details"
                >
                  <MdEdit className="w-6 h-6" />
                </button>
                <button
                  className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
                  aria-label="Delete contact details"
                >
                  <MdDelete className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {contactDetails.name}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Phone:</span> {contactDetails.phone}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Date:</span> {contactDetails.date}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Table:</span> {contactDetails.table}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Special Request:</span> {contactDetails.specialRequest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStaff;