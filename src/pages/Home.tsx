import { Link } from "react-router-dom";

import "./Home.css";
import iconJeans from "../assets/icon-jeans.jpeg";
import iconShirts from "../assets/icon-shirts.jpeg";
import iconShoes from "../assets/image-product-1.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Link to="/productPage">
          <img
            src={iconJeans}
            alt="calças jeans empilhadas"
            className="iconJeans"
            //onClick={() => setImgValue(1)}
          />
        </Link>
      </div>

      <div>
        <Link to="/productPage">
          <img
            src={iconShirts}
            alt="camisetas empilhadas"
            className="iconShirts"
          />
        </Link>
      </div>
      <div>
        <Link to="/productPage">
          <img
            src={iconShoes}
            alt="par de sapatos da nova coleção"
            className="iconShoes"
          />
        </Link>
      </div>
    </div>
  );
};
export default Home;
