import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { podcastsAtom } from '../store/atoms'

const Filter = () => {
  const [data, setData] = useRecoilState<Array<any>>(podcastsAtom) // Replace 'any' with the actual type of 'podcastsAtom' data
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [tobeFiltered] = useState<Array<any>>(data) // Replace 'any' with the actual type of 'tobeFiltered' data

  useEffect(() => {
    const filteredData = tobeFiltered.filter((pod) =>
      pod.title.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setData(filteredData)
  }, [searchTerm])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
  }

  return (
    <div className="filter-container">
      <div className="badge">100</div>
      <input
        type="text"
        placeholder="Filter podcasts..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  )
}

export default Filter
