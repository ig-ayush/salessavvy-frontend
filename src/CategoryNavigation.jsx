// CategoryNavigation.jsx
import React from 'react';
import './assets/styles.css';

export function CategoryNavigation({ onCategoryClick, activeCategory = 'Shirts' }) {
  const categories = ['Shirts', 'Pants', 'Accessories', 'Mobiles', 'Mobile Accessories'];

  return (
    <nav className="category-navigation" aria-label="Product categories">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              type="button"
              className={`category-item ${category === activeCategory ? 'active' : ''}`}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
