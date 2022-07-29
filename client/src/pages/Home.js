import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
   return (
      <div className="container-fluid">
         <div className="row">
            <Navbar />
         </div>
         
         <div className="row">
            <Footer />
         </div>
      </div>
   );
}
 
export default Home;