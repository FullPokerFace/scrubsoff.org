let scrollAnimation = null;


// Function to execte the scrolling
const smoothScroll = (scrollRoadMap, REFRESH_RATE) =>{
    let i = 0;
    scrollAnimation = setInterval(()=>{
        window.scrollTo({ top: scrollRoadMap[i]});
        i++;
        if (i > scrollRoadMap.length) {clearInterval(scrollAnimation); scrollAnimation = null;}
    }, REFRESH_RATE);
}

//Stop Animation if user scrolls the mouse wheel
window.addEventListener("wheel", ()=>{
    if (scrollAnimation){
        clearInterval(scrollAnimation); 
        scrollAnimation = null;
    }
})

//Stop Animation if user scrolls the mouse wheel
window.addEventListener("touchmove", ()=>{
    if (scrollAnimation){
        clearInterval(scrollAnimation); 
        scrollAnimation = null;
    }
})

// Addon fucntion to get full document height
const getDocumentHeight = () =>{
    let body = document.body,
    html = document.documentElement;

    return  Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
}

const goToSection = (e, paddingOffset = 0) =>{

    const REFRESH_RATE = Math.round(1000 / 60)
    const EASING_FACTOR = 5;


    //If animation already exists - stop it & start anew
    if (scrollAnimation != null){
        clearInterval(scrollAnimation); scrollAnimation = null;
    }

        // Determine Scroll To point

        // Top offset of the element
        let scrollTo = e.getBoundingClientRect().top;

        // Add extra padding for element if needed (For Sticky menus)
        scrollTo += window.scrollY - paddingOffset;

        // If Top of the element is less than 0 - Scroll to the start of the page
        scrollTo = scrollTo < 0 ? 0 : scrollTo;
       
        // Full Document Height
        const pageHeight = getDocumentHeight();

        //Scrol to Page Bottom if Scroll To point beyond Page Height
        if (e.offsetTop + window.innerHeight > pageHeight){
            scrollTo = Math.round(pageHeight - window.innerHeight);
        }

        //1 for scrolling down, zero for scrolling up
        const isScrollingDown = window.scrollY > scrollTo ? false : true;
    
        // Get Start Point, End Point & Current point
        let scrollFrom = window.scrollY;

        //Create Road Map for scrolling
        const scrollRoadMap = [];

        // For Scrolling Down
        if (isScrollingDown){
            
            while (scrollFrom < scrollTo){
                let scrollStep = Math.ceil((scrollTo - scrollFrom)/EASING_FACTOR) > 100 ? 100 : Math.ceil((scrollTo - scrollFrom)/EASING_FACTOR);
                scrollFrom += scrollStep || 1;
                scrollRoadMap.push(scrollFrom)
            }

        //For Scrolling Up
        } else {
            while (scrollFrom > scrollTo) {
                let scrollStep = Math.ceil((scrollFrom - scrollTo)/EASING_FACTOR) > 100 ? 100 : Math.ceil((scrollFrom - scrollTo)/EASING_FACTOR);
                scrollFrom -= scrollStep || 1;
                scrollRoadMap.push(scrollFrom)
            }
        }

        //Execute SCrolling
         smoothScroll(scrollRoadMap, REFRESH_RATE);

}


module.exports = { goToSection : goToSection}
