import './Components.css';
import HeroImage from "../assets/hero-image.jpg";

/*
    This component renders the Hero section of the page.
    It's mostly static, the only difference here is the usage of import for image.
*/

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Lorem, ipsum.</h1>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque animi id alias ipsa perferendis quod molestiae voluptates voluptatum eveniet!</p>
                    <button>Sign-Up Today</button>
                </div>
                <img src={HeroImage} alt="Trees" width="400px" />
            </div>
        </section>

    )
}

export default Hero;