import MainLayout from '../frontend/components/layout';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  const noNavbarRoutes = ['/login', '/register'];
  const showNavbar = !noNavbarRoutes.includes(router.pathname) && router.pathname !== '/';

  return (
    <MainLayout showNavbar={showNavbar}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;