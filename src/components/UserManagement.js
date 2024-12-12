import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSaveUser = () => {
    if (editingUser?.id === null) {
      // Adding new user
      setUsers([...users, { ...editingUser, id: Date.now() }]);
    } else {
      // Editing existing user
      setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
        <button onClick={handleAddUser} className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
          <FiPlus className="mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleEditUser(user)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <FiEdit2 />
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding/Editing User */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{editingUser?.id ? 'Edit User' : 'Add User'}</h3>
            <input
              type="text"
              value={editingUser?.name || ''}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
              placeholder="Name"
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="email"
              value={editingUser?.email || ''}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
              placeholder="Email"
              className="mb-2 p-2 border rounded w-full"
            />
            <select
              value={editingUser?.role || ''}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
              className="mb-2 p-2 border rounded w-full"
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            <select
              value={editingUser?.status || ''}
              onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
              className="mb-2 p-2 border rounded w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button
              onClick={handleSaveUser}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
