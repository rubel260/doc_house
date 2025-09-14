import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="text-center">
        {/* Illustration */}
        <div className="relative w-full flex justify-center">
          <h1 className="text-[8rem] font-extrabold text-primary/30 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-base-100 p-4 rounded-full shadow-md">
              <span className="text-4xl">🤔</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-2xl font-bold text-base-content">Sorry,</h2>
        <p className="text-base text-base-content/70">
          This page is not found.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link to="/" className="btn btn-primary rounded-md px-6">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;