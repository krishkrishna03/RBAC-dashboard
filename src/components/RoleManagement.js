import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

function RoleManagement() {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access',
      permissions: ['create', 'read', 'update', 'delete'],
    },
    {
      id: 2,
      name: 'Editor',
      description: 'Can edit content',
      permissions: ['read', 'update'],
    },
    {
      id: 3,
      name: 'Viewer',
      description: 'Read-only access',
      permissions: ['read'],
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null);

  const handleAddRole = () => {
    setEditingRole({
      name: '',
      description: '',
      permissions: [], // Ensure permissions is an array
    });
    setShowModal(true); // Open the modal for adding a new role
  };

  const handleEditRole = (role) => {
    setEditingRole(role); // Set the role to be edited
    setShowModal(true); // Open the modal for editing the role
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  const handleSaveRole = () => {
    if (editingRole) {
      if (editingRole.id) {
        // Update the existing role
        setRoles((prevRoles) =>
          prevRoles.map((role) =>
            role.id === editingRole.id ? editingRole : role
          )
        );
      } else {
        // Add a new role
        setRoles((prevRoles) => [
          ...prevRoles,
          { ...editingRole, id: Date.now() }, // Generate a unique id
        ]);
      }
    }
    setShowModal(false); // Close the modal after saving
  };

  const handlePermissionChange = (permission) => {
    if (!editingRole) return; // If editingRole is null, do nothing

    const permissions = [...editingRole.permissions];
    if (permissions.includes(permission)) {
      const index = permissions.indexOf(permission);
      permissions.splice(index, 1); // Remove the permission
    } else {
      permissions.push(permission); // Add the permission
    }
    setEditingRole({ ...editingRole, permissions });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Role Management</h2>
        <button
          onClick={handleAddRole}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center"
        >
          <FiPlus className="mr-2" />
          Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(roles) &&
          roles.map((role) => (
            <div key={role.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <FiEdit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Permissions Display */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Permissions:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.isArray(role.permissions) &&
                    role.permissions.map((permission) => (
                      <span
                        key={permission}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {permission}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal for Adding/Editing Role */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">{editingRole?.id ? 'Edit Role' : 'Add Role'}</h3>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              placeholder="Role Name"
              value={editingRole?.name || ''}
              onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
            />
            <textarea
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              placeholder="Role Description"
              value={editingRole?.description || ''}
              onChange={(e) => setEditingRole({ ...editingRole, description: e.target.value })}
            />
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900">Permissions:</h4>
              <div className="flex flex-wrap gap-2">
                {['create', 'read', 'update', 'delete'].map((permission) => (
                  <label key={permission} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingRole?.permissions?.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white p-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRole}
                className="bg-blue-600 text-white p-2 rounded"
              >
                {editingRole?.id ? 'Save Changes' : 'Add Role'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleManagement;
