//Components import
import Navigation from './Partials/Navigation';
import ShareBlock from './Partials/ShareBlock';


export default function Footer() {
    return (
        <section className="footer">
            
            <ShareBlock/>

            <ul className='footer-links'>
                <Navigation showCloseButton={false}/>

            </ul>
            <h2 className="show-after"> {(new Date()).getFullYear()} All Rights Reserved by Scrubsoff.org</h2>
            <h2>
                <a href="https://trilodi.com"> Created by Trilodi Team</a>
            </h2>                
        

        </section>
    )
}
