import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import ProductList from "./components/ProductList";

function App(): JSX.Element {
  const handleSearch = (query: string) => {
    // Do something with the search query here
    console.log(query);
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <Container>
        <ProductList />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
