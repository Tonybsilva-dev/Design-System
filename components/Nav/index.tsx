import React from 'react';

// import { Container } from './styles';

interface HeaderProps{
  title: String,
} 


const Header: React.FC<HeaderProps> = (props) => {
  return <div>
          <h1>
            {props.title}
          </h1>
         </div>;
}

export default Header;