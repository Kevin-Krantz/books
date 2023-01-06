import styled from "styled-components";
import { useGetBooksQuery } from "../store/rtkApi";
import Product from "./Product";

type ProductListProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function ProductList({ query, setQuery }: ProductListProps): JSX.Element {
  const { data: products = [] } = useGetBooksQuery();

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      {filteredProducts.map((product: any) => (
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
