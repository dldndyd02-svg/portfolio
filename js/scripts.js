/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // // Shrink the navbar 
    // navbarShrink();

    // // Shrink the navbar when page is scrolled
    // document.addEventListener('scroll', navbarShrink);

    // // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 72,
    //     });
    // };

    // // Collapse responsive navbar when toggler is visible
    // const navbarToggler = document.body.querySelector('.navbar-toggler');
    // const responsiveNavItems = [].slice.call(
    //     document.querySelectorAll('#navbarResponsive .nav-link')
    // );
    // responsiveNavItems.map(function (responsiveNavItem) {
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // });

});

// nav
    const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {   // 50px 이상 스크롤 시
            navbar.classList.add('blur');
        } else {
            navbar.classList.remove('blur');
        }
        });

        
// categoty
    const filterBtns = document.querySelectorAll(".cat-btn");
    const items = document.querySelectorAll(".cat-item");

    filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // 버튼 active 처리
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.cat;

        // 아이템 필터링
        items.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        });
    });
    });

