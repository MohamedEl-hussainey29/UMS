import { Link } from 'react-router-dom'
import nfImage from '../../assets/images/nf-bg.avif'

export default function NotFound() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center d-flex flex-column align-items-center gap-4">
        <img
          src={nfImage}
          alt="NotFound"
          className="img-fluid"
          style={{ maxWidth: "500px", width: "100%" }}
        />

        <Link
          className="btn btn-warning text-white text-decoration-none"
          to="/dashboard"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}