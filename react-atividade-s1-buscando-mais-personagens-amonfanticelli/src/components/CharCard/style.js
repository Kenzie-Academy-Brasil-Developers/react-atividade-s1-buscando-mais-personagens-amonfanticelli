import styled from "styled-components";

export const CharacterList = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  justify-content: center;
`;

export const ListElement = styled.li`
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px;
  width: 18%;
  height: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 255, 0, 0.5);

  min-height: 350px;
  min-width: 250px;
`;

export const Img = styled.img`
  width: 70%;
  height: 75%;
`;

export const CardTitle = styled.h1`
  font-family: var(--font-bangers);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  text-overflow: ellipsis;
`;
