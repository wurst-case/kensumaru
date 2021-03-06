import Footer from "../molecules/Footer";
import WebNav from "../molecules/NavBar";
import "./Layout.css";

const Layout = (props: any) => {
  return (
    <div className="layout">
      <WebNav />
      <div className="content-container">
        <div className="content">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
