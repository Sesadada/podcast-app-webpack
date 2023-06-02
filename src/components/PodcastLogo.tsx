import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { selectedEp } from '../store/atoms'

interface PodcastLogoProps {
  res: {
    results: {
      artworkUrl600: string
      collectionName: string
      artistName: string
    }[]
  }
  id?: string
}

const PodcastLogo: React.FC<PodcastLogoProps> = ({ res, id }) => {
  const currentPodcast =
    JSON.parse(localStorage.getItem('selectedPodcast') ?? 'null') ?? ''
  const [, setSelectedEpisode] = useRecoilState(selectedEp)
  console.log(currentPodcast)
  return (
    <div className="podcast-logo" onClick={() => setSelectedEpisode(null)}>
      <Link
        to={`/podcast/${id}`}
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={res.results[0].artworkUrl600}
          alt="Podcast Artwork"
          className="podcast-logo-img"
        />
        <div className="podcast-info">
          <h2>{res.results[0].collectionName}</h2>
          <p>by {res.results[0].artistName}</p>
          <p className="description-heading">Description:</p>
          <p className="description-text">{currentPodcast.summary.label}</p>
        </div>
      </Link>
    </div>
  )
}

export default PodcastLogo
