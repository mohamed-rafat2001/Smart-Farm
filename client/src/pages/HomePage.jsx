import Footer from '../ui/Footer';
import Header from '../ui/Header';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-0 grid grid-rows-[auto_auto_auto]">
        {/* section container */}

        <div className="@container mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default HomePage;
