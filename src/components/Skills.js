export default function Skills({ skillsData }) {
    return (
        <section className="skills-section">
            <h3>Skills</h3>
            <ul>
                {
                    skillsData.map((element) => {
                        return <li key={element[0]}>{element[1]}</li>
                    })
                }
            </ul>
        </section>
    );

}