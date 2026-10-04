/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

 //  Website Counter 
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://h5b4zb4wlfydymwrg7fgtndvq40rkjjv.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        
        // Make sure the views data is correctly processed
        if (data && data.views !== undefined) {
            counter.innerHTML = `Views: ${data.views}`;
        } else {
            counter.innerHTML = "Couldn't read views";  // Fallback in case of an error
        }
    } catch (error) {
        console.error("Error fetching view count:", error);
        counter.innerHTML = "Couldn't read views";  // Fallback in case of an error
    }
}

updateCounter();

 