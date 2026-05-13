# PHIẾU BÀI TẬP 01
## Phần A
## Câu A1
1.DNS Lookup
Trình duyệt gửi yêu cầu đến DNS server để phân giải tên miền shopee.vn thành địa chỉ IP, giúp xác định chính xác máy chủ cần kết nối trên Internet.

2.Thiết lập kết nối (TCP + TLS)
Trình duyệt thực hiện bắt tay TCP để mở đường truyền, sau đó tiến hành TLS handshake để thiết lập mã hóa HTTPS, đảm bảo dữ liệu trao đổi luôn bảo mật.

3.Gửi HTTP Request
Sau khi kênh truyền an toàn được thiết lập, trình duyệt gửi một HTTP request (phương thức GET) để yêu cầu máy chủ cung cấp dữ liệu của trang web Shopee.

4.Server xử lý và trả về Response
Máy chủ nhận yêu cầu, truy xuất dữ liệu từ cơ sở dữ liệu và gửi lại một HTTP response chứa mã trạng thái (200 OK) cùng nội dung mã nguồn HTML.

5.Trình duyệt render trang web
Trình duyệt phân tích HTML để dựng cấu trúc DOM, tải thêm các tệp CSS/JS để định dạng giao diện và xử lý tính năng, sau đó hiển thị trang web hoàn chỉnh cho người dùng.

nguồn tham chiếu: 01_introduction_html_universe.md + Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương


II.
![alt text](image.png)

## Câu A2
1. Lỗi 1: Sử dụng thẻ <div class="header"> thay bằng <header> <!--giúp trình duyệt xác định đây là phần chứa logo và thông tin đầu trang -->
2. Lỗi 2: Sử dụng thẻ <div class="menu"> và các thẻ <div> bên trong cho link thay bằng <nav> và <ul>, <li> <!-- <nav> đánh dấu khu vực điều hướng chính. Danh sách liên kết nên nằm trong thẻ <ul> để máy tìm kiếm hiểu đây là một menu -->
3. Lỗi 3: Tiêu đề sản phẩm dùng <div class="title"> thay bằng <h1> đến <h6> (thường là <h2>) <!-- Các thẻ tiêu đề (h1-h6) giúp Google hiểu cấu trúc phân cấp thông tin và từ khóa chính của trang -->
4. Lỗi 4: Thiếu thuộc tính alt trong thẻ <img> <!-- Giúp Google "đọc" được nội dung hình ảnh và hiển thị khi ảnh lỗi hoặc cho người khiếm thị -->

Sửa code:
<!-- 1. Sửa div header thành thẻ header -->
<header>
    <div class="logo">ShopTLU</div>
    <!-- 2. Sửa div menu thành thẻ nav và danh sách ul/li -->
    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<!-- 3. Sửa div main thành thẻ main -->
<main>
    <!-- Có thể dùng thẻ article cho một đối tượng sản phẩm cụ thể -->
    <article class="product">
        <!-- 4. Sửa div title thành thẻ tiêu đề h2 -->
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>
        <!-- 5. Thêm thuộc tính alt cho hình ảnh -->
        <div class="image">
            <img src="iphone.jpg" alt="Điện thoại iPhone 16 Pro màu Titan">
        </div>
    </article>
</main>

<!-- 6. Sửa div footer thành thẻ footer -->
<footer>
    &copy; 2026 ShopTLU
</footer>

## Câu A3
+-----------------------------------------------------------+
| Hộp 1                                                     |  <-- <div> (Block: Chiếm hết một dòng)
+-----------------------------------------------------------+
| Text A  Text B                                            |  <-- <span> (Inline: Nằm cùng một hàng)
+-----------------------------------------------------------+
| Hộp 2                                                     |  <-- <div> (Block: Tự động xuống dòng mới)
+-----------------------------------------------------------+
| Text C  Text D                                            |  <-- <span> & <strong> (Cùng là Inline)
+-----------------------------------------------------------+
| Hộp 3                                                     |  <-- <div> (Block: Chiếm hết một dòng)
+-----------------------------------------------------------+

# Câu A4
1. Phân biệt <thead, <tbody>, và <tfoot>
<thead> (Table Header): Dùng để nhóm các nội dung tiêu đề của bảng. Thông thường chứa các thẻ <th> để xác định tên các cột dữ liệu.

<tbody> (Table Body): Dòng này chứa nội dung chính (dữ liệu) của bảng. Một bảng có thể có nhiều thẻ <tbody> để phân chia các phần dữ liệu khác nhau.

<tfoot> (Table Footer): Dùng để nhóm các nội dung tổng kết hoặc thông tin bổ sung ở cuối bảng (ví dụ: tổng tiền, ghi chú).

2. Tại sao KHÔNG NÊN dùng table để tạo layout trang web?

-Vi phạm tính ngữ nghĩa (Semantic): Thẻ bảng sinh ra chỉ để hiển thị dữ liệu dạng lưới (tabular data). Nếu dùng để chia cột trang web, các công cụ tìm kiếm (Google) và trình đọc màn hình sẽ gặp khó khăn trong việc hiểu cấu trúc nội dung, gây ảnh hưởng xấu đến SEO và khả năng tiếp cận (Accessibility).

-Khó thiết kế Responsive: Layout bằng bảng rất cứng nhắc. Trên màn hình di động nhỏ, các hàng và cột của bảng không thể tự động nhảy dòng hay sắp xếp lại một cách linh hoạt như CSS, dẫn đến giao diện bị vỡ hoặc người dùng phải kéo ngang để xem.

-Ảnh hưởng đến tốc độ tải trang (Performance): Trình duyệt thường phải nhận đầy đủ toàn bộ mã HTML của bảng thì mới có thể tính toán kích thước và hiển thị kết quả. Điều này khiến người dùng cảm thấy trang web tải chậm hơn so với việc sử dụng các khối nội dung được render dần dần bằng CSS.

## Phần B

## Câu B1