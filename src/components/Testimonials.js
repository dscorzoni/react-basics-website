import './Components.css';
import Card from './Card';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h1>What our clients are talking about us:</h1>
                <div className="cards">
                    <Card 
                        name="Thea King" 
                        country="New Zealand"
                        image_url="https://randomuser.me/api/portraits/women/87.jpg"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime reiciendis vero perferendis porro molestiae sint quibusdam tempore impedit voluptas!"
                    />
                    <Card 
                        name="Kasper Andersen" 
                        country="Denmark"
                        image_url="https://randomuser.me/api/portraits/men/61.jpg"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime reiciendis vero perferendis porro molestiae sint quibusdam tempore impedit voluptas!"
                    />
                    <Card 
                        name="Rosibel Fernandes" 
                        country="Brazil"
                        image_url="https://randomuser.me/api/portraits/women/17.jpg"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime reiciendis vero perferendis porro molestiae sint quibusdam tempore impedit voluptas!."
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;