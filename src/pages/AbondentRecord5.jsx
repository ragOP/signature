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
  Download,
  CalendarIcon,
  ChevronDown,
  Signature,
} from "lucide-react";
// import SignatureNavbar from "../components/signature/SignatureNavbar";
import { BACKEND_URL } from "../utils/backendUrl";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center px-4 py-3 md:px-6 md:py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-gray-800 to-black p-2 rounded-xl">
          <Signature className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">SignaturePro</span>
      </div>
    </div>
  );
};

const AbondentRecord5 = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDateDropdown && !event.target.closest(".date-filter-dropdown")) {
        setShowDateDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDateDropdown]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/lander5/get-orders-abd`
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

  // Date filtering logic
  const getDateFilteredOrders = (orders) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    return orders.filter((order) => {
      const orderDate = new Date(order.orderDate);
      const orderDay = new Date(
        orderDate.getFullYear(),
        orderDate.getMonth(),
        orderDate.getDate()
      );

      switch (dateFilter) {
        case "today":
          return orderDay.getTime() === today.getTime();
        case "yesterday":
          return orderDay.getTime() === yesterday.getTime();
        case "last7days":
          return orderDate >= lastWeek;
        case "custom":
          if (customStartDate && customEndDate) {
            const startDate = new Date(customStartDate);
            const endDate = new Date(customEndDate);
            endDate.setHours(23, 59, 59, 999); // Include the entire end date
            return orderDate >= startDate && orderDate <= endDate;
          }
          return true;
        default:
          return true;
      }
    });
  };

  // CSV export function
  const exportToCSV = () => {
    const csvHeaders = [
      "Order ID",
      "Name",
      "Email",
      "Phone",
      "Profession",
      "Remarks",
      "Additional Products",
      "Amount",
      "Order Date",
    ];

    const csvData = filteredOrders.map((order) => [
      order.abdOrderId,
      order.fullName,
      order.email,
      order.phoneNumber,
      order.profession,
      order.remarks || "No remarks",
      order.additionalProducts
        ? order.additionalProducts.join(", ")
        : "Signature Design",
      order.amount,
      formatDateTime(order.orderDate),
    ]);

    const csvContent = [
      csvHeaders.join(","),
      ...csvData.map((row) =>
        row
          .map((field) =>
            typeof field === "string" && field.includes(",")
              ? `"${field.replace(/"/g, '""')}"`
              : field
          )
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `signature_abondent_orders_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dateFilteredOrders = getDateFilteredOrders(orders);
  const filteredOrders = dateFilteredOrders.filter(
    (order) =>
      order.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.abdOrderId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dateFilterOptions = [
    { value: "all", label: "All" },
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "last7days", label: "Last 7 Days" },
    { value: "custom", label: "Custom Range" },
  ];

  const handleDateFilterChange = (value) => {
    setDateFilter(value);
    setShowDateDropdown(false);
    setShowCustomDatePicker(value === "custom");
    if (value !== "custom") {
      setCustomStartDate("");
      setCustomEndDate("");
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Signature Abondent Records
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View all your signature design orders and their current status
          </p>
        </div>

        {/* Search Bar and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, or order ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Date Filter Dropdown */}
            <div className="relative date-filter-dropdown">
              <button
                onClick={() => setShowDateDropdown(!showDateDropdown)}
                className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
              >
                <CalendarIcon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">
                  {dateFilterOptions.find(
                    (option) => option.value === dateFilter
                  )?.label}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showDateDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {dateFilterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleDateFilterChange(option.value)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        dateFilter === option.value
                          ? "bg-gray-100 text-gray-900 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Export CSV Button */}
            <button
              onClick={exportToCSV}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg hover:from-gray-900 hover:to-gray-800 focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all duration-200 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Custom Date Range Picker */}
          {showCustomDatePicker && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-800 to-black text-white">
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

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {filteredOrders.length}
                </p>
                <p className="text-sm text-gray-600">Total Orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹
                  {filteredOrders.reduce(
                    (sum, order) => sum + order.amount,
                    0
                  )}
                </p>
                <p className="text-sm text-gray-600">Total Revenue</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {new Set(filteredOrders.map((order) => order.email)).size}
                </p>
                <p className="text-sm text-gray-600">Unique Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbondentRecord5;
