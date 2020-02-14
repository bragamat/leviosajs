const stateless = name => `import React from 'react'

function ${name}() {
  return (
    <div>
      Please Change me! 😄
    </div>
  )
}

export default ${name}`;

module.exports = stateless;
