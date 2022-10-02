import './home.css'
import logo from "../../img/logo.png"
import banner1 from "../../img/banner1.jpg"
import backToSchool from "../../img/back-to-sch.png"
import banner2 from "../../img/banner2.jpg"
import banner3 from  "../../img/banner3.jpg"
import LimitYourMind from "../../img/limit-your-mind.png"
import miniatureRocket from "../../img/miniature_rocket.jpg"
import miniatureRuler from "../../img/miniature_ruler.jpg"
import miniatureStars from "../../img/miniature_stars.png"
import yellowcurved from "../../img/bg-footer.png"


const Home =  () => {
    return (
        <>
        <div className="homepage">
            <div className="section-1">
                <div className="banner1">
                    <img src={banner1} alt="Kids enjoys Sports" /> 
                </div>
                <div className="logo">
                    <img src={logo}  alt="KIDS SPORTS - Back to School" />
                </div>
            </div>
            <div className = "section-2">
                <img src={backToSchool} alt="back to school" />
                <h2>Back to School</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.s</p>
                <input type="search" value="More info" />            
            </div>
            <div className="section-3">
                <div className="image">
                    <img src={banner2} alt="" />
                </div>
                <div className="text">
                    <h2>Ready?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venen</p>
                </div>
            </div>
            <div className="section-4">
                <div className="text-4">
                    <h2>We Who Are?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venen</p>
                </div>
                <div className="image-4">
                    <img src={banner3} alt="" />
                </div>
            </div>
            <div className="section-5">
                <img src={LimitYourMind} alt="" />
            </div>
            <div className="section-6">
                <div className="sect-left">
                    <h3>More Info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    <img src={miniatureRuler} alt="" />
                    <h3>More Info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div className="sect-right">
                    <img src={miniatureRocket} alt="" />
                    <h3>More Info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    <img src={miniatureStars} alt="" />
                </div>
            </div>
            <div className="section-7">
                <img src={yellowcurved} alt="" />
            </div>
            <div className="section-8">
                <div className="contact-us">
                    <h3>CONTACT US</h3>
                    <p> 23rd Avenue, Montreal - Canada<br />
                    123-456-789 www.sushilogo.com</p>
                </div>
                <div className="links">
                    <a href="#">About</a><br />
                    <a href="#">Team</a><br />
                    <a href="#">Join Us</a><br />
                    <a href="#">Ethic</a><br />
                </div>
                <div className="footer-border"></div>
            </div>
            
        </div>
    </>
    );
}

export default Home

