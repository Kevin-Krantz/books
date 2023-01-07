import styled from "styled-components";
import ProductList from "./components/ProductList";

function App(): JSX.Element {
  return (
    <>
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
