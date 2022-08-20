import React from 'react';
import './Search.css';

export default function SearchPanel({handleSearchChange, search}) {
    return (
      <div className="conversation-search">
        <input
          onChange={handleSearchChange}
          type="text"
          value={search}
          className="conversation-search-input"
          placeholder="Search or start new chat"
        />
      </div>
    );
}