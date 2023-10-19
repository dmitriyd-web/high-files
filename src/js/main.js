document.addEventListener('DOMContentLoaded', function(){
	
	if ( window.innerWidth >= 1200 ) {

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true
		})

		let itemsServises = gsap.utils.toArray('.services-item')

		itemsServises.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -50 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})

		let itemsWorks = gsap.utils.toArray('.works-gallery__image')

		itemsWorks.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 50 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})

		let itemsBrands = gsap.utils.toArray('.brand')

		itemsBrands.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -50 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})

	}

	//  mobile menu

	const mobileButton = document.querySelector(".mobile-button")
	const hmobileMenu = document.querySelector(".mobile-menu")

	mobileButton.addEventListener( "click", () => {
		mobileButton.classList.toggle("open")
		hmobileMenu.classList.toggle("open")
	})

	//	works

	const worksMenuLink = document.querySelectorAll(".works-menu__link")
	const worksGallery = document.querySelectorAll(".works-gallery")
	
	for (let i = 0; i < worksMenuLink.length; i++) {
		worksMenuLink[i].addEventListener( "click", function(e) {
			e.preventDefault()
			for (let j = 0; j < worksMenuLink.length; j++) {
				worksMenuLink[j].classList.remove("current")
				worksGallery[j].classList.remove("current")
			}
			worksMenuLink[this.dataset.works].classList.add("current")
			worksGallery[this.dataset.works].classList.add("current")
			/*
			
			console.log(this.dataset.works)
			*/
		})
	}

	//  Initialize Swiper
	
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
	});

})

