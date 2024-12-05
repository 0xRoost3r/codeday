![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

# thirdweb-next-starter

Mẫu khởi tạo để xây dựng ứng dụng React Native on-chain với [thirdweb](https://thirdweb.com/) và [next](https://nextjs.org/).

## Cài Đặt

Cài đặt mẫu sử dụng [thirdweb create](https://portal.thirdweb.com/cli/create):

```bash
npx thirdweb create app --next
```

## Các Bước Fork Repository và Thiết Lập Môi Trường

### 1. Fork Repository

1. Truy cập repository gốc: [thirdweb-next-starter](https://github.com/thirdweb-example/next-starter).
2. Nhấn vào nút **Fork** ở góc phải trên cùng trang để sao chép repository vào tài khoản GitHub của bạn.

### 2. Clone Repository Về Máy Tính

1. Truy cập repository fork trong tài khoản GitHub của bạn.
2. Nhấn vào nút **Code** và sao chép URL (HTTPS hoặc SSH).
3. Mở terminal và chạy lệnh sau để clone repository về máy tính:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

### 3. Cài Đặt Môi Trường

1. Trong thư mục gốc của project, tạo một file `.env`.
2. Thêm biến môi trường sau vào file `.env`:

   ```env
   CLIENT_ID=<your-client-id>
   ```

3. **CLIENT_ID**: Đây là mã ID khách hàng cần thiết để kết nối với thirdweb. Để biết cách tạo `CLIENT_ID`, tham khảo tài liệu [client documentation](https://portal.thirdweb.com/typescript/v5/client).

### 4. Cài Đặt Dự Án

Sử dụng Yarn để cài đặt các phụ thuộc cần thiết:

```bash
yarn
```

### 5. Chạy Dự Án Cục Bộ

#### Khởi Động Server Phát Triển

```bash
yarn dev
```

#### Tạo Build Sản Xuất

```bash
yarn build
```

#### Xem Trước Build Sản Xuất

```bash
yarn start
```

## Tài Nguyên

- [Tài liệu hướng dẫn](https://portal.thirdweb.com/typescript/v5)
- [Các mẫu dự án](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Cần Giúp Đỡ?

Nếu bạn gặp bất kỳ vấn đề nào hoặc có câu hỏi, vui lòng [truy cập trang hỗ trợ](https://thirdweb.com/support).
