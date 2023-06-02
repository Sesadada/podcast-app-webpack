import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { loadingAtom } from '../store/atoms'
import { GetDataProps } from '../interfaces/podcastsInterfaces'

const useGetData = ({ url }: GetDataProps) => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [, setLoadingState] = useRecoilState(loadingAtom)

  const fetchData = () => {
    console.log('running')
    axios
      .get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then((res) => {
        setResponse(JSON.parse(res.data.contents))
      })
      .catch((err) => {
        if (axios.isAxiosError(error)) {
          setError('Axios Error with Message: ' + err.message)
        } else {
          setError(error)
        }
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
