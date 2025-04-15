
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, Wallet, Users, FileText, Package, Settings, LogOut } from "lucide-react";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would verify the admin credentials
    // This is just a placeholder
    if (email === "admin@workants.co.za" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid admin credentials!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-workants-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <Settings className="mx-auto h-12 w-12 text-blue-500" />
            <h2 className="mt-6 text-3xl font-bold">Admin Login</h2>
            <p className="mt-2 text-sm text-gray-400">
              Please sign in with your admin credentials
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleAdminLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign in to Admin Panel
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              For demo: use email "admin@workants.co.za" and password "admin123"
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-workants-black text-white">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:block">
          <div className="flex flex-col h-full">
            <div className="h-20 flex items-center px-6 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">WorkAnts Admin</h2>
            </div>
            
            <nav className="flex-1 py-6 px-4">
              <ul className="space-y-2">
                <li>
                  <a className="flex items-center px-4 py-3 text-white bg-blue-600 rounded-md" href="#">
                    <BarChart className="h-5 w-5 mr-3" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md" href="#">
                    <Users className="h-5 w-5 mr-3" />
                    Users
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md" href="#">
                    <FileText className="h-5 w-5 mr-3" />
                    Projects
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md" href="#">
                    <Package className="h-5 w-5 mr-3" />
                    Blueprints
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md" href="#">
                    <Wallet className="h-5 w-5 mr-3" />
                    Payments
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md" href="#">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="p-4 border-t border-gray-800">
              <Button 
                variant="outline" 
                className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsAuthenticated(false)}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900">
          {/* Topbar */}
          <header className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-white">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 text-gray-300 hover:text-white md:hidden"
                onClick={() => setIsAuthenticated(false)}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </header>
          
          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-300">Total Users</h3>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-3xl font-bold mt-2">248</p>
                <p className="text-sm text-green-500 mt-1">↑ 12% from last month</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-300">Projects</h3>
                  <FileText className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-3xl font-bold mt-2">36</p>
                <p className="text-sm text-green-500 mt-1">↑ 8% from last month</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-300">Blueprint Sales</h3>
                  <Package className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-3xl font-bold mt-2">124</p>
                <p className="text-sm text-green-500 mt-1">↑ 18% from last month</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-300">Revenue</h3>
                  <Wallet className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-3xl font-bold mt-2">R234,500</p>
                <p className="text-sm text-green-500 mt-1">↑ 15% from last month</p>
              </div>
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Revenue Overview</h3>
                <div className="h-80 flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-gray-500" />
                  <p className="text-gray-500 ml-4">Chart visualization would appear here</p>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">User Growth</h3>
                <div className="h-80 flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-500" />
                  <p className="text-gray-500 ml-4">Chart visualization would appear here</p>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg shadow mb-8">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-gray-300">Recent Activity</h3>
              </div>
              
              <div className="p-6">
                <Tabs defaultValue="all">
                  <TabsList className="bg-gray-700">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="sales">Sales</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-start p-4 bg-gray-700 rounded-lg">
                          <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">New user registered</p>
                            <p className="text-gray-400 text-sm">John Doe created a new account</p>
                            <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="users" className="mt-4">
                    <p className="text-gray-400">User activity will appear here.</p>
                  </TabsContent>
                  
                  <TabsContent value="sales" className="mt-4">
                    <p className="text-gray-400">Sales activity will appear here.</p>
                  </TabsContent>
                  
                  <TabsContent value="projects" className="mt-4">
                    <p className="text-gray-400">Project activity will appear here.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
