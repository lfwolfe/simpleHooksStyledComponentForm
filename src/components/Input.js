import styled from "styled-components";

export default styled.input.attrs((props) => ({
  maxLength: props.maxLength || 255,
  type: props.type || "text",
  size: props.size || "1em",
  id: props.name,
  name: props.name,
}))`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #000;
  width: 100%;
  font-size: 1rem;
  height: 2rem;
  padding: 0.25rem;
  margin: 0.25rem 0;
`;
