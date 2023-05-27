export function Home() {
  return (
    <div>
      <h1 className="m-5">Welcome Baby</h1>
      <h2 className="m-2">Due September 2023</h2>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              id="home-img"
              src="https://res.cloudinary.com/dlrkhf7ne/image/upload/v1685224563/Berto-BabyShower/baby-oliver_vkvdlf.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              id="home-img"
              src="https://res.cloudinary.com/dlrkhf7ne/image/upload/v1685224563/Berto-BabyShower/berto-anggie_hbbq5g.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              id="home-img"
              src="https://us.123rf.com/450wm/mashot/mashot1809/mashot180900031/108958635-progress-bar-with-inscription-baby-boy-loading-and-milk-bottle-in-sketchy-style-vector.jpg?ver=6"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
