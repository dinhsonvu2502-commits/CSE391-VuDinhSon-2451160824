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

## Câu B3
Lỗi 1: Dòng 1 – Thiếu khai báo kiểu tài liệu – Cách sửa: Đổi <!DOCTYPE> thành <!DOCTYPE html>.

Lỗi 2: Dòng 6 – Sai giá trị thuộc tính charset – Cách sửa: Đổi utf8 thành UTF-8 (thường viết là charset="UTF-8").

Lỗi 3: Dòng 9 – Thiếu dấu gạch chéo đóng thẻ h1 – Cách sửa: Đổi <h11> ở cuối thành </h1>.

Lỗi 4: Dòng 13, 14 – Thiếu dấu đóng thẻ anchor – Cách sửa: Thêm dấu > vào sau mỗi thẻ <a> (ví dụ: <a href="home">...</a>).

Lỗi 5: Dòng 21 – Thiếu thuộc tính alt cho ảnh – Cách sửa: Thêm alt="iPhone 16 Pro" vào thẻ <img> để hỗ trợ SEO và trình đọc màn hình.

Lỗi 6: Dòng 23 – Sai thứ tự đóng thẻ lồng nhau – Cách sửa: Thẻ <b> nằm trong <p> nên phải đóng trước: <p>Giá: <b>25.990.000đ</b></p>.

Lỗi 7: Dòng 30, 31 – Dùng sai thẻ cho tiêu đề bảng – Cách sửa: Thay thẻ <td> ở hàng đầu tiên của bảng thành thẻ <th> (Table Header) để đúng ngữ nghĩa.

Lỗi 8: Dòng 42, 44 – Lặp lại thẻ main – Cách sửa: Một trang chỉ có một thẻ <main>. Thay thẻ <main> thứ hai thành thẻ <aside> vì nội dung là "Sidebar content".

Lỗi 9: Cấu trúc Header/Main/H1 – Cách sửa: Thông thường thẻ <h1> nên nằm bên trong <header> hoặc là phần tử đầu tiên của nội dung chính thay vì nằm lẻ loi bên ngoài cấu trúc chính.

Lỗi 10: Dòng 47 – Thẻ p chứa thông tin bản quyền trong footer – Cách sửa: Nên sử dụng thẻ <small> hoặc trực tiếp trong <footer> để đúng ngữ nghĩa pháp lý hơn là một đoạn văn (<p>) thông thường.

## Câu B4
3 thẻ semantic HTML5 sử dụng đúng:
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

## Phần C

