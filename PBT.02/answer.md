# Phần A
## Câu A1
1. type="email" --> Ô nhập văn bản, tự động kiểm tra định dạng email (có ký tự @ và tên miền) --> Dùng cho form đăng ký tài khoản người mua.
2. type="password" --> Các ký tự nhập vào sẽ hiển thị dưới dạng dấu chấm hoặc dấu sao để bảo mật --> Dùng cho ô nhập mật khẩu khi đăng nhập.
3. type="number" --> Ô nhập chỉ chấp nhận ký tự số, thường có nút tăng/giảm giá trị --> Dùng để chọn số lượng sản phẩm trong giỏ hàng.
4. type="date" --> Hiển thị một khung chọn lịch (calendar) để người dùng chọn ngày/tháng/năm --> Dùng để chọn ngày sinh khách hàng hoặc ngày hẹn giao hàng.
5. type="tel" --> Ô nhập văn bản tối ưu cho số điện thoại (hiển thị bàn phím số trên di động) --> Dùng nhập số điện thoại nhận hàng.
6. type="search" --> Ô nhập văn bản có thêm nút "x" để xóa nhanh nội dung đã nhập --> Dùng cho thanh tìm kiếm sản phẩm.
7. type="checkbox" --> Một ô vuông nhỏ có thể tích chọn hoặc bỏ chọn --> Dùng để chọn nhiều sản phẩm cùng lúc hoặc chọn bộ lọc thuộc tính.
8. type="radio" --> Các nút tròn nhỏ, chỉ cho phép chọn duy nhất một lựa chọn trong một nhóm --> Dùng để chọn phương thức thanh toán (COD, Ví điện tử).
9. type="file" --> Hiển thị nút bấm để mở trình quản lý tệp tin của hệ thống và chọn tệp --> Dùng để tải lên ảnh đại diện hoặc ảnh đánh giá sản phẩm.
10. type="color" --> Hiển thị một bảng chọn màu sắc (color picker) chuyên nghiệp --> Dùng cho bộ lọc tìm kiếm sản phẩm theo màu sắc.

## Câu A2
Trường hợp 1: <input type="text" required value="">

Kết quả: Trình duyệt sẽ chặn lại và hiển thị thông báo lỗi (thường là "Please fill out this field").

Tại sao: Thuộc tính required bắt buộc người dùng không được để trống trường này. Do value="" tương đương với việc để trống, điều kiện hợp lệ không được thỏa mãn.

Trường hợp 2: <input type="email" value="abc">

Kết quả: Trình duyệt báo lỗi dữ liệu không hợp lệ (thường là "Please include an '@' in the email address").

Tại sao: type="email" yêu cầu dữ liệu phải tuân thủ đúng định dạng địa chỉ email (có ký tự @). Chuỗi "abc" thiếu ký tự này nên bị trình duyệt từ chối.

Trường hợp 3: <input type="number" min="1" max="10" value="15">

Kết quả: Trình duyệt báo lỗi giá trị vượt quá giới hạn (thường là "Value must be less than or equal to 10").

Tại sao: Thuộc tính max="10" giới hạn giá trị lớn nhất được phép nhập là 10. Giá trị "15" lớn hơn giới hạn này nên không vượt qua được bước kiểm tra.

Trường hợp 4: <input type="text" pattern="[0-9]{10}" value="abc123">

Kết quả: Trình duyệt báo lỗi không khớp định dạng yêu cầu (thường là "Please match the requested format").

Tại sao: Thuộc tính pattern sử dụng biểu thức chính quy yêu cầu đầu vào phải là chính xác 10 chữ số từ 0 đến 9. Giá trị "abc123" chứa ký tự chữ và chỉ có 6 ký tự, hoàn toàn không khớp với mẫu.

Trường hợp 5: <input type="password" minlength="8" value="123">

Kết quả: Trình duyệt báo lỗi độ dài quá ngắn (thường là "Please lengthen this text to 8 characters or more").

Tại sao: Thuộc tính minlength="8" yêu cầu chuỗi nhập vào phải có tối thiểu 8 ký tự. Giá trị "123" chỉ có 3 ký tự, không đủ độ dài tối thiểu cần thiết.

