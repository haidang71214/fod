create DATABASE lon;
use lon;
-- fod
CREATE TABLE userr (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE restaurant (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    res_name VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255)
);
CREATE TABLE food_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(255)
);
CREATE TABLE food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(255),
    image VARCHAR(255),
    price FLOAT,
    description VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE sub_food (
    sub_id INT AUTO_INCREMENT PRIMARY KEY,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
    
);CREATE TABLE orderr (
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES userr(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
    -- user order food
);

CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    FOREIGN KEY (user_id) REFERENCES userr(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);
CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    FOREIGN KEY (user_id) REFERENCES userr(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Thêm dữ liệu vào bảng user
-- Thêm dữ liệu vào bảng user
INSERT INTO userr (full_name, email, password) VALUES
('Nguyen Van A', 'a.nguyen@gmail.com', 'password123'),
('Tran Thi B', 'b.tran@gmail.com', 'password123'),
('Le Hoang C', 'c.le@gmail.com', 'password123'),
('Pham Quang D', 'd.pham@gmail.com', 'password123'),
('Vo Minh E', 'e.vo@gmail.com', 'password123'),
('Do Thi F', 'f.do@gmail.com', 'password123'),
('Ngo Bao G', 'g.ngo@gmail.com', 'password123'),
('Hoang Quoc H', 'h.hoang@gmail.com', 'password123'),
('Phan Minh I', 'i.phan@gmail.com', 'password123'),
('Truong Xuan J', 'j.truong@gmail.com', 'password123');

-- Thêm dữ liệu vào bảng restaurant
INSERT INTO restaurant (res_name, image, description) VALUES
('Nhà hàng A', 'image_a.jpg', 'Mô tả về nhà hàng A'),
('Nhà hàng B', 'image_b.jpg', 'Mô tả về nhà hàng B'),
('Nhà hàng C', 'image_c.jpg', 'Mô tả về nhà hàng C'),
('Nhà hàng D', 'image_d.jpg', 'Mô tả về nhà hàng D'),
('Nhà hàng E', 'image_e.jpg', 'Mô tả về nhà hàng E'),
('Nhà hàng F', 'image_f.jpg', 'Mô tả về nhà hàng F');

-- Thêm dữ liệu vào bảng food_type
INSERT INTO food_type (type_name) VALUES
('Món chính'),
('Món phụ'),
('Món tráng miệng'),
('Đồ uống'),
('Khai vị');

-- Thêm dữ liệu vào bảng food
INSERT INTO food (food_name, image, price, description, type_id) VALUES
('Phở bò', 'pho_bo.jpg', 50000, 'Phở bò truyền thống', 1),
('Cơm tấm', 'com_tam.jpg', 40000, 'Cơm tấm sườn', 1),
('Bánh mì', 'banh_mi.jpg', 20000, 'Bánh mì pate', 2),
('Bánh xèo', 'banh_xeo.jpg', 30000, 'Bánh xèo miền Nam', 1),
('Gỏi cuốn', 'goi_cuon.jpg', 15000, 'Gỏi cuốn tôm thịt', 2),
('Chè đậu xanh', 'che_dau_xanh.jpg', 10000, 'Chè đậu xanh tráng miệng', 3);

-- Thêm dữ liệu vào bảng sub_food
INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Hành phi', 5000, 1),
('Nước mắm', 3000, 2),
('Rau sống', 2000, 3),
('Đậu phộng', 1000, 4),
('Mắm nêm', 3000, 5);


-- Thêm dữ liệu vào bảng `order`
-- Thêm dữ liệu vào bảng `order` với số lượng và thứ tự lộn xộn
INSERT INTO orderr (user_id, food_id, amount, code, arr_sub_id) VALUES
(3, 3, 1, 'OD007', '2,3'),  -- Thêm đơn hàng của user 3 với food 3
(2, 1, 4, 'OD008', '1,2'),  -- Thêm đơn hàng của user 2 với food 1
(4, 5, 3, 'OD009', '4,5'),  -- Thêm đơn hàng của user 4 với food 5
(1, 2, 1, 'OD010', '2'),    -- Thêm đơn hàng của user 1 với food 2
(5, 4, 2, 'OD011', '1,4'),  -- Thêm đơn hàng của user 5 với food 4
(6, 1, 1, 'OD012', '1'),    -- Thêm đơn hàng của user 6 với food 1
(1, 3, 2, 'OD013', '2'),    -- Thêm đơn hàng của user 1 với food 3
(2, 6, 1, 'OD014', '5'),    -- Thêm đơn hàng của user 2 với food 6
(5, 2, 3, 'OD015', NULL);   -- Thêm đơn hàng của user 5 với food 2, không có sub_food

-- Thêm dữ liệu vào bảng rate_res với thứ tự lộn xộn
INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(3, 1, 5, NOW()),  -- User 3 đánh giá nhà hàng 1
(2, 3, 2, NOW()),  -- User 2 đánh giá nhà hàng 3
(4, 2, 4, NOW()),  -- User 4 đánh giá nhà hàng 2
(1, 5, 3, NOW()),  -- User 1 đánh giá nhà hàng 5
(6, 4, 5, NOW()),  -- User 6 đánh giá nhà hàng 4
(5, 6, 1, NOW()),  -- User 5 đánh giá nhà hàng 6
(2, 1, 4, NOW());  -- User 2 đánh giá nhà hàng 1 lần nữa

-- Thêm dữ liệu vào bảng like_res với thứ tự và số lộn xộn
INSERT INTO like_res (user_id, res_id, date_like) VALUES
(4, 2, NOW()),   -- User 4 thích nhà hàng 2
(5, 3, NOW()),   -- User 5 thích nhà hàng 3
(2, 1, NOW()),   -- User 2 thích nhà hàng 1
(3, 5, NOW()),   -- User 3 thích nhà hàng 5
(6, 4, NOW()),   -- User 6 thích nhà hàng 4
(1, 6, NOW()),   -- User 1 thích nhà hàng 6
(5, 1, NOW()),   -- User 5 thích nhà hàng 1 lần nữa
(3, 2, NOW()),   -- User 3 thích nhà hàng 2
(6, 3, NOW()),   -- User 6 thích nhà hàng 3
(2, 4, NOW());   -- User 2 thích nhà hàng 4



CREATE TABLE orderr (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES userr(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

INSERT INTO orderr (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1, 2, 'OD001', 'NULL'),  -- User 1 đặt 2 món food 1
(2, 2, 1, 'OD002', 'NULL'),  -- User 2 đặt 1 món food 2
(3, 3, 3, 'OD003', '1,2'),    -- User 3 đặt 3 món food 3, chọn sub_food 1 và 2
(4, 4, 1, 'OD004', '3'),      -- User 4 đặt 1 món food 4, chọn sub_food 3
(5, 5, 2, 'OD005', 'NULL'),   -- User 5 đặt 2 món food 5
(6, 6, 1, 'OD006', '1'),      -- User 6 đặt 1 món food 6, chọn sub_food 1
(1, 2, 4, 'OD007', '2,3'),    -- User 1 đặt 4 món food 2, chọn sub_food 2 và 3
(2, 3, 2, 'OD008', 'NULL'),   -- User 2 đặt 2 món food 3
(3, 4, 3, 'OD009', '1,2'),    -- User 3 đặt 3 món food 4, chọn sub_food 1 và 2
(4, 5, 2, 'OD010', '3');      -- User 4 đặt 2 món food 5, chọn sub_food 3

