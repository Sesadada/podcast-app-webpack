import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedEp } from '../store/atoms'

const PodcastDetail: React.FC = () => {
  const episode = useRecoilValue(selectedEp)

  useEffect(() => {
    localStorage.setItem('episode', JSON.stringify(episode.trackId))
  }, [])

  return (
    <div className="podcast-detail">
      <h1>{episode.trackName}</h1>
      <p>{episode.description}</p>
      <audio src={episode.episodeUrl} controls></audio>
    </div>
  )
}

export default PodcastDetail
