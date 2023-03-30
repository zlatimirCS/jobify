import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby forage big mood four loko jean shorts mlkshk sustainable
            hella tilde yuccie aesthetic PBR&B pug freegan truffaut. Disrupt
            activated charcoal banh mi meggings meditation fam, ramps kinfolk
            tumeric 3 wolf moon PBR&B copper mug pug. Asymmetrical disrupt
            chambray cliche mumblecore poutine glossier skateboard woke, four
            loko adaptogen raw denim fit raclette. Swag beard disrupt pour-over
            +1 fixie retro woke cray banh mi edison bulb butcher subway tile
            tonx.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
