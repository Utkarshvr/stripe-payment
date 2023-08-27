// CancelPage.js
import Link from "next/link";
import React from "react";
export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Payment Cancelled
        </h2>
        <p className="text-gray-600">
          Your payment was not completed. You can continue shopping or try
          again.
        </p>
        <Link href="/" className="block mt-6 text-blue-500 hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
