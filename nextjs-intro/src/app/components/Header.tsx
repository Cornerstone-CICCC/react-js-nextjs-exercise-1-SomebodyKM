import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-300 p-3">
      <div className="logo">LOGO</div>

      <nav>
        <menu className="flex items-center gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
