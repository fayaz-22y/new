USE flozz_db;

-- Seed products (use placeholder images)
INSERT INTO products (name, description, price, category, brand, size_range, color, image_url, stock_quantity) VALUES
('Air Max Runner', 'Premium running shoes with cushioning and breathability', 149.99, 'Running', 'Flozz Performance', '5-12', 'White/Blue', 'https://picsum.photos/seed/flozz1/600/400', 50),
('Urban Street Pro', 'Stylish streetwear sneakers for everyday wear', 89.99, 'Casual', 'Flozz Urban', '5-12', 'Black/White', 'https://picsum.photos/seed/flozz2/600/400', 80),
('Trail Blazer X', 'Rugged hiking boots built for any terrain', 179.99, 'Hiking', 'Flozz Outdoor', '7-14', 'Brown', 'https://picsum.photos/seed/flozz3/600/400', 30),
('Classic Canvas Low', 'Timeless canvas sneakers with modern comfort', 59.99, 'Casual', 'Flozz Classic', '4-13', 'Navy', 'https://picsum.photos/seed/flozz4/600/400', 90),
('Elite Runner Pro', 'Professional grade running shoes for athletes', 199.99, 'Running', 'Flozz Elite', '6-13', 'Red', 'https://picsum.photos/seed/flozz5/600/400', 25),
('Comfort Walk Plus', 'Extra cushioned walking shoes for all-day comfort', 119.99, 'Walking', 'Flozz Comfort', '5-12', 'Grey', 'https://picsum.photos/seed/flozz6/600/400', 60),
('Skate Master 360', 'Durable skate shoes with enhanced grip', 79.99, 'Skateboard', 'Flozz Skate', '7-13', 'Black/Red', 'https://picsum.photos/seed/flozz7/600/400', 40),
('Gym Flex Trainer', 'Versatile training shoes for gym workouts', 99.99, 'Training', 'Flozz Fitness', '6-12', 'Black', 'https://picsum.photos/seed/flozz8/600/400', 70),
('Summer Breeze Sandals', 'Lightweight sandals perfect for summer', 39.99, 'Sandals', 'Flozz Summer', '5-11', 'Tan', 'https://picsum.photos/seed/flozz9/600/400', 120),
('Basketball Pro High', 'High-top basketball shoes with ankle support', 159.99, 'Basketball', 'Flozz Sport', '8-14', 'White/Gold', 'https://picsum.photos/seed/flozz10/600/400', 35);
