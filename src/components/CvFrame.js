import Description from "./Description";
import Education from "./Education";
import Name from "./NameSection";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function CvPage() {
    return (
        <main>
            <Name></Name>
            <Description></Description>
            <WorkExperience></WorkExperience>
            <Education></Education>
            <Skills></Skills>
        </main>
    );
}
export default CvPage;