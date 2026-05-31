document.addEventListener("DOMContentLoaded", () => {
    window.validateStudentForm = function(currentStudentsList) {
        let isFormValid = true;

        const idInput = document.getElementById("studentId");
        const nameInput = document.getElementById("studentName");
        const dateInput = document.getElementById("studentDate");
        const classInput = document.getElementById("studentClass");
        const gpaInput = document.getElementById("studentGpa");
        const emailInput = document.getElementById("studentEmail");
        const editIdx = document.getElementById("studentEditIndex").value;

        if (idInput.value.trim() === "") {
            idInput.classList.add("is-invalid");
            document.getElementById("studentIdError").textContent = "Mã sinh viên không được bỏ trống.";
            isFormValid = false;
        } else {
            const duplicate = currentStudentsList.some((s, i) => s.id.toLowerCase() === idInput.value.trim().toLowerCase() && i != editIdx);
            if (duplicate) {
                idInput.classList.add("is-invalid");
                document.getElementById("studentIdError").textContent = "Mã sinh viên đã tồn tại.";
                isFormValid = false;
            } else {
                idInput.classList.remove("is-invalid");
                idInput.classList.add("is-valid");
            }
        }

        if (nameInput.value.trim().length < 2) { nameInput.classList.add("is-invalid"); isFormValid = false; }
        else { nameInput.classList.remove("is-invalid"); nameInput.classList.add("is-valid"); }

        if (dateInput.value === "" || new Date(dateInput.value) >= new Date()) { dateInput.classList.add("is-invalid"); isFormValid = false; }
        else { dateInput.classList.remove("is-invalid"); dateInput.classList.add("is-valid"); }

        if (classInput.value.trim() === "") { classInput.classList.add("is-invalid"); isFormValid = false; }
        else { classInput.classList.remove("is-invalid"); classInput.classList.add("is-valid"); }

        const score = parseFloat(gpaInput.value);
        if (isNaN(score) || score < 0 || score > 10 || gpaInput.value === "") { gpaInput.classList.add("is-invalid"); isFormValid = false; }
        else { gpaInput.classList.remove("is-invalid"); gpaInput.classList.add("is-valid"); }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(emailInput.value.trim())) { emailInput.classList.add("is-invalid"); isFormValid = false; }
        else { emailInput.classList.remove("is-invalid"); emailInput.classList.add("is-valid"); }

        return isFormValid;
    };
});