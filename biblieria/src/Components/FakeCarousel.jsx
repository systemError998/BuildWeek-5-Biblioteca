import React from 'react'

export default function FakeCarousel() {
  return (
    /* inserire il fuck carousel */
    <div className='d-block'>
    <div id="carouselExampleAutoplaying" className="carousel slide mb-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://c4.wallpaperflare.com/wallpaper/728/680/985/biblioteca-disea-estanterias-interior-wallpaper-preview.jpg" className="caroselloFack" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://c4.wallpaperflare.com/wallpaper/728/680/985/biblioteca-disea-estanterias-interior-wallpaper-preview.jpg" className="caroselloFack" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://c4.wallpaperflare.com/wallpaper/728/680/985/biblioteca-disea-estanterias-interior-wallpaper-preview.jpg" className="caroselloFack" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
