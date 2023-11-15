import React from 'react'

interface SearchResultHeaderProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchResultHeader: React.FC<SearchResultHeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-result-header">
      <div>Showing results for {searchQuery}</div>
      <input type="text" value={searchQuery} onChange={onSearchChange} />
    </div>
  );
};

export default SearchResultHeader