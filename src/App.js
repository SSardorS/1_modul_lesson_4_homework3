import "./App.css";

function App() {
  return (
    <div>
      <nav class="navbar bg-body-white shadow-sm p-3 mb-5 rounded">
        <div class="container-fluid">
          <span class="navbar-brand">Company name</span>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link disabled pe-auto"
                aria-disabled="true"
              >
                Features
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link disabled pe-auto"
                aria-disabled="true"
              >
                Enterprise
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link disabled pe-auto"
                aria-disabled="true"
              >
                Support
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link disabled pe-auto"
                aria-disabled="true"
              >
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="about-pricing">
        <h1>Pricing</h1>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col card">
            <div class="card-header">Free</div>
            <div class="card-body">
              <h5 class="card-title">
                $0 <span>/ mo</span>
              </h5>
              <p>10 users included</p>
              <p>2 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <a href="#" class="btn btn-primary">
                Sign up for free
              </a>
            </div>
          </div>
          <div className="col card">
            <div class="card-header">Free</div>
            <div class="card-body">
              <h5 class="card-title">
                $15 <span>/ mo</span>
              </h5>
              <p>20 users included</p>
              <p>10 GB of storage</p>
              <p>Priority email support</p>
              <p>Help center access</p>
              <a href="#" class="btn btn-primary">
                get started
              </a>
            </div>
          </div>
          <div className="col card">
            <div class="card-header">Free</div>
            <div class="card-body">
              <h5 class="card-title">
                $29 <span>/ mo</span>
              </h5>
              <p>30 users included</p>
              <p>15 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <a href="#" class="btn btn-primary">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a
              href="#"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-bootstrap-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
              </svg>
            </a>
            <p class="text-muted">© 2022</p>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
