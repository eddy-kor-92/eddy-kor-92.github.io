/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
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

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
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

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#portfolioCarousel'); // 메인 카루셀
    const thumbnails = document.querySelectorAll('.carousel-thumbnails img'); // 썸네일 이미지
    const thumbnailsContainer = document.querySelector('.carousel-thumbnails'); // 썸네일 슬라이더 컨테이너

    // 카루셀 슬라이드 변경 이벤트
    carousel.addEventListener('slide.bs.carousel', function (event) {
        const activeIndex = event.to; // 변경된 슬라이드의 인덱스

        // 모든 썸네일에서 active 클래스 제거
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

        // 해당 인덱스의 썸네일에 active 클래스 추가
        const activeThumbnail = thumbnails[activeIndex];
        activeThumbnail.classList.add('active');

        // 썸네일 슬라이더 안에서 스크롤 이동
        const thumbnailLeft = activeThumbnail.offsetLeft; // 활성 썸네일의 왼쪽 위치
        const containerScrollLeft = thumbnailsContainer.scrollLeft; // 현재 컨테이너의 스크롤 위치
        const containerWidth = thumbnailsContainer.offsetWidth; // 컨테이너 너비
        const thumbnailWidth = activeThumbnail.offsetWidth; // 썸네일 너비

        // 계산된 스크롤 위치 (썸네일을 컨테이너 중앙에 배치)
        const scrollTo = thumbnailLeft - containerWidth / 2 + thumbnailWidth / 2;

        // 슬라이더 컨테이너 스크롤 이동 (화면 포커스는 이동하지 않음)
        thumbnailsContainer.scrollTo({
            left: scrollTo,
            behavior: 'smooth', // 부드러운 스크롤
        });
    });
});


function copy(element, event) {
    console.log("test")
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    const accountId = element.dataset.accountId; // data-account-id 속성에서 계좌번호 ID 가져오기
    const accountText = document.getElementById(accountId).textContent;

    // 클립보드에 복사
    navigator.clipboard.writeText(accountText)
        .then(() => {
            alert('계좌번호가 복사되었습니다: ' + accountText);
        })
        .catch(err => {
            console.error('복사 실패:', err);
        });
}