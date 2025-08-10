import React from "react";

export default function PolicyPage() {
  const sections = [
    {
      title: "Delivery Policy",
      points: [
        "Processing Time: All orders are processed after payment confirmation.",
        "Delivery Method: Your custom digital product will be delivered to the email address provided at checkout.",
        "Delivery Time: Orders are typically delivered within 24–48 hours.",
        "Non-Delivery: If you do not receive your product within 48 hours, please contact us immediately at support@thesignaturestudio.in with your order number so we can resolve the issue promptly."
      ]
    },
    {
      title: "Refund Policy",
      points: [
        "All Sales Final: As this is a custom-made digital product, all sales are final once the product has been delivered.",
        "Refund Exceptions: Refunds will only be issued if:",
        "• We fail to deliver your order within 48 hours of purchase.",
        "• There is a proven technical issue or defect in the delivered file.",
        "Refund Timeline: Approved refunds will be processed within 5–7 business days via your original payment method."
      ]
    },
    {
      title: "Revision Policy",
      points: ["Extra changes will be charged at ₹500 per revision."]
    },
    {
      title: "Cancellation Policy",
      points: ["Cancellations are not possible once we have started creating your custom product."]
    },
    {
      title: "Privacy Policy",
      points: [
        "Data Collection: We only collect the personal details necessary to create and deliver your order.",
        "Confidentiality: All personal information (names, dates, details) provided for your product remains strictly confidential.",
        "Security: Your data is stored securely and will never be sold or shared with any third party."
      ]
    },
    {
      title: "Terms & Conditions",
      points: [
        "For Personal Use Only: This product is for personal use and may not be resold, redistributed, or used commercially.",
        "Delivery Commitment: While we aim to deliver all orders within 24–48 hours, delays may occur due to high demand or unforeseen circumstances.",
        "File Format: Products are delivered in [JPEG/PNG/PDF] format unless otherwise specified at the time of order."
      ]
    },
    {
      title: "Support Policy",
      points: [
        "Email Support: support@thesignaturestudio.in",
        "Working Hours: Monday–Saturday, 10:00 AM – 6:00 PM (IST)",
        "Response Time: We respond to all inquiries within 24 hours. Urgent issues are prioritised."
      ]
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen py-12 px-6 sm:px-16">
      <div className="max-w-5xl mx-auto border border-gray-300 shadow-md rounded-xl p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Policies & Terms
        </h1>

        {sections.map((section, idx) => (
          <div
            key={idx}
            className="mb-8 border-b border-gray-200 pb-5 last:border-none"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} The Signature Studio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
