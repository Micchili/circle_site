import transition from "styled-transition-group"

const Fade = transition.div`
  line-height: 70px;
  position:absolute;
  background-color: #${(props) => props.membarColor};
  text-align: center;
  ${(props) => props.membarPosition}: 0px;

  @media screen and (min-width: 1024px) {
    line-height: 70px;
    width: 550px;
    height: 400px;
	  font-size: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    line-height: 70px;
    width: 550px;
    height: 400px;
	  font-size: 37px;
  }
  @media screen and (max-width: 767px) {
    line-height: 23px;
    width: 175px;
    height: 175px;
	  font-size: 14px;
  }
  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

`

export default Fade