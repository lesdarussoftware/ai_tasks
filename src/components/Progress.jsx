export function Progress({ text, percentage }) {

    percentage = percentage ?? 0

    return (
        <div className="progressContainer">
            <div style={{ 'width': `${percentage}%` }} className="progressBar">
                {text} ({`${percentage.toFixed(2)}%`})
            </div>
        </div>
    )
}