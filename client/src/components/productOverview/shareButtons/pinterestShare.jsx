import styled from 'styled-components';

const Image = styled.img`
  width: 25px;
  height: 25px;
`

export default function Pinterest(props) {
  const clickHandler = props.clickHandler;
  return(
    <Image src="https://favpng.com/img/share_pinterest.png"onClick={() => {clickHandler()}} />
  )
}