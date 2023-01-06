import React, { useState } from "react";

type SearchBoxProps = {
  onSearch: (query: string) => void;
};

function SearchBox({ onSearch }: SearchBoxProps): JSX.Element {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Go</button>
    </form>
  );
}

export default SearchBox;
