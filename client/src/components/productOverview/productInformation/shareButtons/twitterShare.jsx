import styled from 'styled-components';

const Image = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 5px;
`

export default function Twitter(props) {
  const clickHandler = props.clickHandler;
  return(
    <Image src="https://favpng.com/img/share_twitter.png" onClick={() => {clickHandler()}} />
  )
}