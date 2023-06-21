import WorkOverview from "./NewWorkOverview";
export default function WorkExperience({ workData }) {
    return (
        <section className="work-section">
            <h3>Work Experience</h3>
            {workData.map(element=>{
                return <WorkOverview key={element[0]} startDate={element[1]} endDate={element[2]} position={element[3]} company={element[4]} description={element[5]}></WorkOverview>
            })}
        </section>
    );
}