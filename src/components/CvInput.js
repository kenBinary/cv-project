import PersonalDetailsInput from "./PersonalDetails";
import WorkInput from "./WorkInputs";
import EducationInput from "./EducationInput";
import SkillInput from "./SkillInput";
export default function CvInput({editEducation,deleteEducation,educationData,addEducation, deleteWorkData, onInputChange, addData, workData, onWorkDataChange }) {
    return (
        <main>
            <PersonalDetailsInput onInputChange={onInputChange}></PersonalDetailsInput>
            <WorkInput deleteWorkData={deleteWorkData} addData={addData} workData={workData} onWorkDataChange={onWorkDataChange}></WorkInput>
            <EducationInput deleteWorkData={deleteEducation} addData={addEducation} workData={educationData} onWorkDataChange={editEducation}></EducationInput>
            <SkillInput></SkillInput>
        </main>
    );
}