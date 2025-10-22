import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((category) => {
    const buttonClass = category === selectedCategory ? "selected" : "";

    return (
      <button
        key={category}
        className={buttonClass}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h3>Filter by Category</h3>
      <div>{categoryButtons}</div>
    </div>
  );
}

export default CategoryFilter;
