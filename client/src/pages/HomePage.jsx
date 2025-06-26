import Footer from '../ui/Footer';
import Header from '../ui/Header';
import AboutPage from '../features/Home/About';
import ContactWithUs from '../features/Home/ContactWithUs';
import asiedImg from '../assets/3d-illustration-smart-farming-concept_932730-391.avif';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  function handelButton() {
    navigate('/signup');
  }
  return (
    <div className="@container">
      <Header />
      <main className="mt-0 grid grid-rows-[auto_auto_auto]">
        {/* hero section */}
        <section id="hero-section">
          {/* hero container */}
          <div className="@container mx-auto flex h-screen w-[90%] items-center justify-between">
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
            <div className="hidden @4xl:block">
              <img
                src={asiedImg}
                alt="aside image "
                className="rounded-2xl opacity-70"
              />
            </div>
          </div>
        </section>
        <section id="about" className="h-[1500px]">
          <AboutPage />
        </section>
        <section id="contact">
          <ContactWithUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
