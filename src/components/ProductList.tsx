import styled from "styled-components";

function ProductList() {
  return (
    <Container>
      {/* {products.map((product) => (
        <Product {...product} />
      ))} */}
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;
