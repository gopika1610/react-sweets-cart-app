import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css";

function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      
    
      <div className="carousel-indicators">
        <button data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" ></button>
        <button  data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        
      </div>

 
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/hero1.webp" className="d-block w-100 hero-img" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src="/hero2.webp" className="d-block w-100 hero-img" alt="Slide 2" />
        </div>

        
      </div>

     
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Hero;