Kết quả thực tế giống với dự đoán. 

## Câu A3
1. Tại sao <label for="email"> quan trọng cho người dùng screen reader?
Liên kết dữ liệu: Thuộc tính for kết nối trực tiếp nhãn văn bản với ô nhập liệu có id="email" tương ứng.

Thông báo ngữ cảnh: Khi người dùng khiếm thị điều hướng (tab) đến ô nhập liệu, trình đọc màn hình (screen reader) sẽ đọc to nội dung bên trong thẻ <label> đó, giúp họ biết chính xác ô này yêu cầu nhập thông tin gì (ví dụ: "Email").

Mở rộng vùng tương tác: Thẻ <label> cho phép người dùng click vào chính văn bản nhãn để kích hoạt hoặc tập trung con trỏ vào ô nhập liệu, điều này cực kỳ hữu ích cho những người dùng gặp khó khăn về điều khiển chuột.

2. Khi nào dùng <fieldset> + <legend>? Cho ví dụ cụ thể.
Khi nào dùng: Cặp thẻ này được dùng để nhóm các yếu tố liên quan trong một biểu mẫu (form) phức tạp, giúp tạo ra một ranh giới logic và ngữ nghĩa rõ ràng cho cả người dùng bình thường và trình đọc màn hình.

Ví dụ cụ thể: Nhóm các lựa chọn về phương thức thanh toán hoặc địa chỉ nhận hàng.

HTML
<fieldset>
  <legend>Phương thức thanh toán</legend> <!-- Tiêu đề của nhóm -->
  <input type="radio" id="cod" name="payment">
  <label for="cod">Thanh toán khi nhận hàng</label><br>
  <input type="radio" id="card" name="payment">
  <label for="card">Thẻ tín dụng</label>
</fieldset>

3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
Khi nào dùng aria-label: Được dùng khi bạn muốn cung cấp một nhãn văn bản cho trình đọc màn hình nhưng không muốn hiển thị nhãn đó lên giao diện người dùng (ví dụ: nút đóng "X" chỉ có icon nhưng cần báo cho người khiếm thị là "Đóng").

Tại sao không nên dùng khi đã có <label>:

Trùng lặp thông tin: Nếu dùng cả hai, trình đọc màn hình có thể đọc nội dung hai lần hoặc ưu tiên aria-label và bỏ qua nội dung hiển thị trên màn hình, gây bối rối cho người dùng.

Nguyên tắc ưu tiên Native HTML: Trong Accessibility, luôn ưu tiên các thẻ HTML thuần túy (native) như <label> vì chúng có hỗ trợ mặc định tốt nhất cho mọi trình duyệt và thiết bị. Chỉ dùng aria-label như một giải pháp thay thế khi các thẻ tiêu chuẩn không thể đáp ứng được yêu cầu về thiết kế giao diện.

## Câu A4
1. Thuộc tính loading="lazy" trên thẻ <img>
Giải thích: Đây là tính năng Lazy Loading (tải chậm). Trình duyệt sẽ trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn trang đến gần vị trí của hình ảnh đó.

Cải thiện:

Tốc độ tải trang ban đầu: Giảm lượng dữ liệu cần tải ngay lập tức, giúp trang hiện ra nhanh hơn.

Tiết kiệm băng thông: Chỉ tải những gì người dùng thực sự xem.

Khi nào KHÔNG nên dùng:

Ảnh ở phía trên cùng trang web (Above the fold): Những ảnh người dùng thấy ngay khi vừa mở trang (như Logo, Banner chính) cần được tải tức thì để tránh cảm giác trang bị trống.

2. Thẻ <video> và các định dạng phổ biến
Tại sao nên cung cấp nhiều <source>: Vì mỗi trình duyệt (Chrome, Safari, Firefox...) hỗ trợ các bộ giải mã (codec) video khác nhau. Việc cung cấp nhiều nguồn giúp trình duyệt tự chọn định dạng tốt nhất mà nó hỗ trợ, đảm bảo video luôn chạy được.

