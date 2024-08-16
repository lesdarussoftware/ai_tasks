import { Progress } from "./Progress";

export function Loader({ ready, progressItems }) {
    return (
        <div className="loader-container">
            {ready === false &&
                <p>Descargando archivos del modelo...</p>
            }
            {progressItems.map(data => (
                <div key={data.file}>
                    <Progress text={data.file} percentage={data.progress} />
                </div>
            ))}
        </div>
    )
}