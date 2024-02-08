import { LANGUAGES, LABELS } from './languages'

export default function LanguageSelector({ type, onChange, defaultLanguage }) {
    return (
        <div className='languageSelector'>
            <label>{type} </label>
            <select onChange={onChange} value={defaultLanguage}>
                {Object.entries(LANGUAGES)
                    .sort((a, b) => {
                        if (LABELS[a[0]].charAt(0).replace('Á', 'A') > LABELS[b[0]].charAt(0).replace('Á', 'A')) return 1
                        if (LABELS[a[0]].charAt(0).replace('Á', 'A') < LABELS[b[0]].charAt(0).replace('Á', 'A')) return -1
                        return 0
                    })
                    .map(([key, value]) => {
                        return <option key={key} value={value}>{LABELS[key]}</option>
                    })}
            </select>
        </div>
    )
}