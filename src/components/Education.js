import NewEducation from "./NewEducationOverview";
export default function Education({educationData}) {
    return (
        <section className="education-section">
            <h3>Education</h3>
            {educationData.map(element=>{
                return <NewEducation key={element[0]} startDate={element[1]} endDate={element[2]} course={element[3]} university={element[4]} description={element[5]}></NewEducation>
            })}
        </section>
    );
}