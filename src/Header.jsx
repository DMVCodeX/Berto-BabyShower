export function Header() {
  return (
    <div>
      <header>
        <nav className="m-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active a " aria-current="page" href="/home">
                <img src="https://img.icons8.com/?size=512&id=2092&format=png" alt="" height="40px" width="40px" />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active a " aria-current="page" href="/invitation">
                <img
                  src="https://img.icons8.com/?size=512&id=WSIjZmvnnbx4&format=png"
                  alt=""
                  height="40px"
                  width="40px"
                />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link a " href="/registry">
                <img
                  src="https://img.icons8.com/?size=512&id=5wxxqpLSpPUh&format=png"
                  alt=""
                  height="45px"
                  width="45px"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a " href="/accommodations">
                <img src="https://img.icons8.com/?size=512&id=10666&format=png" alt="" height="45" width="45" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
