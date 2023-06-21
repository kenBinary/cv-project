export default function Description({ personalDetails }) {
    return (
        <section>
            <h3>Professional Profile</h3>
            <p>
                {(personalDetails[2]) ? personalDetails[2] : "Enter A Description"}
            </p>
        </section>
    );
}