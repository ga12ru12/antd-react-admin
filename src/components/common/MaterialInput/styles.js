import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`
  margin-top: 20px;
  position: relative;

  label {
    position: absolute !important;
    left: ${props => (props.isPrefix ? '30px' : '11px')};
    line-height: 1.5;
    top: 4px;
    transition: 300ms ease all;
    color: rgba(0, 0, 0, 0.45);
  }

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    display: block;
    padding-left: ${props => (props.isPrefix ? '30px' : '11px')};

    &:focus {
      outline: none;
      box-shadow: none !important;
    }

    &:focus,
    &:not([value='']),
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      & ~ label {
        top: -20px;
        left: 11px;
        font-size: 90%;
        color: ${theme.palette.primary};
      }
    }

    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: ${theme.palette.primary};
      transition: 300ms ease all;
      left: 0%;
    }
  }

  i {
    position: absolute;
    top: 8px;
    left: 11px;
  }
`;