3 format video web phổ biến:

MP4 (.mp4): Phổ biến nhất, hỗ trợ trên hầu hết mọi trình duyệt và thiết bị.

WebM (.webm): Định dạng hiện đại của Google, chất lượng cao với dung lượng thấp hơn MP4.

Ogg (.ogv): Một định dạng mã nguồn mở thay thế.

3. Thuộc tính alt trên thẻ <img>
Công dụng: Cung cấp văn bản thay thế nếu ảnh không hiển thị được, hỗ trợ trình đọc màn hình cho người khiếm thị và giúp Google hiểu nội dung ảnh để làm SEO.

Viết alt tốt cho 3 trường hợp cụ thể:

Ảnh sản phẩm iPhone 16:
Cách viết: alt="Điện thoại iPhone 16 Pro màu Titan sa mạc nguyên seal"


Ảnh trang trí (decorative):
Cách viết: alt=""


Ảnh biểu đồ doanh thu Q1/2026:
Cách viết: alt="Biểu đồ cột cho thấy doanh thu quý 1 năm 2026 tăng trưởng 15% so với năm trước"

## Câu A5
1. Khi nào dùng Cách 1 (<img> đơn thuần)?
Bạn sử dụng cách này khi hình ảnh chỉ đóng vai trò là một phần của nội dung đoạn văn hoặc dùng để trang trí, không cần có chú thích đi kèm hay sự tách biệt về mặt ngữ nghĩa.

Đặc điểm: Hình ảnh gắn liền với dòng văn bản (inline).

Ví dụ thực tế 1: Các icon nhỏ trong bài viết (như icon biểu cảm hoặc logo nhỏ đi kèm tên thương hiệu).

Ví dụ thực tế 2: Hình ảnh minh họa phụ nằm giữa một đoạn mô tả dài mà không cần người đọc phải tập trung riêng vào bức ảnh đó.

2. Khi nào dùng Cách 2 (<figure> + <figcaption>)?
Bạn sử dụng cách này khi hình ảnh là một đơn vị nội dung độc lập, mang tính chất minh họa quan trọng, biểu đồ, hoặc mã nguồn cần có tiêu đề/chú thích rõ ràng.

Đặc điểm: Tạo ra một khối (block) riêng biệt. Ngay cả khi bạn di chuyển khối <figure> này sang vị trí khác (như cuối trang), nội dung chính của bài viết vẫn không bị mất đi ý nghĩa.

Ví dụ thực tế 1 (E-commerce): Hiển thị ảnh sản phẩm chính (như iPhone 16 Pro Max trong hình) kèm theo tên và giá ngay bên dưới để người dùng dễ nhận diện.

Ví dụ thực tế 2 (Tin tức/Blog): Một biểu đồ thống kê hoặc một bức ảnh tư liệu trong bài báo kèm theo chú thích nguồn ảnh và nội dung sự kiện bên dưới.

# Phần C
## Câu C1
Lỗi 1: Input "Tên" không có <label for="...">

Vi phạm: Accessibility. Trình đọc màn hình không thể liên kết văn bản "Tên" với ô nhập liệu.

Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

Lỗi 2: Input Email không có nhãn (label) rõ ràng

Vi phạm: Best practices & Accessibility. Placeholder không thay thế được label vì nó biến mất khi người dùng gõ.

Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>

Lỗi 3: Hai ô Password thiếu thuộc tính name và nhãn

Vi phạm: Validation & Best practices. Thiếu name sẽ khiến dữ liệu không được gửi lên server khi submit.

Sửa: Đặt id và name khác nhau (ví dụ: pwd và confirm_pwd) kèm theo thẻ <label> cho từng ô.

Lỗi 4: Input Phone dùng sai type="text"

Vi phạm: Semantic HTML & Best practices. Nên dùng type="tel" để kích hoạt bàn phím số trên thiết bị di động.

Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" value="0901234567">

Lỗi 5: Thẻ <select> thiếu thuộc tính name và nhãn

Vi phạm: Validation & Accessibility. Không có name, server sẽ không nhận được giá trị tỉnh thành đã chọn.

