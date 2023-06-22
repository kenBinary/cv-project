export default function SkillInput({ editSkill, deleteSkill, addSkill, skills }) {
    return (
        <section className="skill-input">
            <h3>Skills</h3>
            <button onClick={addSkill}>Add</button>
            <button onClick={deleteSkill}>Delete</button>
            {
                skills.map((element, index) => {
                    return <input key={element[0]} onChange={(event)=>{
                        editSkill(index,1,event)
                    }} type="text" placeholder="Skill"></input>
                })
            }
        </section>
    );

}