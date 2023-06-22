import NewData from "./NewData";
export default function EducationInput({ deleteWorkData, addData, workData, onWorkDataChange }) {
    let educationPlaceHolder = ["Course", "University"];
    return (
        <section className="education-input">
            <h3>Education</h3>
            <button onClick={addData}>Add</button>
            <button onClick={deleteWorkData}>Delete</button>
            {workData.map((element, index) => {
                return <NewData placeholder={educationPlaceHolder} key={element[0]} dataIndex={index} onWorkDataChange={onWorkDataChange}></NewData>
            })}
        </section>
    );

}