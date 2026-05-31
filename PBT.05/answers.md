# Phần A
## Câu A1
1. Thẻ Meta: <meta name="viewport" content="width=device-width, initial-scale=1.0">

width=device-width: Đặt độ rộng viewport bằng độ rộng màn hình thiết bị.

initial-scale=1.0: Thiết lập mức zoom ban đầu là 100%.

2. Thiếu thẻ này: Trình duyệt sẽ hiển thị trang web với độ rộng mặc định của desktop (thường là 980px), khiến nội dung bị thu nhỏ lại và người dùng phải zoom thủ công.

3. Mobile-First: Viết CSS cho mobile trước (không cần @media), sau đó dùng min-width để ghi đè cho màn hình lớn hơn. Lý do: Giúp trang web tải nhanh hơn trên điện thoại (ít code hơn) và đảm bảo trải nghiệm cơ bản trên thiết bị phổ biến nhất.

## Câu A2
| Breakpoint | Kích thước pixel | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|-------------|------------------|-------------------|---------------------|
| xs | < 576px | Điện thoại dọc | 1 cột |
| sm | ≥ 576px | Điện thoại ngang | 2 cột |
| md | ≥ 768px | Tablet | 2 cột |
| lg | ≥ 992px | Desktop nhỏ / Laptop | 3 cột |
| xl | ≥ 1200px | Desktop lớn | 4 cột |

## Câu A3
| Chiều rộng màn hình | `.container` width |
|---------------------|--------------------|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

## Câu A4
1. Variables: Lưu trữ giá trị dùng lại ($color: #333).

$primary-color: #3498db;
$font-stack: 'Helvetica', sans-serif;

```css
body {
  color: $primary-color;
  font-family: $font-stack;
}

2. Nesting: Viết CSS theo cấu trúc cây (lồng thẻ cha - con).

```css
.navbar {
  background: #333;
  .menu {
    list-style: none;
    li { display: inline-block; }
  }
}

3. Mixins: Tái sử dụng các nhóm thuộc tính (@mixin flex-center { ... }).

```css
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container { @include flex-center; }

4. Extend: Chia sẻ CSS giữa các selector (@extend .button).

```css
.btn {
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-primary {
  @extend .btn;
  background-color: blue;
}

# Phần C
## Câu C1
1. Mobile (375px):

Navigation: Thanh menu trái (Guide) bị ẩn, thay bằng icon Menu (Hamburger ☰) ở góc trên bên trái. Các tab như "Home", "Shorts", "You" được chuyển xuống thanh điều hướng dưới cùng (Bottom Navigation).

Lưới content: Hiển thị 1 cột duy nhất.

Elements ẩn: Phần bình luận, mô tả video bị thu gọn hoặc ẩn bớt. Danh sách video gợi ý nằm ngay dưới video đang phát.

Font size: Nhỏ hơn một chút để tối ưu diện tích trên màn hình nhỏ.

2. Tablet (768px):

Navigation: Thanh menu trái chuyển sang dạng rút gọn (chỉ còn các icon) hoặc hiển thị dạng Overlay.

Lưới content: Chuyển sang hiển thị 2 hoặc 3 cột tùy theo độ rộng.

Elements: Danh sách video gợi ý bắt đầu dàn hàng ngang hoặc giữ nguyên ở cột bên phải.

3. Desktop (1440px):

Navigation: Menu trái hiển thị đầy đủ (Mini sidebar hoặc Full sidebar).

Lưới content: Hiển thị từ 4 đến 5 cột (tùy độ rộng cửa sổ).

Elements: Hiển thị đầy đủ mọi thành phần (Video, mô tả, bình luận, chat trực tiếp).

## Câu C2
1. Wireframe (Sơ đồ bố cục)
- Mobile (375px):

Header: Logo (trái), Nút Menu hamburger (phải).

Hero: Ảnh toàn trang, tiêu đề ở giữa.

Grid: 6 món ăn xếp 1 cột (thứ tự từ trên xuống).

Form: Nằm dưới grid, dạng dọc.

Maps/Footer: Nhúng thẳng bản đồ ở dưới, Footer ẩn bớt link.

- Tablet (768px):

Grid: 6 món ăn xếp 2 cột.

Form: Chuyển sang dạng ngang hoặc giữ dọc nhưng font lớn hơn.

Maps: Hiển thị rõ ràng hơn bên cạnh thông tin liên hệ.

- Desktop (1440px):

Layout: 3 cột (Sidebar thông tin/bản đồ + Main content + Footer).

Grid: 6 món ăn xếp 3 cột.

Form: Đặt ngay trong khu vực nổi bật, dễ nhìn thấy.

2. CSS Skeleton

.container {
    display: grid;
    grid-template-columns: 1fr; /* 1 cột */
    gap: 20px;
}

/* 2. Tablet (≥ 768px) */
@media (min-width: 768px) {
    .food-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 cột */
    }
}

/* 3. Desktop (≥ 1024px) */
@media (min-width: 1024px) {
    .container {
        grid-template-columns: 300px 1fr; /* Sidebar 300px + Main content */
    }
    .food-grid {
        grid-template-columns: repeat(3, 1fr); /* 3 cột */
    }
}
