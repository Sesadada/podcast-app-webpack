import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom'
import Header from './components/Header'
import './styles/styles.css'
import Home from './views/Home'
import Podcast from './views/Podcast'
import PodcastDetail from './views/PodcastDetail'

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="podcast">
            <Route path=":id" element={<Podcast />}>
              <Route path="episode/:episodeId" element={<PodcastDetail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
