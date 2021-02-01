//Components
import Header from './Header';



export default function Showcase() {



    return (
        <>
        <Header/>
        <section className="showcase" id="Showcase">
            <div className="overlay"></div>
            <div className="showcase-message">
                <h1>Our Message</h1>
                <p>Scrubs Off is a non-profit organization dedicated to encouraging medical professionals from wearing scrubs ouside of work</p>
                <button className="btn-yellow">Watch Video</button>
            </div>
        </section>
        </>
    )
}
