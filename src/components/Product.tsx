import styled from "styled-components";
import { IProduct } from "../types/Product";

interface Props {
  product: IProduct;
}

function Product({ product }: Props): JSX.Element {
  return (
    <>
      <Container key={product._id}>
        <TheStar className="fa-solid fa-star">4.2</TheStar>
        <img src={product.imgUrl} />
        <p>{product.title}</p>
      </Container>
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
  background-color: #004cff1e;
  justify-items: center;
  align-items: center;

  img {
    width: 130px;
    height: 200px;
    margin-top: 25px;
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
`;
