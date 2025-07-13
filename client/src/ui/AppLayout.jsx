import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar.jsx';
function AppLayout() {
  const pageName = useLocation().pathname.split('/')[2];
  console.log();
  return (
    <div className="@container">
      <div className="grid grid-cols-1 @sm:grid-cols-[25%_75%]">
        <Sidebar />
        <section className="w-[100%]">
          <h1 className="mx-5 border-b-1 border-stone-700 py-5 text-4xl font-extrabold tracking-widest capitalize">
            {pageName}
          </h1>
          <div className="@container h-[100%] px-5 pt-5">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
}
export default AppLayout;
