# Kiến trúc cây Component — Dự án ShopVN

## 1. Sơ đồ cây Component (Component Tree)
graph TD
    App[Component: App]
    App --> Navbar[Component: Navbar]
    App --> Hero[Component: Hero]
    App --> ProductGrid[Component: ProductGrid]
    ProductGrid --> ProductCard1[Component: ProductCard - Sp 1]
    ProductGrid --> ProductCard2[Component: ProductCard - Sp 2]
    ProductGrid --> ProductCard3[Component: ProductCard - Sp 3]
    ProductGrid --> ProductCard4[Component: ProductCard - Sp 4]
    App --> Footer[Component: Footer]

## 2. Danh sách Props của mỗi Component
-Component Navbar:

logo: Kiểu string (Tên thương hiệu).

links: Kiểu Array<Object> (Mảng chứa cấu trúc mục điều hướng [{ label, href }]).

-Component Hero:

title: Kiểu string (Tiêu đề lớn chính).

subtitle: Kiểu string (Đoạn mô tả ngắn phụ).

buttonText: Kiểu string (Nội dung hiển thị của nút bấm kêu gọi hành động).

-Component ProductGrid:

title: Kiểu string (Tiêu đề của phần danh mục sản phẩm).

products: Kiểu Array<Object> (Mảng chứa danh sách các mặt hàng thương mại).

-Component ProductCard:

image: Kiểu string (Đường dẫn URL hình ảnh sản phẩm).

name: Kiểu string (Tên sản phẩm).

price: Kiểu string (Định dạng chuỗi giá tiền).

-Component Footer:

text: Kiểu string (Dòng thông tin chữ chân trang).
## 3. Lý do bóc tách cấu trúc thành phần (Component Extraction)
1. Khả năng tái sử dụng mã nguồn (Reusability): Navbar và Footer là cấu trúc cố định xuất hiện ở tất cả các trang con sau này. Việc bóc tách giúp ta chỉ cần gọi component thay vì copy lại đống mã HTML thô. ProductCard hoạt động như một cái khuôn (Blueprint), giúp render hàng loạt dữ liệu dynamic mà không lo trùng lặp code.

2. Đơn giản hóa khâu bảo trì (Maintainability): Khi bạn muốn chỉnh sửa cấu trúc hiển thị bên trong thẻ sản phẩm (ví dụ: bổ sung thêm nút "Yêu thích" hoặc thay đổi kiểu đổ bóng), bạn chỉ cần mở đúng component ProductCard ra sửa một lần duy nhất, giao diện toàn trang sẽ tự cập nhật đồng bộ.

3. Tách biệt trách nhiệm hiển thị (Separation of Concerns): ProductGrid chịu trách nhiệm giữ bố cục hiển thị (CSS Grid Layout) và xử lý trạng thái hiển thị lỗi/trống khi không có sản phẩm (Empty State). Nó không cần quan tâm bên trong một chiếc Card sản phẩm chứa những thẻ HTML nào.

