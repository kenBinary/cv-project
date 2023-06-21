import "./styles/page-style.css";
import CvPage from "./components/CvPage";
import CvInput from "./components/CvInput";
import { useState } from "react";
import uniqid from 'uniqid';
function App() {
  const [personalDetails, setPersonlDetails] = useState(["", "", ""]);
  const [workData, setWorkData] = useState([]);
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
  function changePersonalDetails(event, detail) {
    let newDetail = Array.from(personalDetails);
    newDetail[detail] = event.target.value;
    setPersonlDetails(newDetail)
  }
  return (
    <>
      <CvInput deleteWorkData={deleteWorkData} onInputChange={changePersonalDetails} onWorkDataChange={editWorkData} addData={addNewWork} workData={workData}></CvInput>
      <CvPage personalDetails={personalDetails} workData={workData}></CvPage>
    </>
  );
}

export default App;
