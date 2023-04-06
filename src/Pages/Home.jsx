import Hero from 'components/Hero/Hero';
import Collections from 'components/HomePageMainContent/Collections/Collections';
import AboutService from 'components/HomePageMainContent/AboutService/AboutService';
export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <AboutService />
    </main>
  );
}
