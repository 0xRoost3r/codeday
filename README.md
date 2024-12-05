
![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

# thirdweb-next-starter

Mẫu khởi tạo để xây dựng ứng dụng React Native on-chain với [thirdweb](https://thirdweb.com/) và [next](https://nextjs.org/).

## Cài Đặt

Cài đặt mẫu sử dụng [thirdweb create](https://portal.thirdweb.com/cli/create):

```bash
npx thirdweb create app --next
```

##Các Bước Fork Repository và Thiết Lập Môi Trường

###Fork Repository

1. Truy cập repository gốc: [thirdweb-next-starter](https://github.com/thirdweb-example/next-starter).
2. Nhấn vào nút **Fork** ở góc phải trên cùng trang để sao chép repository vào tài khoản GitHub của bạn.

###Tạo Repository Mới Trên GitHub (Nếu cần)

1. Truy cập [GitHub](https://github.com/) và đăng nhập vào tài khoản của bạn.
2. Nhấn vào nút **+** ở góc trên bên phải và chọn **New repository**.
3. Đặt tên cho repository, ví dụ: `my-thirdweb-next-app`.
4. Chọn chế độ **Public** hoặc **Private** cho repository của bạn.
5. Nhấn **Create repository**.

###Clone Repository Về Máy Tính


1. Truy cập repository fork trong tài khoản GitHub của bạn.
2. Nhấn vào nút **Code** và sao chép URL (HTTPS hoặc SSH).
3. Mở terminal và chạy lệnh sau để clone repository về máy tính:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

###Kết Nối Repository Mới Với Dự Án Của Bạn

1. Mở terminal và điều hướng đến thư mục chứa dự án của bạn.
2. Chạy lệnh sau để liên kết repository local với repository trên GitHub:

   ```bash
   git remote add origin https://github.com/your-username/my-thirdweb-next-app.git
   ```

3. Push mã nguồn lên repository mới:

   ```bash
   git push -u origin main
   ```

###Thiết Lập Môi Trường

1. Trong thư mục gốc của project, tạo một file `.env`.
2. Thêm biến môi trường sau vào file `.env`:

   ```env
   CLIENT_ID=<your-client-id>
   ```

3. **CLIENT_ID**: Đây là mã ID khách hàng cần thiết để kết nối với thirdweb. Để biết cách tạo `CLIENT_ID`, tham khảo tài liệu [client documentation](https://portal.thirdweb.com/typescript/v5/client).

###Cài Đặt Dự Án

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

###Đẩy Dự Án Lên GitHub

Để đẩy các thay đổi của bạn lên GitHub, bạn chỉ cần sử dụng các lệnh sau trong terminal:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## Tài Nguyên

- [Tài liệu hướng dẫn](https://portal.thirdweb.com/typescript/v5)
- [Các mẫu dự án](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Cần Giúp Đỡ?

Nếu bạn gặp bất kỳ vấn đề nào hoặc có câu hỏi, vui lòng [truy cập trang hỗ trợ](https://thirdweb.com/support).

---



