
# Các Bước Fork Repository

## Fork Respository
1. Truy cập repository gốc: [codeday](https://github.com/0xRoost3r/codeday).
2. Nhấn vào nút **Fork** ở góc phải trên cùng trang để sao chép repository vào tài khoản GitHub của bạn.

## Clone Repository

1. Truy cập repository fork trong tài khoản GitHub của bạn.
2. Nhấn vào nút **Code** và sao chép URL (HTTPS hoặc SSH).
3. Mở terminal và chạy lệnh sau để clone repository về máy tính:

   ```bash
   git clone https://github.com/your-username/codeday.git
   ```
**Lưu ý**: Thay `your-username` bằng tên người dùng GitHub của bạn.

# Cài Đặt CLIENT_ID Và Chạy Dự Án Trên Local

## Lấy CLIENT_ID Từ Thirdweb
1. Trong thư mục gốc của project, tạo một file `.env`.
2. Thêm biến môi trường sau vào file `.env`:

   ```env
   CLIENT_ID=<your-client-id>
   ```

3. **CLIENT_ID**: Đây là mã ID khách hàng cần thiết để kết nối với thirdweb. Để biết cách tạo `CLIENT_ID`, tham khảo tài liệu [client documentation](https://portal.thirdweb.com/typescript/v5/client).

## Chạy Dự Án Trên Local

Cài đặt các phụ thuộc

```bash
yarn
```

Khởi động server phát triển

```bash
yarn dev
```

Tạo build sản xuất

```bash
yarn build
```

Xem trước build sản xuất

```bash
yarn start
```

# Đẩy Dự Án Lên GitHub

Sau khi thực hiện các thay đổi, sử dụng lệnh sau để thêm thay đổi vào Git:

```bash
git add .
git commit -m "Initial commit"
```

Sau đó, bạn sẽ push các thay đổi lên repository của bạn (repo đã fork):

```bash
git push origin main
```
## Tạo Pull Request Vào Repository Gốc

1. Sau khi push code lên repository của bạn, vào trang repository của bạn trên GitHub.
2. Nhấn vào tab **Pull requests** và chọn **New pull request**.
3. Chọn repository của bạn làm "base" và repository gốc làm "head".
4. Điền tiêu đề và mô tả cho pull request và
nhấn **Create pull request**.
