import Header from './Header';
import Footer from './Footer';

const Layout = ({ children } : any) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;