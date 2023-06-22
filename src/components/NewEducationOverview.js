export default function NewEducation({startDate, endDate, course, university, description }) {
    return (
        <div className="education-overview">
            <div className="education-year">{`${startDate}-${endDate}`}</div>
            <div className="education-place">{`${course} | ${university}`}</div>
            <div className="education-information">
                {description}
            </div>
        </div>
    );
}