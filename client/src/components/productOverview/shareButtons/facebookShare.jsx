import styled from 'styled-components';

const Image = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 5px;
`

export default function Facebook(props) {
  const clickHandler = props.clickHandler;
  return(
    <Image src="https://favpng.com/img/share_facebook.png" onClick={() => {clickHandler()}} />
  )
}