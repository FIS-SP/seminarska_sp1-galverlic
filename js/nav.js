const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="container">
          <a class="navbar-brand" href="#"><img src = "img/logo.jpg" alt = "Logo spletne trgovine" height = "60"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link acti ve" aria-current="page" href="#">VSI IZDELKI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">AKCIJE IN UGODNOSTI</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  KATEGORIJE IZDELKOV
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">MLEKO, JAJCA IN MLEČNI IZDELKI</a></li>
                  <li><a class="dropdown-item" href="#">MESO IN MESNI IZDELKI</a></li>
                  <li><a class="dropdown-item" href="#">SVEŽ KRUH IN PECIVO</a></li>
                  <li><a class="dropdown-item" href="#">ZAMRZNJEN PROGRAM</a></li>
                </ul>
              </li>
            
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    `;
}
createNav();