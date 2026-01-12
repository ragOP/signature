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
  name,
  autoComplete,
}) => {
  const base =
    "w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200 " +
    "bg-white text-gray-900 placeholder:text-gray-400 caret-amber-600 " +
    "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const err = error ? "border-red-300 bg-red-50" : "border-gray-300";

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
            name={name}
            value={value}
            onChange={onChange}
            rows={rows || 4}
            className={`${base} ${err} resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={`${base} ${err}`}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
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
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Full Name is required";
    if (!formData.phoneNumber?.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.profession?.trim())
      newErrors.profession = "Profession is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative z-[2]">
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
        <InputField
          icon={User}
          label="Full Name"
          name="fullName"
          autoComplete="name"
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
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email address"
          error={errors.email}
        />

        <InputField
          icon={Phone}
          label="Phone Number"
          type="tel"
          name="phone"
          autoComplete="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          placeholder="Enter your phone number"
          required
          error={errors.phoneNumber}
        />

        <InputField
          icon={Briefcase}
          label="Profession"
          name="profession"
          autoComplete="organization-title"
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
          name="remarks"
          value={formData.remarks}
          onChange={(e) => handleInputChange("remarks", e.target.value)}
          placeholder="Any specific requirements or remarks for your signature design..."
          rows={4}
        />
      </form>
    </div>
  );
};

export default SignatureCartConsultationForm;
