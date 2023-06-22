import NewData from "./NewData";
export default function WorkInput({ deleteWorkData, addData, workData, onWorkDataChange }) {
    let workPlaceHolder = ["Position", "Company Name"];
    return (
        <section className="work-input">
            <h3>Work Experience</h3>
            <button onClick={addData}>Add</button>
            <button onClick={deleteWorkData}>Delete</button>
            {workData.map((element, index) => {
                return <NewData placeholder={workPlaceHolder} key={element[0]} dataIndex={index} onWorkDataChange={onWorkDataChange}></NewData>
            })}
        </section>
    );
}