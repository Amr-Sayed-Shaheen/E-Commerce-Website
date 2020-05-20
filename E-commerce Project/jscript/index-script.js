
        var i;
        var slideIndex = 0;
        var dots;
        var slides
        showSlides();



        function showSlides() {

        slides = document.getElementsByClassName("mo");
        dots = document.getElementsByClassName("point");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 6000); 
        }


