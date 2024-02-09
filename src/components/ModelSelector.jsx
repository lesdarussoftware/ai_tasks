export function ModelSelector({ setModel, options }) {
    return (
        <div className="modelSelector">
            <label htmlFor="model">Modelo a utilizar</label>
            <select name="model" onChange={e => setModel(e.target.value)}>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    )
}