document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchForm.classList.toggle("hidden");
        searchForm.classList.toggle("visible");
        searchInput.focus();
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        if (query) {
            const regex = new RegExp(query, "gi");
            const elements = document.body.getElementsByTagName("*");
            let found = false;

            for (let element of elements) {
                if (element.textContent.match(regex)) {
                    found = true;
                    element.scrollIntoView({ behavior: "smooth" });
                    element.style.backgroundColor = "rgba(243, 150, 28, 0.5)"; // Destaque temporário com opacidade
                    setTimeout(() => {
                        element.style.backgroundColor = "";
                    }, 2000);
                }
            }

            if (!found) {
                alert("Item não encontrado!");
            }

            searchInput.value = "";
            searchForm.classList.toggle("hidden");
            searchForm.classList.toggle("visible");
        }
    }); 
});   

document.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('click', function(event){
        const formElement = document.querySelector('.form');
        console.log('Elemento clicado:', event.target);

        if(event.target.closest('.nav-user, .already-account')) {
            console.log('Login clicado');
            formElement.classList.add('login-active');
            formElement.classList.remove('signup-active');
        }
    
        if(event.target.closest('.signup-btn')) {
            console.log('Signup clicado');
            formElement.classList.add('signup-active');
            formElement.classList.remove('login-active');
        }        
        
        if(event.target.closest('.form-cancel')) {
            console.log('Cancelar clicado');
            formElement.classList.remove('login-active');
            formElement.classList.remove('signup-active');
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const blogBoxes = document.querySelectorAll(".blog .blog-details .blog-box");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                    console.log("Classe 'appear' adicionada a:", entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    blogBoxes.forEach(box => {
        observer.observe(box);
    });
});

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    pagination: {
        el: '.swiper2-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
