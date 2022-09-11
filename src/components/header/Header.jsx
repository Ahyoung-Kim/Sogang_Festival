import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeaderDiv, HeaderTitle 
} from '../../styledComponents';
import Navigation from './Navigation';

const Header = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const text = e.target.innerText;

    if(text === '지금 우리 학교는'){
      navigate('/')
    } else if(text === '플리마켓/마당'){
      navigate('/flea-market')
    } else if(text === '푸드트럭'){
      navigate('/food-truck')
    } else if(text === '공연일정'){
      navigate('/schedule')
    }
  }

  return (
    <>
      <HeaderDiv>

        <HeaderTitle onClick={onClick}>
          지금 우리 학교는
        </HeaderTitle>

        <Navigation onClick={onClick}/>
      
      </HeaderDiv> 
    </>
  );
};

export default Header;