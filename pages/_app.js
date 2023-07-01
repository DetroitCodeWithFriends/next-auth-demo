import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import SignIn from '../components/SignIn';

function MyApp({ pageProps }) {
  return (
    <SessionProvider session={pageProps['session']}>
      <SignIn {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
