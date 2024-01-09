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
            {/* <h1 className="slogan-2">SATELLITE STROMPPERS</h1> */}
          </div>
        </div>
      </div>
      <div className="container-secondary">
        <img src="https://d350eqwdajv7qp.cloudfront.net/v2/posts/5035/illustration.jpg" className="gazelle" alt="" />
      </div>
    </main>
  );
}

export default App;
