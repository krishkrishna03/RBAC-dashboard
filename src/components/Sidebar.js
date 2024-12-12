import { FiHome, FiUsers, FiShield, FiLock } from 'react-icons/fi';

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome },
    { id: 'users', label: 'Users', icon: FiUsers },
    { id: 'roles', label: 'Roles', icon: FiShield },
    { id: 'permissions', label: 'Permissions', icon: FiLock },
  ];

  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">RBAC Admin</h1>
      </div>

      <div className="flex flex-col flex-1">
        <nav className="mt-5 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-200 ${
                  activeTab === item.id ? 'bg-gray-200' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="mx-4 font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
export default Sidebar;