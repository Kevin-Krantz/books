import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../store/rtkApi";

function BookPage(): JSX.Element {
  const { id }: any = useParams();

  const { data: product } = useGetBookQuery(id);

  console.log(product, "BOOK??!?!?! u THERE !=!!=?!?!?!?!?!?");

  return (
    <Container>
      <h1>hejsan</h1>
      {/* <h1> Page gabbebög {product.map((p) => p.numberInStock)} </h1> */}
    </Container>
  );
}

export default BookPage;

const Container = styled.div`
  margin-left: 100px;
`;
