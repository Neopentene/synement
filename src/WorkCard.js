import "./styles/WorkCard.css"

const WorkCard = ({ data }) => {
    const title = data.subject;
    const subtitle = data.date_due;
    const type = getParsedWorkType(data.type);

    return (
        <div className="wrapper">
            <div className={"indicator " + type}></div>
            <div className="details">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
        </div>
    );
}

function getParsedWorkType(type) {
    switch (type) {
        case "Assignment":
            return "assignment";
        case "Experiment":
            return "experiment";
        default:
            return "other";
    }
}

export default WorkCard;