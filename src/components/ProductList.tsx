import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useGetBooksQuery } from "../store/rtkApi";
import { getSearchQuery, setSearchQuery } from "../store/search";
import Product from "./Product";
import SearchBox from "./common/SearchBox";

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
      <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
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
  gap: 72px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`;
