# 🛍️ EC — Minimal E-Commerce Fashion Website

A sleek, minimal, and fully responsive front-end fashion e-commerce website featuring smooth animations, category filtering, and product previews.  
Designed to deliver an elegant user experience with clean visuals and intuitive navigation.

Take a look:

```
  https://kamelmustafa.github.io/ECommerce-Website/
```

---

## ✨ Features

### 🧭 Multi-Page Navigation

- **Home page (index.html)** — Hero section, dropdown navigation, and entry point to Men’s & Women’s collections.
- **Men’s Collection (men.html)** — Filterable product grid (All, Best Sellers, Shirts, Pants, Hoodies).
- **Women’s Collection (women.html)** — Filterable product grid (All, Best Sellers, Tops, Bottoms).
- **Product Details (item.html)** — Displays detailed information for each product.
- **Account Page (account.html)** — Placeholder for user authentication or profile access.

---

### 🎛️ Smart Filtering System

- Dynamic **filter buttons** for quick product category switching.
- Integrated **URL parameter filtering** (`?filter=shirts`, `?filter=tops`, etc.).
- Dropdown menu in the main navigation links directly to filtered views on `men.html` and `women.html`.

---

### 🪄 Interactive Dropdown Navigation

- Hover or click dropdowns under **MEN** and **WOMEN**.
- Each dropdown item redirects to the proper page and applies the selected filter automatically.

---

### 🧩 Modular JavaScript

- **men.js** and **women.js** handle filter logic and animations independently.
- Supports category filters and "Best Seller" highlights.
- Automatically detects filter type from URL query parameters.

---

### 🗂️ Project Structure

```
EC/
├── index.html
├── men.html
├── women.html
├── item.html
├── account.html
│
├── css/
| ├── style.css
│ ├── men.css
│ ├── women.css
│ ├── account.css
| ├── loader.css
│ └── item.css
│
├── js/
| ├── script.js
│ ├── men.js
│ ├── women.js
│ ├── account.js
| ├── loader.js
│ └── item.js
│
├── images/
│ └── (All product & background images)
│
└── README.md
```

### 🧠 Technologies Used

| Type            | Tool / Library                           |
| --------------- | ---------------------------------------- |
| Frontend        | HTML5, CSS3, JavaScript (ES6)            |
| Design Approach | Minimal, Modern, Responsive              |
| Data            | Inline HTML structure (no external JSON) |

### 🎨 Design Philosophy

```
“Less but better.”
The project focuses on simplicity, balance, and clean aesthetics inspired by high-end fashion brands.
Neutral colors, generous spacing, and subtle transitions maintain an elegant, timeless look.
```

### 📄 License

This project is open-source and available under the `MIT License`.

### 👨‍💻 Author

```
Kamel Mustafa:
Frontend Designer & Developer
📧 kam.abdelfattah.com
```
