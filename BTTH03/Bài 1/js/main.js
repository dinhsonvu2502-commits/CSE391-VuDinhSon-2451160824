document.addEventListener("DOMContentLoaded", () => {
    const studentTableBody = document.getElementById("studentTableBody");
    const totalStudentsSpan = document.getElementById("totalStudents");
    const averageScoreSpan = document.getElementById("averageScore");
    const studentForm = document.getElementById("studentForm");
    const bsStudentModal = new bootstrap.Modal(document.getElementById("studentModal"));

    let students = JSON.parse(localStorage.getItem("students")) || [];

    function renderStudents() {
        studentTableBody.innerHTML = "";
        if (students.length === 0) {
            studentTableBody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-3">Chưa có sinh viên nào</td></tr>`;
            return;
        }
        students.forEach((s, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.date.split("-").reverse().join("/")}</td>
                <td>${s.className}</td>
                <td><span class="badge bg-primary">${parseFloat(s.gpa).toFixed(1)}</span></td>
                <td>${s.email}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning me-1" onclick="openEditStudent(${idx})"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStudent(${idx})"><i class="bi bi-trash"></i></button>
                </td>
            `;
            studentTableBody.appendChild(tr);
        });
    }

    function updateStudentStats() {
        totalStudentsSpan.textContent = students.length;
        if (students.length === 0) {
            averageScoreSpan.textContent = "0.0";
            return;
        }
        const totalGpa = students.reduce((sum, s) => sum + parseFloat(s.gpa), 0);
        averageScoreSpan.textContent = (totalGpa / students.length).toFixed(1);
    }

    document.getElementById("btnOpenStudentModal").addEventListener("click", () => {
        studentForm.reset();
        document.getElementById("studentEditIndex").value = "";
        document.getElementById("studentId").disabled = false;
        document.getElementById("studentModalTitle").textContent = "Thêm Sinh Viên Mới";
        studentForm.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-invalid", "is-valid"));
        bsStudentModal.show();
    });

    window.openEditStudent = function(idx) {
        const s = students[idx];
        document.getElementById("studentEditIndex").value = idx;
        document.getElementById("studentId").value = s.id;
        document.getElementById("studentId").disabled = true;
        document.getElementById("studentName").value = s.name;
        document.getElementById("studentDate").value = s.date;
        document.getElementById("studentClass").value = s.className;
        document.getElementById("studentGpa").value = s.gpa;
        document.getElementById("studentEmail").value = s.email;
        document.getElementById("studentModalTitle").textContent = "Cập Nhật Thông Tin Sinh Viên";
        studentForm.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-invalid", "is-valid"));
        bsStudentModal.show();
    };

    window.deleteStudent = function(idx) {
        if (confirm(`Bạn chắc chắn muốn xóa sinh viên: ${students[idx].name}?`)) {
            students.splice(idx, 1);
            localStorage.setItem("students", JSON.stringify(students));
            renderStudents();
            updateStudentStats();
        }
    };

    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (typeof window.validateStudentForm === "function" && !window.validateStudentForm(students)) return;

        const idx = document.getElementById("studentEditIndex").value;
        const studentData = {
            id: document.getElementById("studentId").value.trim(),
            name: document.getElementById("studentName").value.trim(),
            date: document.getElementById("studentDate").value,
            className: document.getElementById("studentClass").value.trim(),
            gpa: document.getElementById("studentGpa").value,
            email: document.getElementById("studentEmail").value.trim()
        };

        if (idx === "") { students.push(studentData); } 
        else { students[idx] = studentData; }

        localStorage.setItem("students", JSON.stringify(students));
        renderStudents();
        updateStudentStats();
        bsStudentModal.hide();
    });

    renderStudents();
    updateStudentStats();
});