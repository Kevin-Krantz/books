import { Route, BrowserRouter, Routes } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import BookPage from "./components/BookPage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Container>
        <SideBar />
        <ProductList />
        <Routes>
          <Route path="/books/:id" element={<BookPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
