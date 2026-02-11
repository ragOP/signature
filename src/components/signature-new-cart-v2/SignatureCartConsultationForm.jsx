import React, { useState } from "react";
import { User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";

// Reusable InputField component for clean, consistent styling
const InputField = ({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            rows={rows || 4}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 bg-white ${
              error ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white ${
              error ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

const SignatureCartConsultationForm = ({ onSubmit, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.profession.trim())
      newErrors.profession = "Profession is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      {/* Clean, focused header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Please provide your information for personalized signature design
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Single-column layout for all fields */}
        <InputField
          icon={User}
          label="Full Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Enter your full name"
          required
          error={errors.name}
        />

        <InputField
          icon={Mail}
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email address"
          error={errors.email}
        />

        <InputField
          icon={Phone}
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          placeholder="Enter your phone number"
          required
          error={errors.phoneNumber}
        />

        <InputField
          icon={Briefcase}
          label="Profession"
          value={formData.profession}
          onChange={(e) => handleInputChange("profession", e.target.value)}
          placeholder="Enter your profession"
          required
          error={errors.profession}
        />

        <InputField
          icon={MessageSquare}
          label="Special Remarks"
          type="textarea"
          value={formData.remarks}
          onChange={(e) => handleInputChange("remarks", e.target.value)}
          placeholder="Any specific requirements or remarks for your signature design..."
          rows={4}
        />

        {/* Submit button with yellowish theme */}
      </form>
    </div>
  );
};

export default SignatureCartConsultationForm;