## Câu C1
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm</title>
</head>
<body>

    <!-- Header + Navigation -->
    <header> <!-- header vì đây là phần đầu của trang web -->
        <nav> <!-- nav vì chứa các liên kết điều hướng chính của website -->
            <ul>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Danh mục</a></li>
            </ul>
        </nav>
    </header>

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb"> <!-- nav vì đây là hệ thống điều hướng phân cấp -->
        <ol> <!-- ol vì breadcrumb là danh sách có thứ tự từ cấp cao đến thấp -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/mobile">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <main> <!-- main vì chứa nội dung chính, duy nhất của trang chi tiết sản phẩm -->
        
        <article> <!-- article vì toàn bộ thông tin sản phẩm này là một nội dung độc lập, có ý nghĩa riêng -->
            
            <!-- Khu vực ảnh sản phẩm -->
            <section id="product-gallery"> <!-- section để nhóm các phần tử liên quan đến hình ảnh -->
                <figure> <!-- figure dùng để chứa ảnh minh họa cho nội dung -->
                    <img src="main.jpg" alt="Ảnh chính iPhone 16">
                    <img src="img2.jpg" alt="Cạnh bên">
                    <img src="img3.jpg" alt="Mặt sau">
                    <img src="img4.jpg" alt="Màn hình">
                    <img src="img5.jpg" alt="Hộp đựng">
                    <figcaption>Bộ sưu tập hình ảnh iPhone 16</figcaption> <!-- figcaption giải thích cho nhóm ảnh trong figure -->
                </figure>
            </section>

            <!-- Thông tin sản phẩm -->
            <section id="product-info"> <!-- section nhóm thông tin cơ bản về tên, giá, mô tả -->
                <h1>Tên sản phẩm</h1> <!-- h1 là tiêu đề quan trọng nhất của trang (tên sản phẩm) -->
                <p class="price">Giá sản phẩm</p> <!-- p dùng cho đoạn văn bản chứa giá -->
                <div class="rating">Đánh giá sao</div> <!-- div dùng cho nhóm icon đánh giá (không mang ý nghĩa văn bản đặc biệt) -->
                <p class="description">Mô tả ngắn gọn về sản phẩm</p> <!-- p dùng cho nội dung mô tả -->
            </section>

            <!-- Bảng thông số kỹ thuật -->
            <section id="specifications"> <!-- section nhóm thông tin kỹ thuật -->
                <h2>Thông số kỹ thuật</h2> <!-- h2 là tiêu đề cấp 2 cho khu vực thông số -->
                <table> <!-- table vì đây là dữ liệu dạng bảng (so sánh, đối chiếu thông số) -->
                    <thead> <!-- thead chứa tiêu đề các cột của bảng -->
                        <tr>
                            <th>Đặc tính</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody> <!-- tbody chứa các hàng dữ liệu thực tế -->
                        <tr>
                            <td>Màn hình</td>
                            <td>6.1 inch</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <!-- Khu vực đánh giá/bình luận -->
            <section id="reviews"> <!-- section nhóm các phản hồi từ người dùng -->
                <h2>Đánh giá từ khách hàng</h2>
                <div class="comment"> <!-- div để bọc mỗi khối bình luận -->
                    <p><strong>Tên người dùng:</strong> Nội dung bình luận...</p>
                </div>
            </section>

        </article>

        <!-- Sidebar: Sản phẩm tương tự -->
        <aside> <!-- aside vì đây là nội dung phụ, có liên quan gián tiếp đến sản phẩm đang xem -->
            <h3>Sản phẩm tương tự</h3>
            <ul>
                <li>Sản phẩm A</li>
                <li>Sản phẩm B</li>
            </ul>
        </aside>

    </main>

    <!-- Footer -->
    <footer> <!-- footer chứa thông tin cuối trang như bản quyền, chính sách -->
        <p>&copy; 2026 Shop TLU. All rights reserved.</p>
    </footer>

</body>
</html>




## Câu C2
Thứ nhất là về tối ưu hóa công cụ tìm kiếm (SEO). Các con bot của Google hay Bing không thể hiểu được ý nghĩa nội dung nếu chỉ nhìn vào thẻ <div>. Khi sử dụng Semantic HTML như <header>, <main>, hay <article>, chúng ta đang cung cấp một "bản đồ ý nghĩa" giúp công cụ tìm kiếm xác định đâu là nội dung quan trọng nhất. Một trang web tràn ngập <div> sẽ khiến cấu trúc trở nên phẳng lì và vô danh, trực tiếp làm giảm khả năng xếp hạng cao trên kết quả tìm kiếm.

Thứ hai là khả năng tiếp cận (Accessibility). Đối với người khiếm thị sử dụng trình đọc màn hình (Screen Reader), các thẻ semantic đóng vai trò là các mốc định hướng. Trình đọc màn hình có thể thông báo: "Bạn đang ở phần điều hướng" khi gặp thẻ <nav>. Nếu thay bằng <div class="nav">, thiết bị chỉ hiểu đó là một khối văn bản vô nghĩa, khiến người dùng gặp cực kỳ nhiều khó khăn trong việc tương tác với trang web.

Ví dụ cụ thể: Thay vì dùng <div class="button" onclick="...">, hãy dùng thẻ <button>. Thẻ <button> mặc định hỗ trợ tương tác bằng bàn phím (phím Enter/Space) và được các thiết bị hỗ trợ nhận diện là một đối tượng có thể nhấn được mà không cần viết thêm bất kỳ dòng code xử lý phức tạp nào.

Tuy nhiên, thẻ <div> vẫn rất phù hợp trong trường hợp thực tế khi chúng ta cần một "container" trung tính chỉ để phục vụ mục đích trình bày (styling) hoặc gom nhóm các phần tử để dàn trang với CSS (như Flexbox/Grid) mà bản thân nhóm đó không mang một ý nghĩa nội dung cụ thể nào.


