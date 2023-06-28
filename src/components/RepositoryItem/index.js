import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const updatedRepoDetails = {
    name: repoDetails.name,
    issuesCount: repoDetails.issues_count,
    forksCount: repoDetails.forks_count,
    starsCount: repoDetails.stars_count,
    avatarUrl: repoDetails.avatar_url,
  }
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = updatedRepoDetails

  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-url" />
      <h1 className="name">{name}</h1>
      <div className="repo-item-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repo-details-img"
        />
        <p className="repo-details-text">{starsCount} stars</p>
      </div>
      <div className="repo-item-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repo-details-img"
        />
        <p className="repo-details-text">{forksCount} forks</p>
      </div>
      <div className="repo-item-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repo-details-img"
        />
        <p className="repo-details-text">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
