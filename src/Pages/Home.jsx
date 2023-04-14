import HomeHero from 'components/Hero/HomeHero/HomeHero';
import Collections from 'components/HomePageMainContent/Collections/Collections';
import AboutService from 'components/HomePageMainContent/AboutService/AboutService';
export default function Home() {
  return (
    <main>
      <HomeHero />
      <Collections />
      <AboutService />
    </main>
  );
}
