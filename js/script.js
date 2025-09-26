// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
  highlightActiveNavLink();
  initStickyHeader();
  initMobileNavToggle();
  document.querySelector(".year").textContent = new Date().getFullYear();
  });
});


// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = `<div id="main-header">
            <nav class="navbar bg-light">
              <div class="container-fluid px-0 header">
                <a class="brandLogo" href="index.html">
                  <img src="image/BrandLogo.webp" alt="Rudraksha Medical">
                </a>
                <div class="heavyNav">
                  <div class="miniHeader">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-auto topheadLinks">
                          <a target="_blank" href="tel:+916353647003">
                            <i class="fa-solid fa-phone" aria-hidden="true"></i>+91 63536 47003 </a>
                          <a target="_blank" href="mailto:contact@rudrakshamultispecialityhospial.com">
                            <i class="fa-solid fa-envelope" aria-hidden="true"></i> contact@rudrakshamultispecialityhospial.com </a>
                        </div>
                        <div class="col-auto topheadSocial">
                          <a target="_blank" href="https://www.facebook.com/">
                            <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                          </a>
                          <a target="_blank" href="https://www.instagram.com/">
                            <i class="fa-brands fa-square-instagram" aria-hidden="true"></i>
                          </a>
                          <a target="_blank" href="https://in.linkedin.com/">
                            <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mainLy">

		<button class="navbar-toggler">
			<i class="fa fa-bars" aria-hidden="true"></i>
		</button>
		<ul class="navbar-nav">
			<li class="nav-close">
				<button class="btn-nav-close">
					<span class="close-btn">+</span>
				</button>
			</li>
       <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="aboutUs.html">About Us</a>
      </li>

			<li class="nav-item">
				<a href="#" class="nav-link">Our Treatments </a>
				<ul class="dropdown">
					<li class="nav-item">
						<a href="#" class="nav-link">Eye Care </a>
						<ul class="dropdown">
							<li class="nav-item">
								<a href="cataract.html" class="nav-link">Cataract </a>
							</li>
							<li class="nav-item">
								<a href="LASIK_AndRefractiveError.html" class="nav-link">Lasik & Refractive Error </a>
							</li>
							<li class="nav-item">
								<a href="Pterygium.html" class="nav-link">Pterygium </a>
							</li>
							<li class="nav-item">
								<a href="glaucoma.html" class="nav-link">Glaucoma </a>
							</li>
							<li class="nav-item">
								<a href="dryEye.html" class="nav-link">Dry Eye </a>
							</li>
							<li class="nav-item">
								<a href="retinaTreatment.html" class="nav-link">Retina Treatment</a>
							</li>
						</ul>
					</li>

					<li class="nav-item">
						<a href="#" class="nav-link">Diabetes </a>
						<ul class="dropdown">
							<li class="nav-item">
								<a href="typeOneDiabetes.html" class="nav-link">Type 1 Diabetes </a>
							</li>
							<li class="nav-item">
								<a href="typeTwoDiabetes.html" class="nav-link">Type 2 Diabetes </a>
							</li>
							<li class="nav-item">
								<a href="gestationalDiabetes.html" class="nav-link">Gestational Diabetes </a>
							</li>
						</ul>
					</li>

					<li class="nav-item">
						<a href="#" class="nav-link">Internal Medicine </a>
						<ul class="dropdown">
							<li class="nav-item">
								<a href="lifestyleDiseases.html" class="nav-link">Lifestyle Diseases </a>
							</li>
							<li class="nav-item">
								<a href="Dengue.html" class="nav-link">Dengue </a>
							</li>
							<li class="nav-item">
								<a href="CV_Stroke.html" class="nav-link">CV Stroke </a>
							</li>
							<li class="nav-item">
								<a href="convulsion.html" class="nav-link">Convulsion </a>
							</li>
							<li class="nav-item">
								<a href="Jaundice.html" class="nav-link">Jaundice </a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
      <li class="nav-item">
        <a href="diabetes.html" class="nav-link">Diabetes</a>
      </li>
      <li class="nav-item">
        <a href="contactUs.html" class="nav-link">Contact</a>
      </li>
		</ul>
  <button type="button" class="btn btnFill rounded-0" data-bs-toggle="modal" data-bs-target="#appointmentModal">
    <i class="fa-regular fa-calendar-days" aria-hidden="true"></i> Book Appointment
  </button>

                  </div>
                </div>
              </div>
            </nav>
          </div>`; // Keep your current header HTML here

           

  document.getElementById("footer").innerHTML = ` <div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/BrandLogo.webp" alt="Fast Taxi">
              </a>
              <p>
                At Rudraksha Medical, we’re dedicated to providing advanced, compassionate eye care for every stage of life. From routine exams to specialized treatments, your vision is our priority.
              </p>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH">Helpfull Links</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="aboutUs.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>About Us</a>
                </li>
                <li>
                  <a class="footerLinks" href="diabetes.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Diabetes</a>
                </li>
                <li>
                  <a class="footerLinks" href="contactUs.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH ">Treatments</h5>
              <ul>   
                 <li><a href="cataract.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Cataract</a></li> 
                 <li><a href="LASIK_AndRefractiveError.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Lasik &amp; Refractive Error</a></li> 
                 <li><a href="Pterygium.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Pterygium</a></li> 
                 <li><a href="glaucoma.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Glaucoma</a></li> 
                 <li><a href="dryEye.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Dry Eye </a></li> 
                 <li><a href="retinaTreatment.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Retina Treatment</a></li> 
              </ul>
            </div>
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
              <h5 class="fourthH ">Contact Us</h5>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/SE1hRCfhRXWdvM8K7">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                      <pre class="mb-0">
