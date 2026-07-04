import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data.contacts);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch contacts");
    }
  };


  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);

      alert("Message Deleted");

      fetchContacts();
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">Total Messages</h2>

    <p className="text-4xl font-bold text-cyan-500 mt-2">
      {contacts.length}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">Total Users</h2>

    <p className="text-4xl font-bold text-green-500 mt-2">
      --
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">Today's Messages</h2>

    <p className="text-4xl font-bold text-orange-500 mt-2">
      {contacts.length}
    </p>
  </div>

</div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Message</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className="border-b text-center"
              >
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.email}</td>
                <td className="p-4">{contact.subject}</td>
                <td className="p-4">{contact.message}</td>

                <td className="p-4">
                  <button
                    onClick={() => deleteMessage(contact._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;