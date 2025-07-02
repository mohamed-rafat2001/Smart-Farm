import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

function PricingCard({ title, description, price, includes }) {
  const navigate = useNavigate();
  function handelButton() {
    navigate('/signup');
  }

  return (
    <div className="mx-auto my-5 rounded-xl bg-white p-10 @3xs:max-w-md @2xl:w-auto">
      {/* header */}
      <div className="border-b-1 border-b-gray-300 text-center">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h1 className="py-5">{description}</h1>
        <h1 className="mb-5 text-6xl font-bold">{price}</h1>
      </div>
      {/* content */}
      <div className="h-[400px] py-10">
        <h1 className="font-bold tracking-widest uppercase">
          What’s Included?
        </h1>

        {includes.map((item, index) => (
          <div key={index} className="my-5 flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 rounded-full bg-black p-1"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Button
          className="w-[100%] rounded-lg bg-[#c9fa75] text-xl text-black"
          color="black"
          backgroundcolor="#cfb8ff"
          onClick={handelButton}
        >
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
export default PricingCard;
