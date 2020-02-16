const stateless = name => `import React from 'react'
//import { Container } from './styles
function ${name}() {
  return "Please Change me! 😄"
}

export default ${name}`;

module.exports = stateless;
