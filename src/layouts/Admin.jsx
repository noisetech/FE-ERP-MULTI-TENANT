
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import Foooter from "../components/admin/Footer";

export default function admin({ children }) {
  return (
   <div id="wrapper">
   <Sidebar></Sidebar>
  <div id="content-wrapper" className="d-flex flex-column">
  
    <div id="content">
   
      <Navbar></Navbar>
    </div>

    <Foooter></Foooter>
  </div>
</div>

    
  );
}
