const appStyle = `import styled from "styled-components";

export const Container = styled.main\`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
\`;

export const Img = styled.img\`
  max-height: 250px;
\`;

export const Text = styled.span\`
  font-size: 35px;
  margin-top: 4px;
  margin-bottom: 4px;
\`;

export const List = styled.ul\`\`;

export const ListItem = styled.li\`
  margin-top: 10px;
  margin-bottom: 10px;
\`;
`

module.exports = appStyle
