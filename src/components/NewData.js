export default function NewData({ dataIndex, onWorkDataChange }) {
    return (
        <div>
            <input type="text" placeholder="Start Date" onChange={(event) => {
                onWorkDataChange(dataIndex, 1, event);
            }}></input>
            <input type="text" placeholder="End Date" onChange={(event) => {
                onWorkDataChange(dataIndex, 2, event);
            }}></input>
            <input type="text" placeholder="Position" onChange={(event) => {
                onWorkDataChange(dataIndex, 3, event);
            }}></input>
            <input type="text" placeholder="Company Name" onChange={(event) => {
                onWorkDataChange(dataIndex, 4, event);
            }}></input>
            <input type="text" placeholder="Description" onChange={(event) => {
                onWorkDataChange(dataIndex, 5, event);
            }}></input>
        </div>
    );
}