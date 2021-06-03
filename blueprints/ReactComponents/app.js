const appComponent = () => `import React from "react";
import { hot } from "react-hot-loader/root";
import { Container, Img, Text, List, ListItem } from "./styles";
import GlobalStyles from "../globalStyle";

const commands = [
  {
    key: Math.random(4),
    name: "new",
    description: "To bundle a new React App ✨"
  },
  {
    key: Math.random(4),
    name: "start",
    description: "To start your application 🚀"
  },
  {
    key: Math.random(4),
    name: "build",
    description: "To build your application for production 😎"
  },
  {
    key: Math.random(4),
    name: "accio",
    description: "To build a new component for your application 💥"
  },
  {
    key: Math.random(4),
    name: "test",
    description: "To run tests 📈"
  }
];

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Img src="https://raw.githubusercontent.com/bragamat/leviosajs/master/images/leviosa.gif" alt="logo" />
        <Text>
          Feel Free to Change me at <code>/src/App.js</code> 😄
        </Text>
        <Text>You have the following commands available on your terminal:</Text>
        <List>
          {commands.map(({ key, name, description }) => (
            <ListItem key={key}>
              <Text>
                <code>leviosa-{name}</code> - {description}
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default hot(App);
`

module.exports = appComponent
