import styled from 'styled-components';

export const ContainerTooltip = styled.div`
  position: relative;

  :hover {
    div {
      display: block;
    }
  }
`;
export const ContainerExternal = styled.div`
  display: none;
  position: absolute;
  bottom: -36px;
  padding: 4px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;
