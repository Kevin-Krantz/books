import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getIsOpen, setToggle } from "../../store/sideBar";
import RightNav from "./RightNav";

function Burger(): JSX.Element {
  const dispatch = useDispatch();

  const { isOpen } = useSelector(getIsOpen);

  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => dispatch(setToggle())}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav isOpen={isOpen} />
    </>
  );
}

export default Burger;

const StyledBurger = styled.div<{ isOpen: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
