export function InputAndOutputTextarea({ handleSubmit, input, setInput, disabled, submitValue, output }) {
    return (
        <div className="doubleTextareaSectionContainer">
            <div className="doubleTextareaSection">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ingrese aquí el texto...">
                    </textarea>
                    <input type="submit" value={submitValue} disabled={disabled} />
                </form>
            </div>
            <div className="doubleTextareaSection">
                <textarea placeholder="Resultado" value={output} readOnly></textarea>
            </div>
        </div>
    )
}