import '../styles/globals.css';
import Header from '../components/Header';
import { SettingsProvider } from '../contexts/Settings/SettingsContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Header />
      <Component {...pageProps} />
    </SettingsProvider>
  );
}

// export async function getServerSideProps(context) {
//   const settingsResponse = await api.get('/settings');
//   const menuResponse = await api.get(
//     '/navigation/render/main-navigation?type=tree'
//   );

//   return {
//     props: {
//       settings: settingsResponse.data,
//       menu: menuResponse.data,
//     },
//   };
// }
