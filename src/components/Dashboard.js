// src/components/Dashboard.js
import React from 'react';
import { FiUsers, FiShield, FiLock } from 'react-icons/fi';

function Dashboard() {
  const stats = [
    { id: 1, name: 'Total Users', value: '25', icon: FiUsers },
    { id: 2, name: 'Active Roles', value: '8', icon: FiShield },
    { id: 3, name: 'Permissions', value: '15', icon: FiLock },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {item.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
