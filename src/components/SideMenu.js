// import React, { useEffect, useRef } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import '../styles/SideMenu.css'; // Import the CSS file

function SideMenu() {

// const menuRef = useRef(null);

  // useEffect(() => {
  //   const setLineHeight = () => {
  //     const containerHeight = menuRef.current?.clientHeight || 0;
  //     const screenHeight = window.innerHeight;
  //     const line = document.querySelector('.line');
  //     const lineHeight = screenHeight - containerHeight;
  //     // const icon = document.querySelector('.icon');
  //     line.style.top = `${containerHeight}px`;

  //     console.log(containerHeight)

  //     line.style.height = `${lineHeight}px`;
  //   };

  // setTimeout(setLineHeight, 0);

  //   // Add an event listener to handle window resize
  //   window.addEventListener('resize', setLineHeight);

  //   // Cleanup the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('resize', setLineHeight);
  //   };
  // }, []);


  return (
    <div className="menu"> {/* Apply the CSS class */}
      <a className="icon" href="https://github.com/cnmnzhang" target="_blank" rel="noreferrer">
          <GitHubIcon
          ></GitHubIcon>
        </a>
        <a className="icon" href="https://www.linkedin.com/in/cindy-zhang-/" target="_blank" rel="noreferrer">
          <LinkedInIcon
          ></LinkedInIcon>
        </a>
        <a className="icon" href="https://www.goodreads.com/cindyzhang" target="_blank" rel="noreferrer">
          <BookIcon
          ></BookIcon>
        </a>
        <a className="icon" href="mailto:czhan117@jhu.edu" target="_blank" rel="noreferrer">
          <EmailRoundedIcon
          ></EmailRoundedIcon>
        </a>
      
    </div>
  );
}

export default SideMenu;
