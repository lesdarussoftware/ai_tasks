export function Progress({ text, percentage }) {

    percentage = percentage ?? 0

    return (
        <div className="progres-container">
            <div style={{ 'width': `${percentage}%` }} className="progres-bar">
                {text} ({`${percentage.toFixed(2)}%`})
            </div>
        </div>
    )
}