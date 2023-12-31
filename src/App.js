import "./styles/page-style.css";
import CvPage from "./components/CvPage";
import CvInput from "./components/CvInput";
import { useState } from "react";
import uniqid from 'uniqid';
function App() {
  const [personalDetails, setPersonlDetails] = useState(["", "", ""]);
  const [workData, setWorkData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [skills, setSkills] = useState([]);
  function addNewWork() {
    let newId = uniqid();
    let newData = new Array(6).fill("");
    newData[0] = newId;
    let newWorkData = [...workData, newData];
    setWorkData(newWorkData);
  }
  function editWorkData(dataSet, dataIndex, event) {
    let newData = Array.from(workData);
    let newValue = event.target.value;
    newData[dataSet][dataIndex] = newValue;
    setWorkData(newData);
  }
  function deleteWorkData() {
    let newData = Array.from(workData);
    newData.pop();
    setWorkData(newData)
  }
  function addNewEducation() {
    let newId = uniqid();
    let newData = new Array(6).fill("");
    newData[0] = newId;
    let newEducationData = [...educationData, newData];
    setEducationData(newEducationData);
  }
  function editEducationData(dataSet, dataIndex, event) {
    let newData = Array.from(educationData);
    let newValue = event.target.value;
    newData[dataSet][dataIndex] = newValue;
    setEducationData(newData);
  }
  function deleteEducationData() {
    let newData = Array.from(educationData);
    newData.pop();
    setEducationData(newData)
  }
  function changePersonalDetails(event, detail) {
    let newDetail = Array.from(personalDetails);
    newDetail[detail] = event.target.value;
    setPersonlDetails(newDetail)
  }
  function addSkill() {
    let newId = uniqid();
    let newSkills = [...skills, [newId, ""]];
    setSkills(newSkills);
  }
  function editSkill(dataSet, dataIndex, event) {
    let newData = Array.from(skills);
    let newValue = event.target.value;
    newData[dataSet][dataIndex] = newValue;
    setSkills(newData);
  }
  function deleteSkill() {
    let newSkills = Array.from(skills);
    newSkills.pop();
    setSkills(newSkills);
  }

  return (
    <>
      <CvInput editSkill={editSkill} deleteSkill={deleteSkill} addSkill={addSkill} skills={skills} editEducation={editEducationData} deleteEducation={deleteEducationData} educationData={educationData} addEducation={addNewEducation} deleteWorkData={deleteWorkData} onInputChange={changePersonalDetails} onWorkDataChange={editWorkData} addData={addNewWork} workData={workData}></CvInput>
      <CvPage skillsData={skills} educationData={educationData} personalDetails={personalDetails} workData={workData}></CvPage>
    </>
  );
}

export default App;
