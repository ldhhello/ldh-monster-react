import React from "react";
import { createPortal } from "react-dom"
import styled from 'styled-components';
import xImage from '../assets/x.svg';

const PopupBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(215, 215, 215, 0.4);
  backdrop-filter: blur(11.3px);
  -webkit-backdrop-filter: blur(11.3px);
  z-index: 1000;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InnerBox = styled.div`
  position: absolute;
  height: 80vh;
  max-width: 80vw;
`;

const Img = styled.img`
  height: 80vh;
  max-width: 80vw;

  //background-color: white;
  //border-radius: calc(min(70vw, 80vh) / 100 * 8);
  object-fit: contain;
`;

const Xbutton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: calc(min(70vw, 80vh) / 100 * 5);
  img {
    width: calc(min(70vw, 80vh) / 100 * 5);
  }

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

type Props = {
  src: string,
  objectFit?: "fill" | "contain",
  onClick?: Function
}

export default function PopupImage(props: Props) {
  const enableXbutton = false;

  const objectFit = props.objectFit || "contain";
  const onClick = (_event?: React.MouseEvent) => {
    // if (event && event.target !== event.currentTarget)
    //   return;

    if(props.onClick !== undefined)
      props.onClick();
  }

  return createPortal(<PopupBox onClick={onClick}>
    <InnerBox>
      <Img src={props.src} style={{objectFit}}/>
      {enableXbutton && <Xbutton onClick={() => onClick()}>
        <img src={xImage} />
      </Xbutton>}
    </InnerBox>
  </PopupBox>, document.body);
}