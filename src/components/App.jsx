import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Shop from 'Pages/Shop';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
