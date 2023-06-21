export default function Name({ personalDetails }) {
    return (
        <section className="name-section">
            <h1>{(personalDetails[0])?personalDetails[0]:"Enter A Name"}</h1>
            <h3>{(personalDetails[1]) ? personalDetails[1] : "Enter Your Title"}</h3>
        </section>
    );
}