import styled from "styled-components";
import { IProduct } from "../types/Product";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

function Product({ product }: Props): JSX.Element {
  return (
    <>
      <Link to={`/books/${product._id}`}>
        <Container key={product._id}>
          <TheStar className="fa-solid fa-star">4.2</TheStar>
          <img src={product.imgUrl} />
          <p>{product.title}</p>
        </Container>
      </Link>
    </>
  );
}

export default Product;

const Container = styled.div`
  display: grid;
  width: 200px;
  height: 250px;
  border-radius: 16px;
  border: 1px black;
  background-color: #54064a75;
  justify-items: center;
  align-items: center;

  transition: background-color 0.5s;
  &:hover {
    background-color: #ffffffb5;
  }

  img {
    width: 130px;
    height: 200px;
    margin-top: 25px;
    transition: filter 0.5s;
    z-index: 1;
  }

  &:hover {
    img {
      filter: saturate(200%);
    }
  }

  p {
    margin-top: 27px;
  }
`;

const TheStar = styled.div`
  position: absolute;
  margin-left: 130px;
  margin-top: 100px;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 5px;
  padding-left: 10px;
  color: #213a7d;
  z-index: 2;
`;
