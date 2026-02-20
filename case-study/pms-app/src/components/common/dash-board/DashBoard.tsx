import { Link } from "react-router-dom"

const DashBoard = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">product management system</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to='/home'>
                <span className="nav-link active">Home
                  <span className="visually-hidden">(current)</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/products'>
                <span className="nav-link">products</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/products/add'>
                <span className="nav-link">add new product</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashBoard