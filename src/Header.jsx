import "./Header.css";
import { Link } from "react-router-dom";

function Header({cartCount}) {
  return (
    <>
  
      <div className="top-bar text-white text-center py-2">
        We are now shipping PAN INDIA!
      </div>

 
      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 position-relative">
         
        <Link to="/" className="navbar-brand" href="#">
          <img src="/logo.webp" alt="Shree Mithai"/>
        </Link>

        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="mainNavbar"
        >
          <ul className="navbar-nav fw-semibold gap-4 position-relative">

          
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Sweets
              </a>

              <div className="dropdown-menu p-3 mega-menu">
                <div className="d-flex">
                  <div className="me-5">
                    <h6 className="fw-bold">SWEETS</h6>
                    <ul className="list-unstyled mt-2">
                      <li>Cashew Sweets</li>
                      <li>Almond Sweets</li>
                      <li>Ghee Sweets</li>
                      <li>Milk Sweets</li>
                      <li>Assorted Sweets</li>
                      <li>Mixed Dry Fruit Sweets</li>
                      <li>Halwa's & Other Sweets</li>
                      <li>Bites & Chikki's</li>
                     
                      <li>Bengali Sweets</li>
                    </ul>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="text-center">
                      <img src="/rasmalai.webp" alt="Rasmalai" height="120" width="100" />
                      <p className="mb-0 fw-semibold"> Rasmalai</p>
                      <small>from Rs. 295.00</small>
                    </div>
                    <div className="text-center">
                      <img src="/milkpeda.webp" alt="Milk Peda" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Milk Peda</p>
                      <small>from Rs. 185.00</small>
                    </div>
                    <div className="text-center">
                      <img src="/boondhi-ladoo-4319406.webp" alt="Boondhi Ladoo" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Ladoo</p>
                      <small>from Rs. 190.00</small>
                    </div>
                    <div className="text-center">
                      <img src="/kesarpeda.webp" alt="Kesar Peda" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Kesar Peda</p>
                      <small>from Rs. 155.80</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>

          
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Savouries
              </a>

              <div className="dropdown-menu p-4 mega-menu">
                <div className="d-flex">

               
                  <div className="me-5">
                    <h6 className="fw-bold">SAVOURIES</h6>
                    <ul className="list-unstyled mt-2">
                      <li>Mixture & Sev</li>
                      <li>Chips & Snacks</li>
                      <li>Roasted & Baked Savouries</li>
                      <li>Dry Fruit Savouries</li>
                      <li>Dry Fruit Tray</li>
                      <li>Banana Chips</li>
                      <li>Pepper Thattai</li>
                      <li>Cheese Balls</li>
                      
                    </ul>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="text-center">
                      <img src="/mixture.jpeg" alt="Mixture" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Mixture</p>
                      <small>from Rs. 180.00</small>
                    </div>

                    <div className="text-center">
                      <img src="/chips.webp" alt="Chips" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Chips</p>
                      <small>from Rs. 150.00</small>
                    </div>

                    <div className="text-center">
                      <img src="/dal kachori.webp" alt="dal kachori" height="120" width="100" />
                      <p className="mb-0 fw-semibold">dal kachori</p>
                      <small>from Rs. 320.00</small>
                    </div>


                    <div className="text-center">
                      <img src="/kara sev.webp" alt="Kara sev" height="120" width="100" />
                      <p className="mb-0 fw-semibold">kara sev</p>
                      <small>from Rs. 180.00</small>
                    </div>
                  </div>


                </div>
              </div>
            </li>


           <li className="nav-item dropdown mega-dropdown">

              <a className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown">
                Bakery
              </a>
              <div className="dropdown-menu p-4 mega-menu">
                <div className="d-flex">
        <div className="me-5">
                    <h6 className="fw-bold">BAKERY</h6>
                    <ul className="list-unstyled mt-2">
                      <li>pulm cake</li>
                      <li>Ruby Doughnut</li>
                      <li>Sattu Nankhatti</li>
                      <li>Strawberry cake</li>
                      <li>Sweet Bun</li>
                      <li>Banana Chips</li>
                      <li>Almond cookies</li>
                      <li>Achari Lvash</li>
                      <li>Baked Cheesecake</li>
                      
                    </ul>
                  </div>

              
                  <div className="d-flex gap-3">
                    <div className="text-center">
                      <img src="/biscoff-dark-ganache-cake-675863.webp" alt="Mixture" height="120" width="100" />
                      <p className="mb-0 fw-semibold">ganache dark cake</p>
                      <small>from Rs. 180.00</small>
                    </div>

                    <div className="text-center">
                      <img src="/choco-chip-tea-cake-541777.webp" alt="choco chip tea cake" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Choco chip  cake</p>
                      <small>from Rs. 150.00</small>
                    </div>

                    <div className="text-center">
                      <img src="/chocolate-marble-cake-749287.webp" alt="dal kachori" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Chocolate cake</p>
                      <small>from Rs. 320.00</small>
                    </div>


                    <div className="text-center">
                      <img src="/dry-fruit-muffin-591703.webp" alt="Kara sev" height="120" width="100" />
                      <p className="mb-0 fw-semibold">Dry fruit muffin</p>
                      <small>from Rs. 180.00</small>
                    </div>
                  </div>


                </div>
              </div>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">Hampers</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Festival & Corporate Orders
              </a>
            </li>

          </ul>
        </div>


        <div className="d-flex gap-3 fs-5">
          <Link to="/" className="icon-link">
          <span role="button">🔍</span>
           </Link>
           <Link to="/login" className="icon-link">
          <span role="button">👤</span>
          </Link>
          <Link to="/cart" className="icon-link">
          <span role="button">🛒  {cartCount}</span>
         </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
