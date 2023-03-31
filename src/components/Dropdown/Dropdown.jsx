import PageDropdown from './PageDropdown/PageDropdown';
import BlogDropdown from './BlogDropdown/BlogDropdown';
export default function DropDown({ dropMenu, onMouseEnter }) {
  return (
    <div
      // onMouseLeave={() => onMouseEnter(false)}
      // onMouseEnter={() => onMouseEnter(true)}
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        paddingTop: 30,
      }}
    >
      {dropMenu === 'pages' && <PageDropdown />}
      {dropMenu === 'blog' && <BlogDropdown />}
    </div>
  );
}
