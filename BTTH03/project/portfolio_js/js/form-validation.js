document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            let isValid = true;

            const nameInput = document.getElementById("contactName");
            if (nameInput) {
                if (nameInput.value.trim() === "") {
                    nameInput.classList.add("is-invalid");
                    isValid = false;
                } else {
                    nameInput.classList.remove("is-invalid");
                    nameInput.classList.add("is-valid");
                }
            }

            const emailInput = document.getElementById("contactEmail");
            if (emailInput) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value.trim())) {
                    emailInput.classList.add("is-invalid");
                    isValid = false;
                } else {
                    emailInput.classList.remove("is-invalid");
                    emailInput.classList.add("is-valid");
                }
            }

            const messageInput = document.getElementById("contactMessage");
            if (messageInput) {
                if (messageInput.value.trim() === "") {
                    messageInput.classList.add("is-invalid");
                    isValid = false;
                } else {
                    messageInput.classList.remove("is-invalid");
                    messageInput.classList.add("is-valid");
                }
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
                
                const validInputs = contactForm.querySelectorAll(".is-valid");
                validInputs.forEach(input => input.classList.remove("is-valid"));
            }
        });

        const inputs = contactForm.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                if (input.classList.contains("is-invalid")) {
                    if (input.id === "contactEmail") {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (emailPattern.test(input.value.trim())) {
                            input.classList.remove("is-invalid");
                        }
                    } else if (input.value.trim() !== "") {input.classList.remove("is-invalid");
                    }
                }
            });
        });
    }
});