import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import asiedImg from '../../assets/3d-illustration-smart-farming-concept_932730-391.avif';
function Home() {
  const navigate = useNavigate();
  function handelButton() {
    navigate('/auth/signup');
  }
  return (
    <>
      <section
        id="hero-section"
        className="flex h-screen w-[90%] items-center justify-between text-left"
      >
        {/* content */}
        <div className="mx-auto w-[100%] @lg:w-[70%] @4xl:w-[45%]">
          <h1 className="text-5xl font-bold @lg:text-7xl">
            Manage all your farms in one place
          </h1>
          <h1 className="my-7 text-xl text-stone-400">
            View plans, track progress, increase productivity and improve
            communication with Smart Farm
          </h1>
          <Button
            className="rounded-lg bg-[#c9fa75] text-xl text-black"
            color="black"
            backgroundcolor="#474055"
            onClick={handelButton}
          >
            Get Started for Free
          </Button>
        </div>
        {/* image */}
        <div className="hidden w-[45%] @4xl:block">
          <img
            src={asiedImg}
            alt="aside image "
            className="rounded-2xl opacity-70"
          />
        </div>
      </section>
    </>
  );
}
export default Home;
