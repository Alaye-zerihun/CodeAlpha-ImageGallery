import './CategoryFilter.css'

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
            <span className="count">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter