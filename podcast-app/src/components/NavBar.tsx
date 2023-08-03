// // NavigationBar.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Input } from '@mui/material';

// interface NavigationBarProps {
//   onSearch: (query: string) => void;
//   onSort: (ascending: boolean) => void;
//   onThemeChange: () => void;
// }

// function NavBar({ onSearch, onSort, onThemeChange }: NavigationBarProps) {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     onSearch(searchQuery);
//   };

//   const handleSortOptionChange = () => {
//     onSort(true); 
//   };

//   const handleThemeChange = () => {
//     onThemeChange();
//   };

//   return (
//     <div className="navigation-bar">
//       <Link to="/">
//         <button>Back</button>
//       </Link>
//       <div className="sort-option">
//         <label>
//           A-Z
//           <input type="radio" name="sort-option" onChange={handleSortOptionChange} />
//         </label>
//       </div>
//       <form onSubmit={handleSearchSubmit} className="search-bar">
//         <Input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//           placeholder="Search for a podcast..."
//         />
//         <button type="submit">Search</button>
//       </form>
      
//       <div className="theme-toggle">
//         <button onClick={handleThemeChange}>Toggle Theme</button>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
