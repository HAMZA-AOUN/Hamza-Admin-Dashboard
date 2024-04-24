import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Footer from "../ui/dashboard/footer/Footer";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar />
    </div>
    <div className={styles.content}>
      <Navbar />

      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
