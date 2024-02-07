import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') router.push(`/search/${searchInput}`);
    setSearchInput('');
  };
  return (
    <form className="searchcontainer" action="" onSubmit={handleSubmit}>
      <div className="searchinput-container">
        <div className="searchinput-content">
          <div className="searchinput-dist">
            <div className="searchinput-type">
              <input className="searchinput-is" type="text" required="" placeholder="Search Destinations.." onChange={handleChange} value={searchInput} />
              <button className="submit" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
}