4th floor, Push'p hub complex,
opp. L&T health and dialysis center,
Chistiya Nagar, Chhani Jakatnaka,
Vadodara, Gujarat 390002</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+916353647003" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>+91 63536 47003</a>
                </li>
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:contact@rudrakshamultispecialityhospial.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>contact@rudrakshamultispecialityhospial.com</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=916353647003">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Rudraksha Multispecialty Hospital | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> `; // Keep your current footer HTML here

    document.getElementById("modalFormWrapper").innerHTML = `<div class="modal fade" id="appointmentModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="appointmentLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="appointmentLabel">Book Appointment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form class="row g-3 needs-validation" id="contactForm" novalidate>
          <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Name<span>*</span></label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="invalid-feedback">Please enter your name.</div>
          </div>

          <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label">Email<span>*</span></label>
            <input type="email" class="form-control" id="validationCustomUsername" required>
            <div class="invalid-feedback">Please enter your email.</div>
          </div>

          <div class="col-md-6">
            <label for="PhoneNo" class="form-label">Phone No.<span>*</span></label>
            <input type="number" class="form-control" id="PhoneNo" required>
            <div class="invalid-feedback">Please enter your phone number.</div>
          </div>

          <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Appointment Date<span>*</span></label>
            <input type="text" class="form-control" id="validationCustom02" required>
            <div class="invalid-feedback">Please enter the Appointment Date.</div>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">Message<span>*</span></label>
            <textarea class="form-control" id="validationTextarea" rows="6" required></textarea>
            <div class="invalid-feedback">Please enter a message.</div>
          </div>

          
          <div class="d-md-none mb-2">
            <button type="button" id="whatsappStandardBtn" class="btn btnFill rounded me-lg-2 w-50">WhatsApp Standard</button>
            <button type="button" id="whatsappBusinessBtn" class="btn btnFill rounded w-50">WhatsApp Business</button>
          </div>

          
          <button id="desktopBtn" type="submit" class="btn btnFill d-none d-md-inline-block rounded">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  </div>
</div>`
    document.getElementById("fabContainer").innerHTML = ` <!-- whatsapp FAB icon -->
    <div class="fab-container">
      <a class="set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=916353647003">
        <svg xmlns="http://www.w3.org/2000/svg" width="59.54px" height="60px" viewBox="0 0 256 258">
          <defs>
            <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#1faf38"></stop>
              <stop offset="100%" stop-color="#60d669"></stop>
            </linearGradient>
            <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#f9f9f9"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path>
          <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path>
          <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path>
        </svg>
      </a>
    </div>
    <!-- Call FAB icon -->
    <div class="Call-fab-container">
      <a rel="noopener" target="_blank" href="tel:+916353647003">
        <img style="height: 60px; width: 60px" src="image/phone-call.png" alt="phone icon" />
      </a>
    </div>`// Keep your current Fab HTML here
  callback?.();
}
// ✅ Highlight the active link in the navigation
function highlightActiveNavLink() {
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;

    if (href === currentPage) {
      link.classList.add("active");

      // Highlight parent navLink in dropdown if nested
      const parentLink = link.closest(".dropdown")?.closest(".nav-item")?.querySelector(".nav-link");
      parentLink?.classList.add("active");
    }
  });
}

