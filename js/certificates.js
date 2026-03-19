// Certificates Page Specific Logic

// Modal Zoom Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".cert-img-container img");
const closeBtn = document.querySelector(".close-modal");

if (modal && modalImg && images) {
    images.forEach(img => {
        img.addEventListener("click", function() {
            const src = this.getAttribute("src");
            if (src.toLowerCase().endsWith(".pdf")) {
                window.open(src, "_blank");
            } else {
                modal.style.display = "block";
                modalImg.src = src;
            }
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