Sửa: <label for="city">Thành phố:</label> <select id="city" name="city">...</select>

Lỗi 6: Các thẻ <option> thiếu thuộc tính value

Vi phạm: Best practices. Mặc dù trình duyệt sẽ lấy text nội dung, nhưng nên có thuộc tính value (ví dụ: value="hanoi") để xử lý dữ liệu chuẩn xác hơn ở backend.

Sửa: <option value="hanoi">Hà Nội</option>

Lỗi 7: Thẻ <label> cho "Đồng ý điều khoản" thiếu input và liên kết

Vi phạm: Accessibility & Validation. Thẻ label đang trống rỗng về mặt chức năng vì không chứa hoặc không liên kết tới một checkbox.

Sửa: <input type="checkbox" id="terms" name="terms" required> <label for="terms">Tôi đồng ý điều khoản</label>

Lỗi 8: Nút Submit dùng thẻ <input type="submit"> thay vì <button>

Vi phạm: Best practices. Dùng thẻ <button type="submit"> linh hoạt hơn, cho phép chèn thêm icon hoặc định dạng phức tạp bên trong.

Sửa: <button type="submit">Gửi</button>

## Câu C2
Dựa trên các yêu cầu thiết kế chiến lược Validation cho ngân hàng số trong hình ảnh image_caf2c2.png, dưới đây là nội dung giải đáp chi tiết:

1. Viết pattern regex cho CMND/CCCD và Số tài khoản
Dựa trên yêu cầu về số lượng chữ số:

CMND/CCCD (đúng 12 chữ số): pattern="[0-9]{12}" hoặc pattern="\d{12}".

Số tài khoản (10-15 chữ số): pattern="[0-9]{10,15}" hoặc pattern="\d{10,15}".

Mã PIN (đúng 6 chữ số, không hiển thị): Sử dụng type="password" kèm pattern="[0-9]{6}".

2. HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
Trả lời: KHÔNG đủ an toàn.

Lý do: HTML5 validation chỉ là lớp bảo vệ vòng ngoài (Client-side). Người dùng có kỹ thuật dễ dàng vượt qua bằng cách:

Tắt JavaScript hoặc can thiệp trực tiếp vào mã nguồn qua công cụ Developer Tools (F12) để xóa bỏ thuộc tính required hoặc pattern.

Sử dụng các công cụ như Postman hoặc dòng lệnh (cURL) để gửi dữ liệu trực tiếp tới server mà không thông qua trình duyệt.

3. Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript)
Để xử lý các logic phức tạp trong ngân hàng số, JavaScript là bắt buộc cho:

So sánh dữ liệu giữa các trường (Cross-field validation): Ví dụ: Kiểm tra "Xác nhận mã PIN" có khớp với "Mã PIN" đã nhập hay không.

Kiểm tra tính duy nhất theo thời gian thực (Asynchronous/Remote validation): Ví dụ: Kiểm tra xem số tài khoản hoặc Email đã tồn tại trong hệ thống ngân hàng hay chưa (cần gọi API).

Logic kiểm tra tùy chỉnh phức tạp: Ví dụ: Kiểm tra mã PIN không được là các số liên tiếp (123456) hoặc trùng với ngày tháng năm sinh.

4. Nêu 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
Nếu bỏ qua bước kiểm tra tại Server (Backend), ngân hàng sẽ đối mặt với rủi ro cực lớn:

Dữ liệu rác và sai định dạng (Data Integrity): Kẻ tấn công có thể gửi dữ liệu chứa ký tự đặc biệt, chuỗi văn bản cực dài vào trường "Số tài khoản" gây lỗi hệ thống hoặc làm hỏng cơ sở dữ liệu.

Tấn công tiêm nhiễm (Injection Attacks): Đây là rủi ro nguy hiểm nhất. Kẻ xấu có thể gửi các đoạn mã độc (SQL Injection) qua form để đánh cắp dữ liệu khách hàng hoặc chiếm quyền điều khiển server nếu dữ liệu đầu vào không được Backend lọc sạch.



