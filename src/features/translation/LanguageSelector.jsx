import { LANGUAGES } from './languages'

export default function LanguageSelector({ type, onChange, defaultLanguage }) {
    return (
        <div className='languageSelector'>
            <label>{type} </label>
            <select onChange={onChange} value={defaultLanguage}>
                {Object.entries(LANGUAGES).map(([key, value]) => {
                    return <option key={key} value={value}>{key}</option>
                })}
            </select>
        </div>
    )
}