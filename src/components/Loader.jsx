import { Progress } from "./Progress";

export function Loader({ ready, progressItems }) {
    return (
        <div className="loaderContainer">
            {ready === false && (
                <label>Cargando archivos del modelo... (por única vez)</label>
            )}
            {progressItems.map(data => (
                <div key={data.file}>
                    <Progress text={data.file} percentage={data.progress} />
                </div>
            ))}
        </div>
    )
}