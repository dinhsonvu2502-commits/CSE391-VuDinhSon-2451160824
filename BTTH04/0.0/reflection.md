# Reflection: Tầm quan trọng của React thông qua bài toán Todo List

### 1. Phân tích thao tác trong Phần A (Vanilla JS)
Mỗi lần dữ liệu thay đổi (Thêm/Xóa/Đổi trạng thái), chúng ta phải gọi tường minh **2 hàm phối hợp**:
* **Khi Thêm:** Gọi `addTodo()` để xử lý mảng, sau đó bắt buộc phải gọi tiếp `renderTodos()` bên trong.
* **Khi Đổi trạng thái (Toggle):** Gọi `toggleTodo(id)` cập nhật thuộc tính, sau đó phải gọi lại `renderTodos()`.
* **Khi Xóa:** Gọi `deleteTodo(id)` lọc mảng, sau đó lại phải gọi `renderTodos()`.

**Nỗi đau:** Lập trình viên phải tự quản lý việc "Khi nào cần vẽ lại giao diện". Nếu quên gọi `renderTodos()`, dữ liệu trong bộ nhớ (`todos`) và những gì người dùng nhìn thấy trên màn hình sẽ không đồng nhất.

---

### 2. Phân tích hành vi của React trong Phần B
Trong React, khi hàm cập nhật trạng thái `setTodos(...)` được kích hoạt, React sẽ tự động:
1. Ghi nhận dữ liệu mới vào trạng thái nội tại (`state`).
2. Tự động tính toán lại và chạy lại (re-render) Component `TodoApp`.
3. So sánh cấu trúc ảo (Virtual DOM) để tìm ra điểm khác biệt nhỏ nhất và cập nhật trực tiếp xuống giao diện thật một cách tối ưu.

**Lợi ích:** Lập trình viên hoàn toàn giải phóng khỏi tư duy can thiệp trực tiếp vào DOM (không dùng `document.getElementById`, không `innerHTML`). Bạn chỉ việc quản lý dữ liệu (`State`), giao diện sẽ tự động đi theo dữ liệu (`UI = f(State)`).

---

### 3. Khả năng mở rộng cho Portfolio với 50 dự án
Nếu Portfolio của Minh tăng lên 50 dự án, sử dụng **React (Cách B) an toàn và hiệu quả hơn rất nhiều** vì:
* **Hiệu năng cao hơn:** DOM thuần dùng `innerHTML = ...` sẽ xóa sạch 50 phần tử cũ rồi dựng lại từ đầu, gây hiện tượng giật/lag giao diện. React chỉ sửa đổi duy nhất node dự án bị thay đổi nhờ Virtual DOM.
* **Bảo trì dễ dàng:** Tránh lỗi cấu trúc chuỗi HTML. Ở DOM thuần, việc viết chuỗi String template lồng sự kiện `onclick="..."` rất dễ viết sai cú pháp hoặc nhầm dấu ngoặc, trong khi JSX có hệ thống báo lỗi (Compile-error) chính xác và rõ ràng.

---

### 4. Kết nối thực tế áp dụng vào Portfolio dự án
Tư duy `useState` kết hợp `.map()` và `.filter()` áp dụng trực tiếp vào Portfolio của Minh theo cơ chế:
* **State `projects`:** Thay vì chứa danh sách chuỗi việc cần làm, state này sẽ lưu một mảng các Object chứa thông tin dự án dạng: `{ id, title, image, category, githubLink }`.
* **Sử dụng `.map()`:** Dùng để duyệt qua mảng dữ liệu dự án, tự động chuyển đổi mỗi Object thành một cấu trúc `<ProjectCard project={item} />` hoàn chỉnh mà không cần thực hiện nối chuỗi.
* **Sử dụng `.filter()`:** Khi người dùng click vào các nút bộ lọc phân loại (ví dụ: "Frontend", "Backend", "Fullstack"), chúng ta chỉ cần chạy `.filter()` dựa trên thuộc tính `category` của mảng dữ liệu trước khi `.map()`. Giao diện lập tức hiển thị chính xác các dự án tương ứng mà không phải can thiệp thủ công vào các thuộc tính hiển thị `display: none` hay `display: block` của CSS.