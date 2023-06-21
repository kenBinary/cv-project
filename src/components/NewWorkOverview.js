export default function WorkOverview({startDate, endDate, position, company, description }) {
    return (
        <div className="work-overview">
            <div className="work-year">{`${startDate}-${endDate}`}</div>
            <div className="work-place">{`${position} | ${company}`}</div>
            <div className="work-information">
                {description}
            </div>
        </div>
    );
}