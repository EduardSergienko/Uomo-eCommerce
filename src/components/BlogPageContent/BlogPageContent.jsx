import { NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
export default function BlogPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <h2>Blog</h2>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <NavLink to="all">ALL</NavLink>
        </li>
        <li>
          <NavLink to="company">COMPANY</NavLink>
        </li>
        <li>
          <NavLink to="fashion">FASHION</NavLink>
        </li>
        <li>
          <NavLink to="style">STYLE</NavLink>
        </li>
        <li>
          <NavLink to="trends">TRENDS</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
