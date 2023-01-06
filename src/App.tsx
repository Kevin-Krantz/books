import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App(): JSX.Element {
  const [query, setQuery] = useState("");

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <Container>
        <ProductList query={query} setQuery={setQuery} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
