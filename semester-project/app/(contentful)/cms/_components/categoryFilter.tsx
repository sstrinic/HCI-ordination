'use client';
import React from 'react';

const CategoryFilter = () => {
  return (
    <label>
      Filter by Label:
      <select>
        <option value="">All</option>
        <option value="other">Other</option>
        <option value="health">Health</option>
        <option value="world">World</option>
        <option value="local">Local</option>
      </select>
    </label>
  );
};

export default CategoryFilter;
