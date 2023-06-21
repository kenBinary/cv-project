import PersonalDetailsInput from "./PersonalDetails";
import WorkInput from "./WorkInputs";
import EducationInput from "./EducationInput";
import SkillInput from "./SkillInput";
export default function CvInput() {
    return (
        <main>
            <PersonalDetailsInput></PersonalDetailsInput>
            <WorkInput></WorkInput>
            <EducationInput></EducationInput>
            <SkillInput></SkillInput>
        </main>
    );
}