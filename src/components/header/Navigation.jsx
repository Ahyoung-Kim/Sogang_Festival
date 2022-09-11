import React from 'react';
import { NavigationBtn, NavigationDiv } from '../../styledComponents';

const NavigationBtnComp = ({ text, onClick }) => (
  <NavigationBtn onClick={onClick}>
    {text}
  </NavigationBtn>
)

const Navigation = ({ onClick }) => {

  return (
    <>
      <NavigationDiv>
        <NavigationBtnComp text="플리마켓/마당" onClick={onClick} />
        <NavigationBtnComp text="푸드트럭" onClick={onClick} />
        <NavigationBtnComp text="공연일정" onClick={onClick} />
      </NavigationDiv>
    </>
  );
};

export default Navigation;