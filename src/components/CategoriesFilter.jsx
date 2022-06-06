import React from "react";
import { categories } from "../categories";

export const CategoriesFilter = ({
  currentCategory,
  selectCategoryHandler,
}) => {
  return (
    <div className="flex gap-4 mb-2 ml-4 py-4 overflow-x-scroll webkit">
      {categories?.map((category) => {
        return (
          <label
            className={
              category.categoryName === currentCategory
                ? "py-2 h-10 w-40 px-3 whitespace-nowrap text-sm font-medium rounded-full border border-gray-200 text-white bg-black z-10"
                : "py-2 h-10 w-40 px-3 whitespace-nowrap text-sm font-medium rounded-full border border-gray-200 text-gray-900 bg-white  hover:bg-gray-100 hover:text-blue-700"
            }
            htmlFor={category.categoryName}
          >
            <input
              className="opacity-0"
              type="radio"
              name="categories"
              id={category.categoryName}
              checked={category && category.categoryName === currentCategory}
              onChange={(e) => selectCategoryHandler(e.target.id)}
            />
            {category.categoryName}
          </label>
        );
      })}
    </div>
  );
};
