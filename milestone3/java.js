fetch('/milestone3/get_comments.php')
    .then(res => res.json())
    .then(comments => {
        const container = document.getElementById('comments-container');
        if (comments.length === 0) {
            container.innerHTML = "<p>No comments yet. Be the first!</p>";
            return;
        }
        container.innerHTML = comments.map(c => `
            <div class="comment-box">
                <h4>${escapeHtml(c.username)} <span>on ${c.created_at}</span></h4>
                <p>${escapeHtml(c.comment_text).replace(/\n/g, '<br>')}</p>
            </div>
        `).join('');
    })
    .catch(err => console.error('Failed to load comments:', err));

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

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