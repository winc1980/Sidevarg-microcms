export const Footer = () => {
  return (
    <>
      {/* ここからフッター */}
      <section id="footer">
        <div className="footer_wrapper">
          <div className="footer_contact">
            <p>
              お問い合わせは公式LINEにて受け付けております。
              <br />
              体験や入会、活動についてのご質問など、お気軽にお問い合わせください。
            </p>
            <a
              href="official_line_link"
              className="contact-btn"
              target="_blank"
            >
              <p>Contact</p>
            </a>
          </div>
          <div className="footer_link">
            <nav>
              <ul>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src="/images/instagram-logo.svg" alt="" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <img src="/images/twitter-logo.svg" alt="" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="official_line_link" target="_blank">
                    公式LINE
                  </a>
                </li>
                <li>
                  <a href="#">ブログ</a>
                </li>
              </ul>

              <a href="#" id="footer_logo">
                CINEMAX
                <br />
                SIDEVARG
              </a>
            </nav>

            <div className="footer_copyright">
              <p>Copyright: CINEMAX SIDEVARG</p>
            </div>
          </div>
        </div>
      </section>
      {/* ここまでフッター */}
    </>
  )
}
