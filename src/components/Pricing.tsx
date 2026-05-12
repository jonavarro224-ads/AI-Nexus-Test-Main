import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for small teams</p>
            <div className="text-5xl font-bold text-indigo-600 mb-6">$29<span className="text-xl text-gray-500">/month</span></div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>&#10003; 5 Projects</li>
              <li>&#10003; 10 GB Storage</li>
              <li>&#10003; Basic Support</li>
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-indigo-600">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="text-5xl font-bold text-indigo-600 mb-6">$59<span className="text-xl text-gray-500">/month</span></div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>&#10003; 20 Projects</li>
              <li>&#10003; 50 GB Storage</li>
              <li>&#10003; Priority Support</li>
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Get Started</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">Advanced features for large scale</p>
            <div className="text-5xl font-bold text-indigo-600 mb-6">$99<span className="text-xl text-gray-500">/month</span></div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>&#10003; Unlimited Projects</li>
              <li>&#10003; 200 GB Storage</li>
              <li>&#10003; 24/7 Dedicated Support</li>
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
