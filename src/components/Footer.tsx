type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">Safety Tips</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Popular Searches</h3>
        <ul>
          <li><a href="#">Babysitters in NYC</a></li>
          <li><a href="#">Nannies in LA</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}
