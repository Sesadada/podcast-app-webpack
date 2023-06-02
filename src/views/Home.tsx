import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import useGetData from '../http'
import { podcastsAtom, selectedPodcast } from '../store/atoms'

const url =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

const Home = () => {
  const { response, error } = useGetData({ url })
  const [data, setData] = useRecoilState(podcastsAtom)
  const [, setSelectedPod] = useRecoilState(selectedPodcast)
  const storagedate = 'podcastsDate'

  const storePodcast = (podcast: any) => {
    setSelectedPod(podcast)
    localStorage.setItem('selectedPodcast', JSON.stringify(podcast))
  }

  useEffect(() => {
    if (response !== null && !data) {
      console.log('running home')
      setData(response.feed.entry)
      localStorage.setItem(storagedate, JSON.stringify(Date.now()))
    }
    console.log(response)
  }, [response])

  return (
    <div className="grid-container">
      <div className="grid  ">
        {error && (
          <div>
            <p>{error.message}</p>
          </div>
        )}
        {data &&
          data.map((pod: any) => (
            <div
              key={`${pod.id.attributes['im:id']}`}
              onClick={() => storePodcast(pod)}
            >
              <Link
                to={`/podcast/${pod.id.attributes['im:id']}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="podcast-card">
                  <div className="podcast-container">
                    <div className="podcast-image-box">
                      <img
                        src={pod['im:image'][2].label}
                        alt={pod.title.label}
                        className="podcast-image"
                      />
                    </div>
                    <div className="podcast-details">
                      <p className="podcast-title">{pod.title.label}</p>
                      <p className="podcast-author">
                        Author: {pod['im:artist'].label}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Outlet />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
