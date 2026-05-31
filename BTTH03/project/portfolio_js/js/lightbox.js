document.addEventListener("DOMContentLoaded", () => {
    const lightboxModal = document.createElement("div");
    lightboxModal.id = "lightbox-modal";
    Object.assign(lightboxModal.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1100",
        opacity: "0",
        transition: "opacity 0.3s ease"
    });

    const lightboxImg = document.createElement("img");
    Object.assign(lightboxImg.style, {
        maxWidth: "90%",
        maxHeight: "85%",
        borderRadius: "8px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        transform: "scale(0.9)",
        transition: "transform 0.3s ease"
    });

    lightboxModal.appendChild(lightboxImg);
    document.body.appendChild(lightboxModal);

    const images = document.querySelectorAll(".open-lightbox");
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxModal.style.display = "flex";
            setTimeout(() => {
                lightboxModal.style.opacity = "1";
                lightboxImg.style.transform = "scale(1)";
            }, 10);
        });
    });

    lightboxModal.addEventListener("click", () => {
        lightboxModal.style.opacity = "0";
        lightboxImg.style.transform = "scale(0.9)";
        setTimeout(() => {
            lightboxModal.style.display = "none";
        }, 300);
    });
});