import "../component/Header.css";
import Landing from "./Landing";

const Header = () => {
  const coin = require('../image/Group 496.png');

  return(
      <div>
        <div className="navbar">
          <img className="imgIcon" src={coin} alt="Coinshare"></img>
          <ul className>
            <li className="links"><a href="/">Home</a></li>
            <li className="links"><a href="/">Savings</a></li>
            <li className="links"><a href="/">Payment</a></li>
            <li className="links"><a href="/">Loan</a></li>
            <li className="links"><a href="/">How it works</a></li>
          </ul>
          <span className="getStarted"><a href="/register">Get Started</a></span>
          <span className="signIn"><a href="/">Sign in</a></span>
        </div>
        <Landing/>
      </div>
  );
};

export default Header;