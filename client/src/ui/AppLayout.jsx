import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar.jsx';
function AppLayout() {
  return (
    <section className="container grid grid-cols-1 grid-rows-1 sm:grid-cols-[20%_80%]">
      <Sidebar />
      <section className="w-[100%] bg-white p-5">
        <div className="h-[100%] rounded-3xl bg-stone-200 p-10">
          <Outlet />
        </div>
      </section>
    </section>
  );
}
export default AppLayout;
