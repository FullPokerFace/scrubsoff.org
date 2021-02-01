import { useEffect, useState } from 'react'

import  scrollToMobile  from "../../assets/libs/scrollToMobile.js";
let gotoSection = scrollToMobile.goToSection;

// Func to close mobile menu
const closeMobileMenu = (e) =>{    
    //If user clicked on menu area or burger-menu icon     
    if ( e.target.className.includes('burger-menu-wrapper') || e.target.className.includes('burger-menu') || e.target.className.includes('mobile-menu-links') )

    //Do nothing
    { e.stopPropagation();} 

    //Else - close mobile menu
    else {
        document.querySelector('.mobile-menu-links').style.transform = 'translateX(0)';
    }
}

// Set an Event listener for mobile menu closing, when user clicks on body area
document.body.addEventListener('click', (e) => { closeMobileMenu(e)});

export default function Navigation({showCloseButton = true }) {

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        setHeaderHeight(header.offsetHeight);

        window.addEventListener('scroll',()=>{
            if (window.scrollY > 10) {
                header.classList.add('sticky-header')
            } else {header.classList.remove('sticky-header')}
        }
        )              
        }, [headerHeight]);

        

    return (
        <>
        
        {showCloseButton && <button className="close" onClick={closeMobileMenu}>+</button>}
                
                <button onClick={()=>{gotoSection(document.getElementById("Showcase"), headerHeight)}} >Home</button>
                <button onClick={()=>{gotoSection(document.getElementById("ThePetition"), headerHeight)}}>Petition</button>
                <button onClick={()=>{gotoSection(document.getElementById("SpreadTheWord"), headerHeight)}}>Raise Awareness</button>
                <button onClick={()=>{gotoSection(document.getElementById("TheTeam"), headerHeight)}}>Team</button>
                <button onClick={()=>{gotoSection(document.getElementById("Subscribe"), headerHeight)}}>Subscribe</button>
                <button onClick={()=>{gotoSection(document.getElementById("Fundraiser"), headerHeight)}}>Fundraiser</button>
            </>
    )
}
