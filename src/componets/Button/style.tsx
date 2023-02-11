import styled from "styled-components";

export const Btn = styled.button<{ color: string }>`
  background-color: ${(Props) => Props.color};
  height: 50px;
  border: none;
  color: #fff;
  border-radius: 5px;
`;
