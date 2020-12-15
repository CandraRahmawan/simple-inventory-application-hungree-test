import styled from 'styled-components';

export const Wrapper = styled.div`
  .loading {
    position: absolute;
    left: calc(50% - 35px);
    top: 50%;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid transparent;

    &.component-loader {
      margin-top: -60px;
    }

    .effect-1,
    .effect-2 {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-left: 3px solid rgba(255, 234, 167, 1);
      border-radius: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .effect-1 {
      animation: rotate 1s ease infinite;
    }
    .effect-2 {
      animation: rotateOpacity 1s ease infinite 0.1s;
    }
    .effect-3 {
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-left: 3px solid rgba(255, 234, 167, 1);
      -webkit-animation: rotateOpacity 1s ease infinite 0.2s;
      animation: rotateOpacity 1s ease infinite 0.2s;
      border-radius: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .loading .effects {
      transition: all 0.3s ease;
    }
  }
  .fallback-logo {
    position: absolute;
    left: calc(50% - 45px);
    top: 40%;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
  @keyframes rotateOpacity {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 0.1;
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
      opacity: 1;
    }
  }
`;
