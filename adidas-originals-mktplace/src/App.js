import './App.scss';

function App() {
  return (
    <main>
      <header className="header-container">
        <img src="https://logodownload.org/wp-content/uploads/2019/11/adidas-originals-logo.png" className="logo-pic" alt="" />
        <nav className="menu-options">
          <a href="#gazelle">GAZELLE</a>
          <a href="#spezial">SPEZIAL</a>
          <a href="#samba">SAMBA</a>
          <a href="#campus">CAMPUS</a>
          <input placeholder="Search" className="searchBar"/>
          <button type="button" className="searchButton">
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" className="lupe"alt="" />
          </button>
        </nav>
        <button>
          <div className="btn-face-blue">
            Login
          </div>
          </button>
      </header>
      <div className="content-container">
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/5cd2555994d71a16b3b6ffc1/c4013b7c-2f74-41f0-a11e-8b28a48b4be0/346898663_145124835115329_5428517613208174571_n.jpg" className="harold" alt="" />
          <div className="slogans">
            <h3 className="slogan-1">Back to the originals with <span className='satellite'>SATELLITE STROMPPERS</span></h3>
            <p>UP TO 60% OFF on the best of three stripes.</p> <br />
            <button className='buy-now-btn'>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="container-gazelle">
        <div className="gazelle-text">
          <h1 className="gazelle-h1">GAZELLE</h1>
          <p className="gazelle-p1">Adidas Gazelle is a line of shoes released by Adidas in 1966. The original use of the shoe was for
            training but then later redesigned to an indoor version for handball.</p> <br />
            <button className='gazelle-btn'>GET YOUR GAZELLE</button>
        </div>
        <div className="image-container-gazelle">
          <img src="https://d350eqwdajv7qp.cloudfront.net/v2/posts/5035/illustration.jpg" className="gazelle" alt="" />
        </div>
      </div>
      <div className="samba-container">
        <div className="image-container-samba">
          <img src="https://media.gq-magazine.co.uk/photos/63e630d5ce7e76883c046663/16:9/w_2560%2Cc_limit/HEADER-velosamba.jpg" className="samba" alt="" />
        </div>
        <div className="samba-text">
          <h1 className="samba-h1">SAMBA</h1>
            <p className="samba-p1">
              The Samba's vintage roots can be traced back to 1950 when a German team donned a revolutionary shoe specifically designed for icy and snowy pitches.
              This earlier iteration featured an outsole with three cut-out suction cups, providing players with enhanced traction and stability.
              </p> <br />
          <button className='samba-btn'>GET YOUR SAMBA</button>
        </div>
      </div>
      <div className="spezial-container">
        <div className="spezial-text">
          <h1 className="spezial-h1">SPEZIAL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis corporis perspiciatis reprehenderit,
              quam mollitia ex modi. Harum veritatis impedit ipsa cum, sit placeat quia! Possimus pariatur repellat dolorem sit?
            </p>
            <button className='spezial-btn'>GET YOUR SPEZIAL</button>
        </div>
        <div className="image-container-samba">
          <img src="https://media.gq.com/photos/64f9eb0a539968b407f26783/master/pass/adidas-handball.jpg" className="spezial" alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
