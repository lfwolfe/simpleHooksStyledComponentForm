import styled from "styled-components";

export default styled.input.attrs((props) => ({
  maxLength: props.maxLength || 255,
  type: props.type || "text",
  size: props.size || "1em",
  id: props.name,
  name: props.name,
}))`
  border-radius: 5px;
  border: 1px solid #000;
  width: 100%;
`;
