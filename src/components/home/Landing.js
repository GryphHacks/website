import Countdown from "./Countdown";
import Judges from "./Judges"
import Speakers from "./Speakers"
import LogoShowcase from "./LogoShowcase"
import SponsorCarousel from "./SponsorCarousel";
import RegisterSection from "./RegisterSection";
import SponsorLanding from "./SponsorLanding";
import './stylesheet/landing.css'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div className="landing-background">
        <div className="landing-wrapper">
          <div className="splash-title">
            <h1 style={{color : 'var(--gryphyellow)'}}>&lt; Gryph</h1> 
            <h1 style={{color : 'var(--rubyred)'}}>Hacks /&gt;</h1>
          </div>
          <div className = "info-div">
            <h3 className = "info-text">March 11-12,2022</h3>
            <h3 className = "separator">&nbsp;|&nbsp;</h3>
            <h3 className = "info-text">Virtual Hackathon</h3>
          </div>
          <Countdown/>
          <RegisterSection/>
        </div>
      </div>
      <br/><br/><br/>
      <SponsorLanding title = "Sponsor Us" info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <br/><br/><br/>
      <SponsorCarousel/>
      <br/><br/><br/>
      <LogoShowcase/>
      <br/>  
      <Judges/>
      <br/>
      <Speakers/>
      <br/>
    </div>
  );
};

export default Landing;
