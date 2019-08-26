import transition from "styled-transition-group"

const Fade = transition.div`
  position:absolute;
  background-color: #${(props) => props.membarColor};
  width: 710px;
  height: 400px;
	font-size: 40px;
  text-align: center;
  margin-top: 47px;
  ${(props) => props.membarPosition}: 650px;
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