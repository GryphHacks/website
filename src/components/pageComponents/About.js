import TeamMemberList from "../GeneralComponents/TeamMemberList";
import SocialBar from "../GeneralComponents/SocialBar"
import TeamInfo from "../GeneralComponents/TeamInfo";
import members from "../../data/team.json";
import '../pageComponents/PageComponentsCSS/about.css'
const About = () => {
    return (
        <div>
            <div id= "mainContainer">
             <div id = "container">
            <TeamInfo/>
            <br/>
            <h1 id = "title">MEET OUR TEAM</h1>
            <br/>
            <TeamMemberList data = {members}/>
            <br/>
            {/* <SocialBar/> */}
            </div>
        </div>
        </div>
    )
}

export default About;
