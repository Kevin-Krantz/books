import styled from "styled-components";

interface Props {
  searchQuery: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ searchQuery, onSearch }: Props) {
  return (
    <Container>
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
      <StyledInput
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={onSearch}
      />
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  position: relative;
  right: 32px;
  display: flex;
  justify-content: flex-end;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  width: 20%;
  padding-left: 40px;

  &:focus {
    border-color: #aaa;
    outline: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  margin-right: 248px;
  margin-top: 12px;
`;
