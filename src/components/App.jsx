import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Shop from 'Pages/Shop';
import About from 'Pages/About';
import Contacts from 'Pages/Contacts';
import StoreLocations from 'Pages/StoreLocations';
import Faq from 'Pages/Faq';
import Blog from 'Pages/Blog';
import AllPosts from './BlogPageContent/All/AllPosts';
import Company from './BlogPageContent/Company/Company';
import Fashion from './BlogPageContent/Fashion/Fashion';
import StylePosts from './BlogPageContent/StylePosts/StylePosts';
import Trends from './BlogPageContent/Trends/Trends';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store_locations" element={<StoreLocations />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="all" element={<AllPosts />} />
          <Route path="company" element={<Company />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="style" element={<StylePosts />} />
          <Route path="trends" element={<Trends />} />
        </Route>
      </Route>
    </Routes>
  );
};
