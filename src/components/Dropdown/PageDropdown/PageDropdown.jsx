import { Link } from 'react-router-dom';

export default function PageDropdown() {
  return (
    <div>
      <ul>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>
          <Link>Store Locator</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Coming Soon</Link>
        </li>
      </ul>
    </div>
  );
}
