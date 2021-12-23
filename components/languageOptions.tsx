import { NextPage } from 'next'
import Row from './Row'
import texts from '../utils/languages.json'
interface Props {
  language: string
  setLanguage: (language: string) => void
}

const LanguageOptions: NextPage<Props> = ({ language, setLanguage }) => {
  const presentLanguages = [...Object.keys(texts)]
  const index = presentLanguages.indexOf(language)
  if (index > -1) {
    presentLanguages.splice(index, 1)
  }
  return (
    <Row className={'info-text'}>
      {presentLanguages.map((lang) => (
        <div
          className="link link-text"
          style={{ marginRight: '2em' }}
          key={lang}
          onClick={() => {
            setLanguage(lang)
          }}
        >
          <span>{texts[lang]['title']}</span>
        </div>
      ))}
    </Row>
  )
}

export default LanguageOptions
