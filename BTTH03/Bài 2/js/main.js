document.addEventListener("DOMContentLoaded", () => {
    const taskContainer = document.getElementById("taskContainer");
    const taskForm = document.getElementById("taskForm");
    const bsTaskModal = new bootstrap.Modal(document.getElementById("taskModal"));

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskContainer.innerHTML = "";
        if (tasks.length === 0) {
            taskContainer.innerHTML = `<div class="col-12 text-center text-muted py-4">Chưa có công việc nào cần xử lý</div>`;
            return;
        }

        tasks.forEach((t, idx) => {
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4";
            
            let borderClass = "border-start border-3 border-info";
            if (t.priority === "Cao") borderClass = "border-start border-3 border-danger";
            if (t.priority === "Thấp") borderClass = "border-start border-3 border-secondary";

            col.innerHTML = `
                <div class="card h-100 shadow-sm ${borderClass}">
                    <div class="card-body d-flex flex-column justify-content-between p-3">
                        <div>
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title fw-bold mb-0 ${t.done ? 'task-done-text' : ''}">${t.title}</h5>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" ${t.done ? 'checked' : ''} onclick="toggleTaskStatus(${idx})">
                                </div>
                            </div>
                            <p class="card-text text-muted small mb-2 ${t.done ? 'task-done-text' : ''}">${t.desc || 'Không có mô tả'}</p>
                        </div>
                        <div class="mt-3 pt-2 border-top d-flex justify-content-between align-items-center">
                            <span class="small text-secondary"><i class="bi bi-calendar-event me-1"></i>Hạn: ${t.deadline.split("-").reverse().join("/")}</span>
                            <div>
                                <button class="btn btn-sm btn-outline-warning py-0 px-2 me-1" onclick="openEditTask(${idx})"><i class="bi bi-pencil"></i></button>
                                <button class="btn btn-sm btn-outline-danger py-0 px-2" onclick="deleteTask(${idx})"><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            taskContainer.appendChild(col);
        });
    }

    function updateTaskStats() {
        document.getElementById("totalTasks").textContent = tasks.length;
        const completed = tasks.filter(t => t.done).length;
        document.getElementById("completedTasks").textContent = completed;
        document.getElementById("pendingTasks").textContent = tasks.length - completed;
    }

    document.getElementById("btnOpenTaskModal").addEventListener("click", () => {
        taskForm.reset();
        document.getElementById("taskEditIndex").value = "";
        document.getElementById("taskModalTitle").textContent = "Thêm Công Việc Mới";
        taskForm.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-invalid"));
        bsTaskModal.show();
    });

    window.toggleTaskStatus = function(idx) {
        tasks[idx].done = !tasks[idx].done;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        updateTaskStats();
    };

    window.openEditTask = function(idx) {
        const t = tasks[idx];
        document.getElementById("taskEditIndex").value = idx;
        document.getElementById("taskTitle").value = t.title;
        document.getElementById("taskDesc").value = t.desc;
        document.getElementById("taskDeadline").value = t.deadline;
        document.getElementById("taskPriority").value = t.priority;
        document.getElementById("taskModalTitle").textContent = "Cập Nhật Công Việc";
        taskForm.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-invalid"));
        bsTaskModal.show();
    };

    window.deleteTask = function(idx) {
        if (confirm("Xóa bỏ công việc này?")) {
            tasks.splice(idx, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
            updateTaskStats();
        }
    };

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("taskTitle");
        const deadlineInput = document.getElementById("taskDeadline");
        let valid = true;

        if (titleInput.value.trim() === "") { titleInput.classList.add("is-invalid"); valid = false; }
        if (deadlineInput.value === "") { deadlineInput.classList.add("is-invalid"); valid = false; }
        if (!valid) return;

        const idx = document.getElementById("taskEditIndex").value;
        const taskData = {
            title: titleInput.value.trim(),
            desc: document.getElementById("taskDesc").value.trim(),
            deadline: deadlineInput.value,
            priority: document.getElementById("taskPriority").value,
            done: idx !== "" ? tasks[idx].done : false
        };

        if (idx === "") { tasks.push(taskData); } 
        else { tasks[idx] = taskData; }

        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        updateTaskStats();
        bsTaskModal.hide();
    });

    renderTasks();
    updateTaskStats();
});