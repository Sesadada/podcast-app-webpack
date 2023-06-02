import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { selectedEp } from '../store/atoms'

interface PodcastListProps {
  res: {
    resultCount: number
    results: {
      trackId: number
      trackName: string
      releaseDate: string
      trackTimeMillis: number
    }[]
  }
  id?: string
}

const PodcastList: React.FC<PodcastListProps> = ({ res, id }) => {
  const [, setSelectedEpisode] = useRecoilState(selectedEp)

  return (
    <div className="podcastList-container">
      <div className="podcastList-header">
        <h3>Episodes: {res && res.resultCount}</h3>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {res &&
              res.results.slice(1).map((episode) => (
                <tr
                  key={episode.trackId}
                  onClick={() => setSelectedEpisode(episode)}
                >
                  <td>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/podcast/${id}/episode/${episode.trackId}`}
                      key={episode.trackId}
                    >
                      {episode.trackName}
                    </Link>
                  </td>
                  <td>
                    {new Date(episode.releaseDate).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    {`${Math.floor(episode.trackTimeMillis / (1000 * 60))}:${(
                      episode.trackTimeMillis / 1000
                    )
                      .toFixed(0)
                      .padStart(2, '0')
                      .slice(-2)}`}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PodcastList
