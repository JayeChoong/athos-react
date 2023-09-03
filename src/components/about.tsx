import './about.scss';
import background from '../assets/athos-background.jpg'
import about from '../assets/about.png'
import aboutVision from '../assets/about-vision.png'
import aboutMision from '../assets/about-mision.png'
import aboutAttitude from '../assets/about-attitude.png'


function About() {
    return (

<div className="content">
    <div className="overlay"></div>
    <img src={background} className="background-img"></img>
    <div className="about-container" id="AboutUs">
        <h1 className="primary-font">ABOUT ATHOS ATHLETE</h1>
        <img src={about} className="about-img" alt="about-athos"></img>
        <p>At Athos, we strive to be the catalyst for better sports apparel for all sportsmans. Our products, our
            people and the stories we share elevate sport, champion sportsmanship, and cultivate the mindset of breaking
            limits in both aspects of sports and lives.</p>
        <div className="row mt-3">
            <div className="col-md-4">
                <img src={aboutVision} className="about-img" alt="about-vision"></img>
                <h3 className="primary-font pt-3">Our Vision</h3>
                <p>We aim to be a leading sporting goods manufacturer in APAC and constantly be at the forefront of
                    innovative fabric technology.</p>
            </div>
            <div className="col-md-4">
                <img src={aboutMision} className="about-img" alt="about-mission"></img>
                <h3 className="primary-font pt-3">Our Mission</h3>
                <p>We dedicate ourselves to developing a successful business by offering our customers an excellent
                    range of quality and customization of products for sports.</p>
            </div>
            <div className="col-md-4">
                <img src={aboutAttitude} className="about-img" alt="about-attitude"></img>
                <h3 className="primary-font pt-3">Our Attitude</h3>
                <p>Challenges ahead of us are like mountains and stumbling blocks. At Athos Athlete, we seek no
                    shortcut and are ready at all times to prevail.</p>
            </div>
        </div>
    </div>

</div>
        );
    }
    
    export default About;