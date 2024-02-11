import { Progress } from "./Progress";

export function Loader({ ready, progressItems }) {
    return (
        <div className="loaderContainer">
            {ready === false && (
                <>
                    <label>Descargando archivos del modelo...</label>
                    <label>(por única vez mientras permanezcas en esta página)</label>
                </>
            )}
            {progressItems.map(data => (
                <div key={data.file}>
                    <Progress text={data.file} percentage={data.progress} />
                </div>
            ))}
        </div>
    )
}