import Nav from "./nav"
import Footer from './Footer'

const Layout = ({ children, seo, hideNav }) => (
  <>
    <Nav hidden={hideNav} />
    {children}
    <Footer />
  </>
)

export default Layout
