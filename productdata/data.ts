interface Productsdata {
    id: number;
   title:string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  }


const Productdata: Productsdata[] = [


    {
        "id": 1,
        "title": "Men's Slim Fit Shirt",
        "price": 29.99,
        "description": "A stylish and comfortable slim-fit shirt for men. Perfect for casual outings.",
        "category": "men's clothing",
        "image": "/image1.webp",
        "rating": { "rate": 4.2, "count": 85 }
      },
      {
        "id": 2,
        "title": "Men's Formal Shirt",
        "price": 35.99,
        "description": "Elegant formal shirt for business or formal occasions.",
        "category": "men's clothing",
        "image": "/image2.webp",
        "rating": { "rate": 4.1, "count": 100 }
      },
      {
        "id": 3,
        "title": "Men's Polo T-Shirt",
        "price": 19.99,
        "description": "Casual polo T-shirt for everyday comfort.",
        "category": "men's clothing",
        "image": "/image3.webp",
        "rating": { "rate": 4.0, "count": 150 }
      },
      {
        "id": 4,
        "title": "Men's Hooded Sweatshirt",
        "price": 45.99,
        "description": "Warm and comfortable hoodie for colder days.",
        "category": "men's clothing",
        "image": "/image4.webp",
        "rating": { "rate": 4.5, "count": 120 }
      },
      {
        "id": 5,
        "title": "Men's Casual Jacket",
        "price": 59.99,
        "description": "Lightweight and stylish casual jacket for men.",
        "category": "men's clothing",
        "image": "/image5.webp",
        "rating": { "rate": 4.6, "count": 90 }
      },

      {
        "id": 6,
        "title": "Women's Cardigan Sweater",
        "price": 44.99,
        "description": "Soft cardigan sweater for cozy comfort.",
        "category": "women's clothing",
        "image": "/image6.webp",
        "rating": { "rate": 4.2, "count": 120 }
      },
      {
        "id": 7,
        "title": "Women's High Waist Shorts",
        "price": 29.99,
        "description": "Stylish high-waist shorts for summer fashion.",
        "category": "women's clothing",
        "image": "/image7.webp",
        "rating": { "rate": 4.3, "count": 70 }
      },
      {
        "id": 8,
        "title": "Women's Cropped Top",
        "price": 24.99,
        "description": "Trendy cropped top for casual wear.",
        "category": "women's clothing",
        "image": "/image8.webp",
        "rating": { "rate": 4.4, "count": 95 }
      },
      {
        "id": 9,
        "title": "Women's Woolen Scarf",
        "price": 19.99,
        "description": "Warm woolen scarf for chilly days.",
        "category": "women's clothing",
        "image": "/image9.webp",
        "rating": { "rate": 4.5, "count": 60 }
      },
      {
        "id": 10,
        "title": "Women's Ankle Boots",
        "price": 59.99,
        "description": "Comfortable and stylish ankle boots for all-day wear.",
        "category": "women's clothing",
        "image": "/image10.webp",
        "rating": { "rate": 4.7, "count": 80 }
      },
      {
        "id": 11,
        "title": "Highlighter Stick",
        "price": 13.99,
        "description": "Illuminating highlighter stick for radiant skin.",
        "category": "makeup",
        "image": "/image11.webp",
        "rating": { "rate": 4.7, "count": 110 }
      },
      {
        "id": 12,
        "title": "Lip Gloss Set",
        "price": 15.99,
        "description": "5-piece lip gloss set for a glossy and hydrated finish.",
        "category": "makeup",
        "image": "/image12.webp",
        "rating": { "rate": 4.5, "count": 90 }
      },
      {
        "id": 13,
        "title": "Brow Pomade",
        "price": 8.99,
        "description": "Waterproof brow pomade for precise eyebrow shaping.",
        "category": "makeup",
        "image": "/image13.webp",
        "rating": { "rate": 4.3, "count": 70 }
      },
      {
        "id": 14,
        "title": "Translucent Setting Powder",
        "price": 18.99,
        "description": "Translucent setting powder to lock in makeup for hours.",
        "category": "makeup",
        "image": "/image14.webp",
        "rating": { "rate": 4.6, "count": 100 }
      },
      {
        "id": 15,
        "title": "Makeup Primer",
        "price": 17.99,
        "description": "Silky makeup primer for a smooth base and long-lasting wear.",
        "category": "makeup",
        "image": "/image15.webp",
        "rating": { "rate": 4.7, "count": 140 }
      },
      {
        "id": 16,
        "title": "Contour Palette",
        "price": 20.99,
        "description": "3-shade contour palette for a sculpted and defined look.",
        "category": "makeup",
        "image": "/image16.webp",
        "rating": { "rate": 4.4, "count": 110 }
      },
      {
        "id": 17,
        "title": "Lip Balm Duo",
        "price": 7.99,
        "description": "Hydrating lip balm duo for soft, moisturized lips.",
        "category": "makeup",
        "image": "/image17.webp",
        "rating": { "rate": 4.5, "count": 80 }
      },
      {
        "id": 18,
        "title": "Gel Eyebrow Pencil",
        "price": 9.99,
        "description": "Dual-ended gel eyebrow pencil with a spoolie brush.",
        "category": "makeup",
        "image": "/image8.webp",
        "rating": { "rate": 4.6, "count": 100 }
      },
      {
        "id": 19,
        "title": "Liquid Lipstick Duo",
        "price": 14.99,
        "description": "A set of two vibrant liquid lipsticks with a smooth, long-lasting formula.",
        "category": "makeup",
        "image": "/image19.webp",
        "rating": { "rate": 4.5, "count": 95 }
      },
      {
        "id": 20,
        "title": "Cream Blush Stick",
        "price": 12.49,
        "description": "Easy-to-blend cream blush stick for a natural, dewy finish.",
        "category": "makeup",
        "image": "/image20.jpeg",
        "rating": { "rate": 4.3, "count": 85 }
      },
      {
        "id": 21,
        "title": "Waterproof Duffel Bag",
        "price": 69.99,
        "description": "Spacious waterproof duffel bag suitable for travel and gym.",
        "category": "bags",
        "image": "/image21.webp",
        "rating": { "rate": 4.8, "count": 130 }
      },
      {
        "id":22,
        "title": "Mini Shoulder Bag",
        "price": 24.99,
        "description": "Trendy mini shoulder bag ideal for casual outings.",
        "category": "bags",
        "image": "/image22.webp",
        "rating": { "rate": 4.6, "count": 100 }
      },
      {
        "id": 23,
        "title": "Laptop Briefcase",
        "price": 89.99,
        "description": "Professional laptop briefcase with padded compartments.",
        "category": "bags",
        "image": "/image23.webp",
        "rating": { "rate": 4.7, "count": 160 }
      },
      {
        "id": 24,
        "title": "Foldable Travel Bag",
        "price": 34.99,
        "description": "Lightweight foldable travel bag, convenient for on-the-go storage.",
        "category": "bags",
        "image": "/image23.webp",
        "rating": { "rate": 4.5, "count": 80 }
      },
      {
        "id": 25,
        "title": "Elegant Diamond Ring",
        "price": 299.99,
        "description": "A stunning diamond ring with a minimalist design, perfect for special occasions.",
        "category": "jewelry",
        "image": "/image25.webp",
        "rating": { "rate": 4.8, "count": 120 }
      },
      {
        "id": 26,
        "title": "Gold Eternity Band",
        "price": 199.99,
        "description": "18K gold eternity band with a timeless, elegant look.",
        "category": "jewelry",
        "image": "/image26.webp",
        "rating": { "rate": 4.7, "count": 90 }
      },
      {
        "id": 27,
        "title": "Silver Pearl Ring",
        "price": 89.99,
        "description": "A delicate sterling silver ring featuring a single freshwater pearl.",
        "category": "jewelry",
        "image": "/image27.webp",
        "rating": { "rate": 4.5, "count": 80 }
      },
      
    

]

export default Productdata