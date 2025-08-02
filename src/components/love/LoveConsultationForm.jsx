import React from 'react';
import { User, Mail, Phone, Calendar, MapPin, Venus, Clock } from 'lucide-react';

const LoveConsultationForm = ({ formData, setFormData, onSubmit }) => {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-rose-100 p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 love-font-merriweather mb-2">
          💫 Your Love Details
        </h3>
        <p className="text-gray-600 love-font-poppins">
          Help us create your personalized love report
        </p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <User className="w-4 h-4 inline mr-2 text-rose-500" />
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <Mail className="w-4 h-4 inline mr-2 text-rose-500" />
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <Phone className="w-4 h-4 inline mr-2 text-rose-500" />
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <Calendar className="w-4 h-4 inline mr-2 text-rose-500" />
              Date of Birth *
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              required
            />
          </div>

          {/* Place of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <MapPin className="w-4 h-4 inline mr-2 text-rose-500" />
              Place of Birth *
            </label>
            <input
              type="text"
              value={formData.placeOfBirth}
              onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              placeholder="Enter your birth place"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
              <Venus className="w-4 h-4 inline mr-2 text-rose-500" />
              Gender *
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Preferred Date/Time */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 love-font-poppins mb-2">
            <Clock className="w-4 h-4 inline mr-2 text-rose-500" />
            Preferred Delivery Date/Time
          </label>
          <input
            type="datetime-local"
            value={formData.preferredDateTime}
            onChange={(e) => handleInputChange('preferredDateTime', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent love-font-inter"
          />
        </div> */}

        {/* Note */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600 love-font-inter">
            💝 Your information is secure and will only be used for your personalized love report
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoveConsultationForm; 