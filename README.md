@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
.carousel-inner{
    height: 1019px;
}

.row
{
    /* display: flex !important;  
    justify-content: space-around; */
    width: 100% !important;
}
.container-fluid{
    margin-top: 30px;
}

.texto-embarque{
    font-size: 50px;
    padding: 0 60px;
    margin-top: 30px;
    /* width: 50%; */
    font-family: "Inter", sans-serif;
}
.embarque{
    color: #00C637;
    font-weight: bold;
}

.col p {
    /* width: 50% !important; */
}




import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import './style.css'; 

function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 h-100" src="/dist/assets/imagem/black-square.png" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 h-100" src="/dist/assets/imagem/red-square.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 h-100" src="/dist/assets/imagem/green-square.png" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
      <div className='container-fluid'>
        <div className='row'>
           <div className='col'>
            
           <p className='texto-embarque'>Conheça o <span className='embarque'>Embarque Digital</span>, o programa que veio para mudar a vida de chico e mininu.</p>        
           </div>
         <div className='col'>
            <img className="d-block w-100 h-100" src="/dist/assets/imagem/img-inicio.png" alt="First slide" />   
          </div>
        </div>
     </div>
     <div className="container">
        <div className="row">
         <div className="col">
          <p></p>

        </div>
        <div className="col">
<p></p>
        </div>
      </div>
    </div>


      <Footer />
    </>
  );
}

export default Home
