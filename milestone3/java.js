let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


document.getElementById('version').addEventListener('change', function() {     
    const selectedVersion = this.value;     
    const downloadBtn = document.getElementById('download-button');     
    
    // Get the path, remove trailing slashes, and extract the file name
    const path = window.location.pathname.replace(/\/\$/, '');
    let currentFileName = path.split('/').pop() || 'index'; 
    
    // Corrected .replace() by adding the second argument
    currentFileName = currentFileName.replace('.html', '');
         
    if (selectedVersion) {         
        const newFileName = `/downloads/${currentFileName}/${currentFileName}-${selectedVersion}.txt`;
        downloadBtn.href = newFileName;         
        downloadBtn.setAttribute('download', newFileName);    
    } 
    else {
        alert("Please select an option.")
    }
});
