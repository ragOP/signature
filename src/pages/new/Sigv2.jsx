import React, { useState, useEffect } from "react";
import {
  FileText,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  Clock,
  Star,
  Search,
  CheckCircle,
  Signature,
} from "lucide-react";
// import SignatureNavbar from "../components/signature/SignatureNavbar";
import { BACKEND_URL } from "../../utils/backendUrl";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center px-4 py-3 md:px-6 md:py-4 border-b border-amber-200">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-2 rounded-xl">
          <Signature className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">SignaturePro</span>
      </div>
    </div>
  );
};

const SignatureNewAbondentReport = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/signature/rag-v2/get-orders-abd`
      );
      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
      } else {
        setError("Failed to fetch signature orders");
      }
    } catch (err) {
      setError("Error fetching signature orders: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString();
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
            <p className="text-gray-600 font-primary">
              Loading your signature design records...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-4xl mb-4">✍️</div>
            <p className="text-red-600 font-primary">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
            Signature Abondent Records
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View all your signature design orders and their current status
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8  ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 " />
            <input
              type="text"
              placeholder="Search by name, email, or order ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-200 to-amber-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Profession
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold ">
                    Remarks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Additional Products
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Order Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order._id}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-mono text-gray-800">
                      {order.abdOrderId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {order.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.phoneNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.profession}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-600 max-w-xs"
                      title={order.remarks}
                    >
                      <div className="w-64">
                        {order.remarks || "No remarks"}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.additionalProducts ? (
                        <div className="space-y-1 w-[7vw]">
                          {order.additionalProducts.map((product, idx) => (
                            <div key={idx} className="leading-tight">
                              <div className="text-gray-800">{product}</div>
                              <div className="text-xs font-semibold text-gray-700">
                                ₹299
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        "Signature Design"
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                      ₹{order.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDateTime(order.orderDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✍️</div>
              <p className="text-gray-500">
                {searchTerm
                  ? "No orders found matching your search."
                  : "No signature design orders found."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignatureNewAbondentReport;
