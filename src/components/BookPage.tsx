import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../store/rtkApi";

function BookPage(): JSX.Element {
  const { id }: any = useParams();

  const { data: product } = useGetBookQuery(id);

  return (
    <Container>
      {product && (
        <div>
          <Title>{product.title}</Title>
          <Image src={product.imgUrl} alt={product.title} />
          <Author> Author: {product.author}</Author>
        </div>
      )}
    </Container>
  );
}

export default BookPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2em;
  margin-top: 20px;
`;

const Author = styled.h2`
  font-size: 1.5em;
  margin-top: 10px;
`;
