import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loadingAtom } from '../store/atoms'
import { TailSpin } from 'react-loading-icons'

const Header = () => {
  const loadingState = useRecoilValue<boolean>(loadingAtom)
  console.log(loadingState)
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="header-text">Podcaster</h1>
      </Link>
      <div className="flex items-center">
        {loadingState && (
          <div className="loading-icon">
            <TailSpin stroke="#3c68b0" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
