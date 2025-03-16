import React from 'react';
import styled from 'styled-components';

const Preloader = () => {
    return (
        <StyledWrapper>
            <div className="loading">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <h1 className="text-3xl font-semibold mt-4">Welcome to Helpdesk!</h1>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loading {
   --speed-of-animation: 0.9s;
   --gap: 6px;
   --first-color: #4c86f9;
   --second-color: #49a84c;
   --third-color: #f6bb02;
   --fourth-color: #49a84c;
   --fifth-color: #2196f3;
   display: flex;
   gap: 8px;
  }

  .loading span {
   width: 5px;
   height: 100px;
   background: var(--first-color);
   animation: scale var(--speed-of-animation) ease-in-out infinite;
  }

  .loading span:nth-child(2) {
   background: var(--second-color);
   animation-delay: -0.8s;
  }

  .loading span:nth-child(3) {
   background: var(--third-color);
   animation-delay: -0.7s;
  }

  .loading span:nth-child(4) {
   background: var(--fourth-color);
   animation-delay: -0.6s;
  }

  .loading span:nth-child(5) {
   background: var(--fifth-color);
   animation-delay: -0.5s;
  }

  @keyframes scale {
   0%, 40%, 100% {
    transform: scaleY(0.05);
   }
   20% {
    transform: scaleY(1);
   }
  }
`;

export default Preloader;
