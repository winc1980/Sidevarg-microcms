export const Header = () => {
  return (
    <>
      {/* ここからヘッダー */}
      <section id="header">
        <header>
          <div className="header_wrapper">
            <img className="header-logo" src="/images/logo.svg" alt="" />
            <h1 className="header-title">CINEMAX SIDEVARG</h1>
            <nav className="header-nav">
              <ul className="header-menu">
                <li className="header-menu-item">
                  <a
                    href="https://twitter.com/"
                    id="twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="header-menu-item">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="header-menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="header-menu-item">
                  <a id="contact" target="_blank" href="./official_line_link">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hamburger-menu">
            <input type="checkbox" id="menu-btn-check" />
            <label className="menu-btn">
              <span></span>
            </label>
            <div className="menu-content">
              <ul>
                <li>
                  <a target="_blank" href="https://twitter.com/>">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </section>
      {/* ここまでヘッダー */}
    </>
  )
}
