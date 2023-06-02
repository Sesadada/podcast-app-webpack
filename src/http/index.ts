import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { loadingAtom } from '../store/atoms'
import {
  ErrorResponse,
  GetDataProps,
  PodcastResponse,
} from '../interfaces/podcastsInterfaces'

const useGetData = ({ url }: GetDataProps) => {
  const [response, setResponse] = useState<PodcastResponse | null>(null)
  const [error, setError] = useState<ErrorResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [, setLoadingState] = useRecoilState<boolean>(loadingAtom)

  const fetchData = () => {
    console.log('running')
    axios
      .get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then((res) => {
        setResponse(JSON.parse(res.data.contents))
      })
      .catch((err) => {
        setError(err)
        console.log('error', err)
      })
      .finally(() => {
        setLoading(false)
        setLoadingState(false)
      })
  }

  useEffect(() => {
    setLoadingState(true)
    fetchData()
  }, [])

  return { response, error, loading, fetchData }
}

export default useGetData
