import React from "react";
import "./foot.css";

export default function Footer() {
  return (
    <div className="foot">
      <footer>
            <div className="foot-bar">
                <div className="foot-links">
                    <div id="foot-logo" className="foot-content">
                        <img src={require("./src/brandname.png")} alt='f'/>
                            <span>RIDE BRO</span>
                    </div>
                    <div id="connect-links" className="foot-content">
                        <span>Connect with us</span>
                        <ul>
                            <li><a id="youtube-link" href="/"
                                target="_blank">Youtube</a> <img src={require("./src/brand-youtube-filled.png")} alt='f'/></li>
                            <li><a id="linkedin-link" href="/"
                                target="_blank">LinkedIn</a> <img src={require("./src/brand-linkedin.png")} alt='f'/></li>
                            <li><a id="github-link" href="/" target="_blank">GitHub</a>
                                <img src={require("./src/brand-github.png")} alt='f'/></li>
                            <li><a id="facebook-link" href="/"
                                target="_blank">Facebook</a> <img src={require("./src/brand-facebook.png")} alt='f'/></li>
                            <li><a id="twitter-link" href="/" target="_blank">X
                                twitter</a> <img src={require("./src/brand-twitter.png")} alt='f'/></li>
                            <li><a id="instagram-link" href="/"
                                target="_blank">Instagram</a> <img src={require("./src/brand-instagram.png")} alt='f'/></li>
                        </ul>
                    </div>
                    <div id="pages-link" className="foot-content">
                        <span>Essential Pages</span>
                        <ul>
                            <li><img src={require("./src/chevron-right.png")} alt='f'/><a href="/">Privacy Policy</a></li>
                            <li><img src={require("./src/chevron-right.png")} alt='f'/><a href="/">Terms and Condition</a></li>
                            <li><img src={require("./src/chevron-right.png")} alt='f'/><a href="/">Disclaimer</a></li>
                            <li><img src={require("./src/chevron-right.png")} alt='f'/><a href="/">Affiliate Disclosure</a></li>
                        </ul>
                    </div>
                    <div id="emai-links" className="foot-content">
                        <span>Get in touch</span>
                        <ul>
                            <li><img src={require("./src/mail-filled.png")} alt='f'/><a
                                href='/'>ridebro@gmail.com</a></li>
                            <li><img src={require("./src/user-cog.png")} alt='f'/><a href="/">Suggest an Idea</a></li>
                            <li><img src={require("./src/message-chatbot.png")} alt='f'/>contact us (Chat)</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-section">
                    <span>Copyright &copy; 2024 Ride Bro</span>
                </div>
            </div>
        </footer>
    </div>
  );
}
