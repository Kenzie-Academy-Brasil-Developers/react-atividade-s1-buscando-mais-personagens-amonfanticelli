import styled from "styled-components";

export const ButtonAfter = styled.button`
  background-color: ${(props) => (props.isDisabled ? "gray" : "black")};
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
