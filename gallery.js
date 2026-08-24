// Lightbox simples para ampliar fotos da galeria (usado em inauguracao.html)
document.addEventListener("DOMContentLoaded", function () {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.querySelector(".lightbox-close");

    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-item").forEach(function (item) {
        item.addEventListener("click", function () {
            var full = item.getAttribute("data-full");
            var img = item.querySelector("img");
            openLightbox(full, img ? img.alt : "");
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
    });
});
