import styled from "styled-components";
import { useGetBooksQuery } from "../store/rtkApi";
import Product from "./Product";

function ProductList(): JSX.Element {
  const { data: products = [] } = useGetBooksQuery();

  return (
    <Container>
      {products.map((product: any) => (
        <Product key={product._id} product={product} />
      ))}
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
