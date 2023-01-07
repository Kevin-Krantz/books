import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useGetBooksQuery } from "../store/rtkApi";
import { getSearchQuery, setSearchQuery } from "../store/search";
import Product from "./Product";

function ProductList(): JSX.Element {
  const { searchQuery } = useSelector(getSearchQuery);

  const dispatch = useDispatch();
  const { data: products = [] } = useGetBooksQuery();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
      />
      <Container>
        {filteredProducts.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </Container>
    </>
  );
}

export default ProductList;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;
