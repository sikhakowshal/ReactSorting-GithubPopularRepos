import './index.css'

const LanguageFilterItem = props => {
  const {languageItemDetails, updateActiveLanguageId, activeLanguageId} = props
  const {id, language} = languageItemDetails

  const onClickLanguageItem = () => {
    updateActiveLanguageId(id)
  }

  const activeBtn = activeLanguageId === id ? 'active' : ''

  return (
    <button
      type="button"
      className={`language-item-btn ${activeBtn}`}
      onClick={onClickLanguageItem}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
