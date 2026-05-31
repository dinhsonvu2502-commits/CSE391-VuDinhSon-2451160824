# Phần A
## Câu A1

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | Có | Theo luồng tài liệu (mặc định) | Có | Dành cho các phần tử bình thường |
| `relative` | Có | Theo vị trí gốc của nó | Có | Tinh chỉnh vị trí, làm mốc cho absolute |
| `absolute` | Không | Phần tử cha có định vị gần nhất | Có | Đặt badge, icon, các thành phần chồng lớp |
| `fixed` | Không | Khung nhìn (viewport) của trình duyệt | Không | Header, nút cuộn lên đầu trang (luôn cố định) |
| `sticky` | Có | Phần tử cha có thể cuộn gần nhất | Một phần | Giữ tiêu đề bảng hoặc menu khi cuộn trang |

### Câu hỏi thêm
1. absolute tham chiếu body khi không có phần tử cha nào có position khác static (gọi là non-static).

2. Nearest positioned ancestor: Là phần tử cha gần nhất trong cây DOM có thuộc tính position là relative, absolute, fixed hoặc sticky.

## Câu A2
1. Flex: 4 items dàn ngang, độ rộng bằng nhau (chia đều 100% container).

2. Flex wrap: 2 hàng, mỗi hàng 2 items (vì 45% + 2.5%*2 = 50% mỗi item, 2 item chiếm 100%, item thứ 3 xuống dòng).

3. Flex: 3 items, item đầu sát lề trái, item cuối sát lề phải, item giữa nằm chính giữa khoảng trống.

4. Grid: 3 cột: Cột 1 cố định 200px, cột 2 co giãn (1fr), cột 3 cố định 200px.

5. Grid: 3 hàng. (7/3 = 2 dư 1). Hàng 1, 2 mỗi hàng 3 items; hàng 3 có 1 item ở cột 1 (vị trí grid-column: 1).

# Phần C
## Câu C1
1. Navbar: Flexbox. Tốt nhất để phân bổ nhóm items (trái/giữa/phải) trên một trục.

2. Instagram Grid: Grid. Dễ dàng tạo lưới đều nhau bằng repeat(3, 1fr).

3. Blog Layout: Grid. Rất mạnh trong việc chia vùng (Main + Sidebar) theo tỷ lệ cố định.

4. Footer 4 cột: Grid. Phân chia 4 phần bằng nhau nhanh chóng.

5. Card sản phẩm: Kết hợp. Dùng Flexbox cho card cha để quản lý layout dọc (ảnh-text-nút) và margin-top: auto để căn nút.

## Câu C2
Lỗi 1 (Chiều cao card không đều): Do align-items mặc định là stretch.

Sửa: Thêm align-items: stretch; vào .card-container. Để nút dính đáy, .card phải là display: flex; flex-direction: column; và nút dùng margin-top: auto;.

```css
.card-container { display: flex; flex-wrap: wrap; align-items: stretch; } /* Đảm bảo các card bằng chiều cao hàng */
.card { 
    display: flex; 
    flex-direction: column; /* Quan trọng: Xếp theo cột */
    width: 30%; margin: 1.5%; 
}
.card .btn { margin-top: auto; } /* Tự động đẩy nút xuống đáy */

Lỗi 2 (Item dính góc): Thiếu thuộc tính căn giữa.

Sửa: Thêm justify-content: center; align-items: center; vào .hero.
```css
.hero {
    height: 100vh;
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center;     /* Căn giữa theo chiều dọc */
}

Lỗi 3 (Sidebar bị co): Flex item mặc định có flex-shrink: 1.

Sửa: Thêm flex-shrink: 0; vào .sidebar để nó giữ nguyên kích thước 250px.
```css
.sidebar { 
    width: 250px; 
    flex-shrink: 0; /* Không cho phép sidebar co lại */
}
.content { flex: 1; }