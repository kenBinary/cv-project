import "../styles/section-style.css";
import Description from "./Description";
import Education from "./Education";
import Name from "./NameSection";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function CvPage({ skillsData, personalDetails, workData, educationData }) {
    return (
        <main>
            <Name personalDetails={personalDetails}></Name>
            <Description personalDetails={personalDetails}></Description>
            <WorkExperience workData={workData}></WorkExperience>
            <Education educationData={educationData}></Education>
            <Skills skillsData={skillsData}></Skills>
        </main>
    );
}
export default CvPage;