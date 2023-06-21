import "../styles/section-style.css";
import Description from "./Description";
import Education from "./Education";
import Name from "./NameSection";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function CvPage({ personalDetails, workData }) {
    return (
        <main>
            <Name personalDetails={personalDetails}></Name>
            <Description personalDetails={personalDetails}></Description>
            <WorkExperience workData={workData}></WorkExperience>
            <Education></Education>
            <Skills></Skills>
        </main>
    );
}
export default CvPage;