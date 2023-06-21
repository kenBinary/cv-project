export default function PersonalDetailsInput({ onInputChange }) {
    return (
        <section className="details-input">
            <h3>Personal Details</h3>
            <input type="text" placeholder="Name" onChange={(event) => {
                onInputChange(event, 0);
            }}></input>
            <input type="text" placeholder="Title" onChange={(event) => {
                onInputChange(event, 1);
            }}></input>
            <input type="text" placeholder="Description" onChange={(event) => {
                onInputChange(event, 2);
            }}></input>
        </section>
    );
}
