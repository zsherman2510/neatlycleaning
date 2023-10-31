type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header-nav">
      <div className="nav-left">
        <a href="/" className="logo">neatly</a>
        {/* <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
      </div>
      <div className="nav-right">
        {/* <a href="/login">Login</a>
        <a href="/signup">Sign Up</a> */}
      </div>
    </div>
  );
}