// ✅ Sticky header logic on scroll
function handleStickyHeader() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  if (!header || !belowContent) return;

  const scrollTop = window.pageYOffset;
  const stickyPoint = header.offsetTop + header.offsetHeight + 5;
  const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

  if (scrollTop > stickyPoint) {
    header.classList.add("sticky-header", "visible");
    header.classList.remove("headerAnimate");
  } else if (scrollTop < resetPoint) {
    header.classList.remove("sticky-header", "visible");
    header.classList.add("headerAnimate");
  }
}

// ✅ Initialize sticky header listeners
function initStickyHeader() {
  window.addEventListener("scroll", handleStickyHeader);
  window.addEventListener("load", handleStickyHeader);
}

// ✅ Mobile-only nav toggle and submenu toggle
function initMobileNavToggle() {

  /* Navbar toggler */
const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
	navbarNav.classList.remove("active");
});



/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
	const hasDropdowns = item.querySelector(".dropdown") !== null;

	if (hasDropdowns) {
		// Create the SVG element
		const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svgIcon.setAttribute("width", "16");
		svgIcon.setAttribute("height", "16");
		svgIcon.setAttribute("viewBox", "0 0 24 24");
		svgIcon.setAttribute("fill", "currentColor");

		// Add a path to the SVG (example: down arrow)
		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"); 
		svgIcon.appendChild(path);




		// Append the SVG to the nav item
		item.querySelector("a").appendChild(svgIcon);
	}
});


}



// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = "https://api.whatsapp.com/send?phone=916353647003";
  const desktopLink = "https://web.whatsapp.com/send?phone=916353647003";

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


(function () {

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
})();

$(document).ready(function () {
  const phoneNumber = "916353647003";

  // Construct WhatsApp message from form
  function constructWhatsAppMessage() {
    const name = $("#validationCustom01").val();
    const email = $("#validationCustomUsername").val();
    const phone = $("#PhoneNo").val();
    const bookingDate = $("#validationCustom02").val();
    const message = $("#validationTextarea").val();
    return `Hello, I want an appointment:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAppointment Date: ${bookingDate}\nMessage: ${message}`;
  }

  // Validate form, add validation styles
  function validateForm() {
    const form = document.querySelector("#contactForm");
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return false;
    }
    return true;
  }

  // Clear and reset form validation
  function clearForm() {
    const form = document.querySelector("#contactForm");
    form.reset();
    form.classList.remove("was-validated");
  }

  // Common function to open WhatsApp with correct URL schema
  function openWhatsApp(encodedMessage, isBusiness) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      const packageName = isBusiness ? "com.whatsapp.w4b" : "com.whatsapp";
      window.location.href = `intent://send?phone=${phoneNumber}&text=${encodedMessage}#Intent;scheme=whatsapp;package=${packageName};end`;
    } else {
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
  }

  // Desktop button - open WhatsApp Web
  $("#desktopBtn").off("click").on("click", function (event) {
    event.preventDefault();
    if (!validateForm()) return;

    const encodedMessage = encodeURIComponent(constructWhatsAppMessage());
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappWebUrl, "_blank");
    clearForm();
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
    modalInstance.hide();
  });

  // Mobile WhatsApp Standard button
  $("#whatsappStandardBtn").off("click").on("click", function () {
    if (!validateForm()) return;
    const encodedMessage = encodeURIComponent(constructWhatsAppMessage());
    openWhatsApp(encodedMessage, false);
    clearForm();
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
    modalInstance.hide();
  });

  // Mobile WhatsApp Business button
  $("#whatsappBusinessBtn").off("click").on("click", function () {
    if (!validateForm()) return;
    const encodedMessage = encodeURIComponent(constructWhatsAppMessage());
    openWhatsApp(encodedMessage, true);
    clearForm();
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
    modalInstance.hide();
  });
});

})();


