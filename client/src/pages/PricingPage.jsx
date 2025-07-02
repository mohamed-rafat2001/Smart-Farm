// import { NavLink } from 'react-router-dom';
// import PricingCard from '../features/Home/PricingCard';

import { useState } from 'react';
import PricingCard from '../features/Home/PricingCard';
import PricingMonthly from '../features/Home/PricingMonthly';
import PricingYearly from '../features/Home/PricingYearly';

function PricingPage() {
  const [active, setActive] = useState('monthly');
  return (
    <>
      {/* pricing welcome section */}
      <section id="pricing-welcome-section">
        {/* content */}
        <div className="flex flex-col items-center justify-center pt-20 text-center">
          <div className="w-[60%]">
            <h1 className="mb-5 text-5xl font-extrabold">
              Deliver successful projects every time
            </h1>
            <h2 className="py-5 font-bold text-stone-300">
              Our plans are tailored to a wide range of teams, from small
              start-up farms to large-scale farms.
            </h2>
          </div>
          {/* buttons */}
          <div className="mt-20 space-x-5 text-2xl font-bold text-black">
            <button
              className={`cursor-pointer rounded-t-lg px-15 py-5 ${active === 'monthly' ? 'bg-[#f0f0f0]' : 'bg-[#cfb8ff]'}`}
              onClick={() => {
                setActive('monthly');
              }}
            >
              Monthly
            </button>
            <button
              className={`cursor-pointer rounded-t-lg bg-[#cfb8ff] px-15 py-5 ${active === 'yearly' ? 'bg-[#f0f0f0]' : 'bg-[#cfb8ff]'}`}
              onClick={() => {
                setActive('yearly');
              }}
            >
              Yearly
            </button>
          </div>
        </div>
      </section>
      <section id="pricing-section" className="h-auto bg-[#f0f0f0]">
        {/* content */}
        <div className="mx-auto grid w-[90%] grid-cols-1 grid-rows-1 gap-x-10 py-20 text-black @2xl:grid-cols-2 @5xl:grid-cols-3">
          {active == 'monthly' ? <PricingMonthly /> : <PricingYearly />}
        </div>
      </section>
    </>
  );
}
export default PricingPage;
