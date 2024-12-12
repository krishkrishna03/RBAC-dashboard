import { useState } from 'react';
import { FiPlus, FiCheck, FiX } from 'react-icons/fi';

function PermissionManagement() {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'create', description: 'Create new resources', roles: ['Admin', 'Editor'] },
    { id: 2, name: 'read', description: 'View resources', roles: ['Admin', 'Editor', 'Viewer'] },
    { id: 3, name: 'update', description: 'Modify existing resources', roles: ['Admin', 'Editor'] },
    { id: 4, name: 'delete', description: 'Remove resources', roles: ['Admin'] },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Permission Management</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
          <FiPlus className="mr-2" />
          Add Permission
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Permission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Editor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Viewer
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{permission.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{permission.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {permission.roles.includes('Admin') ? (
                    <FiCheck className="h-5 w-5 text-green-500" />
                  ) : (
                    <FiX className="h-5 w-5 text-red-500" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {permission.roles.includes('Editor') ? (
                    <FiCheck className="h-5 w-5 text-green-500" />
                  ) : (
                    <FiX className="h-5 w-5 text-red-500" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {permission.roles.includes('Viewer') ? (
                    <FiCheck className="h-5 w-5 text-green-500" />
                  ) : (
                    <FiX className="h-5 w-5 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PermissionManagement;