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
              src="https://previews.dropbox.com/p/thumb/AB7iQ9CzsKxCMg7FAGxd5b2qh0bQ2P5ZqkMuKguHoQwN4BlLALTLX3aHIFH09UnhVKuTnfTX5yA2gRSKSWpPLAVXXr7amBBAwMtF3t9frzecF_mS-p6XssBHc_zvMQKgVLYNehviEfELPl8r_I5OAUWQllOVqhJM6HdQ-uBC0oc3LqQbUZwsHOjbpxhLNlL50qeTQWtj_yiAQCwoJ5FlLNWzhiHWYVsCarO8Id8N877GP0wpe4mYlO1pMBkpyMpBE7jZyapHzXNH2Zc2q3KFzfdpTszQwFKPTcyCyZgndRS2QlY6ZGPhbk3R5zEmzt4UogLjk_mdw-PI9MnmkH2L4tLpb7964Ix-lJH-JRNGKtQ1RTWgfReob3gOPRLLHZDqZuE/p.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              id="home-img"
              src="https://previews.dropbox.com/p/thumb/AB446qe8W0aF37IIuuZGOjMm1s0ezCqPCcMxhtIbM94E2v4Bk7rHWKxE_02oDLv77GwVPlGzgAW0wUnGAHgr-_AOkvGwcfoSLrI720h4rei_Jvms2movuRksj7a_kyXspgp9KUHWxKnqOSBygIvTys8mP-1G8XcEOm4SUgmlqO_X2bzNgkjEKXEfLU2EpED5Ub5qsvlhAfSRzPFzhM3gQXxPmTquRsbybolPqFe7LjiK9Ej2tWzNzCMgTJC8J8jtwuQ63YQ5F1HXNOFL4Zze2HCMvwM16TCF5bX5_u228D8pXbtlwbrxoNKgB7AzYIwm78ILGTSr0AIAocEMFduOLJxx5eg16UffM6b1H93gqeJpPgpNSjeDBI7BZRYAungvt2o/p.png"
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
