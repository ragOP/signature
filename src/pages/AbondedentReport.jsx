import React, { useState, useEffect, useMemo } from 'react';
import { Search, Download } from 'lucide-react';
import SignatureNavbar from '../components/signature/SignatureNavbar';
import { BACKEND_URL } from '../utils/backendUrl';

const SignatureAbondentReport = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander4/get-orders-abd`);
      const result = await response.json();

      if (result.success) {
        setOrders(result.data || []);
      } else {
        setError('Failed to fetch signature orders');
      }
    } catch (err) {
      setError('Error fetching signature orders: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return '';
    return new Date(dateTimeString).toLocaleString();
  };

  // ✅ Filtered orders (memoized)
  const filteredOrders = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return orders;

    return orders.filter((order) => {
      const name = (order.fullName || '').toLowerCase();
      const email = (order.email || '').toLowerCase();
      const orderId = (order.abdOrderId || order.orderId || '').toLowerCase();
      return name.includes(term) || email.includes(term) || orderId.includes(term);
    });
  }, [orders, searchTerm]);

  // ✅ CSV helpers
  const csvEscape = (value) => {
    if (value === null || value === undefined) return '';
    const str = String(value);
    // wrap in quotes if contains comma, quote or newline
    if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
    return str;
  };

  const buildCSV = (rows) => {
    const headers = [
      'Order ID',
      'Name',
      'Email',
      'Phone',
      'Profession',
      'Remarks',
      'Additional Products',
      'Amount',
      'Order Date',
    ];

    const lines = [];
    lines.push(headers.map(csvEscape).join(','));

    rows.forEach((order) => {
      const additionalProducts = Array.isArray(order.additionalProducts) && order.additionalProducts.length
        ? order.additionalProducts.join(' | ')
        : 'Signature Design';

      const row = [
        order.abdOrderId || order.orderId || '',
        order.fullName || '',
        order.email || '',
        order.phoneNumber || '',
        order.profession || '',
        order.remarks || '',
        additionalProducts,
        order.amount ?? '',
        formatDateTime(order.orderDate),
      ];

      lines.push(row.map(csvEscape).join(','));
    });

    return lines.join('\n');
  };

  const downloadCSV = () => {
    const csv = buildCSV(filteredOrders);

    // filename with date/time
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const fileName = `signature-abandoned-orders-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
      now.getDate()
    )}-${pad(now.getHours())}${pad(now.getMinutes())}.csv`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <SignatureNavbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
            <p className="text-gray-600 font-primary">Loading your signature design records...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <SignatureNavbar />
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
      <SignatureNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Signature Design Records</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">View all your signature design orders and their current status</p>
        </div>

        {/* Search + Export */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="w-full md:max-w-md">
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

          {/* Export Button */}
          <button
            onClick={downloadCSV}
            disabled={filteredOrders.length === 0}
            className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm
              ${
                filteredOrders.length === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-black'
              }`}
            title={filteredOrders.length === 0 ? 'No data to export' : 'Export filtered results to CSV'}
          >
            <Download className="w-5 h-5" />
            Export CSV ({filteredOrders.length})
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-800 to-black text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Profession</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Additional Products</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Order Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order._id}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-mono text-gray-800">{order.abdOrderId}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{order.fullName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.phoneNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.profession}</td>

                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs" title={order.remarks}>
                      <div className="w-64">{order.remarks || 'No remarks'}</div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.additionalProducts ? (
                        <div className="space-y-1 w-[7vw]">
                          {order.additionalProducts.map((product, idx) => (
                            <div key={idx} className="leading-tight">
                              <div className="text-gray-800">{product}</div>
                              <div className="text-xs font-semibold text-gray-700">₹299</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        'Signature Design'
                      )}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{order.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDateTime(order.orderDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✍️</div>
              <p className="text-gray-500">
                {searchTerm ? 'No orders found matching your search.' : 'No signature design orders found.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignatureAbondentReport;
