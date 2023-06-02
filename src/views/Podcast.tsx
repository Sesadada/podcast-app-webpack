import React, { useEffect } from 'react'
import { TailSpin } from 'react-loading-icons'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import PodcastList from '../components/PodcastList'
import PodcastLogo from '../components/PodcastLogo'
import useGetData from '../http'
import { selectedEp, selectedPodcast } from '../store/atoms'
import PodcastDetail from './PodcastDetail'

const Podcast: React.FC = () => {
  const currentId: string =
    JSON.parse(localStorage.getItem('podcast') ?? 'null') ?? ''
  const [selectedPod, setSelectedPod] = useRecoilState(selectedPodcast)
  const selectedEpisode = useRecoilValue(selectedEp)
  const { id } = useParams<{ id: string }>()
  const url = `https://itunes.apple.com/lookup?id=${
    id ? id : currentId
  }&media=podcast&entity=podcastEpisode&limit=20`

  const { response, loading } = useGetData({ url })

  useEffect(() => {
    localStorage.setItem('podcast', JSON.stringify(id))
    if (response !== null && !selectedPod) {
      setSelectedPod(response)
    }
  }, [id, response, setSelectedPod])
  return (
    <div className="podView-container">
      <div className="podView-logo-container">
        {loading ? (
          <TailSpin stroke="#3B82F6" />
        ) : (
          <PodcastLogo res={response} id={id} />
        )}
      </div>
      <div className="podView-details-container">
        {loading ? (
          <TailSpin stroke="#3B82F6" />
        ) : selectedEpisode ? (
          <PodcastDetail />
        ) : (
          <PodcastList id={id} res={response} />
        )}
      </div>
    </div>
  )
}

export default Podcast
