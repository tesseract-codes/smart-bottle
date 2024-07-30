document.addEventListener('DOMContentLoaded', function () {
	// Smooth scrolling for navigation links
	const navLinks = document.querySelectorAll('a[href^="#"]');
	navLinks.forEach(link => {
	    link.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
		window.scrollTo({
		    top: targetElement.offsetTop,
		    behavior: 'smooth'
		});
	    });
	});
    
	// Toggle mobile navigation menu
	const menuToggle = document.querySelector('.navbar-toggler');
	const navbarMenu = document.querySelector('.navbar-collapse');
    
	menuToggle.addEventListener('click', function () {
	    navbarMenu.classList.toggle('show');
	});
    
	// Home page button animation
	const heroButton = document.querySelector('.hero a.btn');
	if (heroButton) {
	    heroButton.addEventListener('mouseover', function () {
		this.classList.add('btn-hover');
	    });
	    heroButton.addEventListener('mouseout', function () {
		this.classList.remove('btn-hover');
	    });
	}
    
	// Product page image zoom
	const productImages = document.querySelectorAll('.product-images img');
	if (productImages) {
	    productImages.forEach(img => {
		img.addEventListener('mouseover', function () {
		    this.style.transform = 'scale(1.1)';
		});
		img.addEventListener('mouseout', function () {
		    this.style.transform = 'scale(1)';
		});
	    });
	}
    
	// Checkout form validation
	const checkoutForm = document.querySelector('.checkout-form');
	if (checkoutForm) {
	    checkoutForm.addEventListener('submit', function (e) {
		const requiredFields = document.querySelectorAll('.checkout-form .form-group input[required], .checkout-form .form-group select[required]');
		let valid = true;
    
		requiredFields.forEach(field => {
		    if (!field.value) {
			field.classList.add('is-invalid');
			valid = false;
		    } else {
			field.classList.remove('is-invalid');
		    }
		});
    
		if (!valid) {
		    e.preventDefault();
		    alert('Please fill out all required fields.');
		}
	    });
	}
    });
    