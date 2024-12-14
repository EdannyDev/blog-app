import Navbar from '../components/navbar';

const MainLayout = ({ children, showNavbar }) => {
  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;