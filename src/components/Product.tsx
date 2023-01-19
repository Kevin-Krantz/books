import styled from "styled-components";
import { IProduct } from "../types/Product";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

function Product({ product }: Props): JSX.Element {
  return (
    <>
      <Link style={{ all: "unset" }} to={`/books/${product._id}`}>
        <Container key={product._id}>
          <TheStar className="fa-solid fa-star">
            <span>4.2</span>
          </TheStar>
          <img alt="Book" src={product.imgUrl} />
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
  background-color: #0000006b;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    height: min-content;
    width: min-content;
    background-color: unset;
  }

  cursor: pointer;

  transition: background-color 0.5s;
  &:hover {
    background-color: #ffeca9e8;

    @media (max-width: 768px) {
      background-color: unset;
    }
  }

  img {
    width: 130px;
    height: 200px;
    margin-top: 25px;
    transition: filter 0.3s;
    z-index: 1;

    @media (max-width: 768px) {
      width: 100px;
      height: 150px;
    }
  }

  &:hover {
    img {
      filter: saturate(250%);
    }
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
  padding-top: 5px;
  padding-left: 10px;
  color: #ffff00;
  z-index: 2;
  background-color: #712626;

  span {
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 100px;
    margin-top: auto;
    background-color: #5b5b54;
  }
`;
