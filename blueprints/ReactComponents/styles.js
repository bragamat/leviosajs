const style = content => {
  if (content) return content

  return `import styled from 'styled-components'

export const Container = styled.div\`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

\`
`
}

module.exports = style
