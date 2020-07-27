import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {

  const [colorNav, setColorNav] = useState(true);

  const handleScroll = () => {
    const colorNav = window.scrollY < 70;
    setColorNav(colorNav)
  };

  const url = useLocation().pathname;
  window.addEventListener('scroll', handleScroll);

  return useObserver(() => (
    <>
      <div className={`${style.header} ${colorNav && url !== '/datamap' && url !== '/about' ? style.header__scroll : style.header}`}>
        <div className={style.header__wrapper}>
          
          <Link to="/">
            <svg width="224" height="31" viewBox="0 0 224 31" fill="none" alt="Bike Data Project logo" xmlns="http://www.w3.org/2000/svg">
              <path d="M63.2991 16.6398C64.1257 16.8798 64.7591 17.2998 65.1991 17.8998C65.6524 18.4998 65.8791 19.2398 65.8791 20.1198C65.8791 21.3331 65.4457 22.2865 64.5791 22.9798C63.7257 23.6598 62.5324 23.9998 60.9991 23.9998H54.5391V9.75979H60.7991C62.2657 9.75979 63.4191 10.0931 64.2591 10.7598C65.0991 11.4131 65.5191 12.3198 65.5191 13.4798C65.5191 14.2265 65.3191 14.8798 64.9191 15.4398C64.5324 15.9865 63.9924 16.3865 63.2991 16.6398ZM57.0591 15.7598H60.3791C62.1657 15.7598 63.0591 15.0931 63.0591 13.7598C63.0591 13.0931 62.8391 12.5931 62.3991 12.2598C61.9591 11.9265 61.2857 11.7598 60.3791 11.7598H57.0591V15.7598ZM60.7191 21.9998C61.6524 21.9998 62.3324 21.8331 62.7591 21.4998C63.1991 21.1665 63.4191 20.6398 63.4191 19.9198C63.4191 19.1865 63.1991 18.6465 62.7591 18.2998C62.3324 17.9531 61.6524 17.7798 60.7191 17.7798H57.0591V21.9998H60.7191Z" fill="white"/>
              <path d="M68.4677 23.9998V13.8998H70.9477V23.9998H68.4677ZM68.3077 9.31979H71.0877V11.7798H68.3077V9.31979Z" fill="white"/>
              <path d="M84.0025 23.9998H80.8825L76.4625 19.3398V23.9998H73.9825V9.27979H76.4625V18.3598L80.6225 13.9198H83.6425L79.1025 18.7398L84.0025 23.9998Z" fill="white"/>
              <path d="M94.0014 19.0798H87.0414C87.0947 20.1598 87.3614 20.9598 87.8414 21.4798C88.3347 21.9865 89.0614 22.2398 90.0214 22.2398C91.1281 22.2398 92.1547 21.8798 93.1014 21.1598L93.8214 22.8798C93.3414 23.2665 92.7481 23.5798 92.0414 23.8198C91.3481 24.0465 90.6414 24.1598 89.9214 24.1598C88.2681 24.1598 86.9681 23.6931 86.0214 22.7598C85.0747 21.8265 84.6014 20.5465 84.6014 18.9198C84.6014 17.8931 84.8081 16.9798 85.2214 16.1798C85.6347 15.3798 86.2147 14.7598 86.9614 14.3198C87.7081 13.8665 88.5547 13.6398 89.5014 13.6398C90.8881 13.6398 91.9814 14.0931 92.7814 14.9998C93.5947 15.8931 94.0014 17.1265 94.0014 18.6998V19.0798ZM89.5614 15.4398C88.8947 15.4398 88.3481 15.6398 87.9214 16.0398C87.5081 16.4265 87.2414 16.9931 87.1214 17.7398H91.8214C91.7414 16.9798 91.5081 16.4065 91.1214 16.0198C90.7481 15.6331 90.2281 15.4398 89.5614 15.4398Z" fill="white"/>
              <path d="M102.387 9.75979H107.627C109.96 9.75979 111.767 10.3798 113.047 11.6198C114.34 12.8598 114.987 14.6065 114.987 16.8598C114.987 19.1265 114.34 20.8865 113.047 22.1398C111.767 23.3798 109.96 23.9998 107.627 23.9998H102.387V9.75979ZM107.467 21.8998C110.747 21.8998 112.387 20.2198 112.387 16.8598C112.387 13.5265 110.747 11.8598 107.467 11.8598H104.967V21.8998H107.467Z" fill="white"/>
              <path d="M127.401 13.8998V23.9998H124.941V22.3798C124.634 22.9398 124.194 23.3798 123.621 23.6998C123.048 24.0065 122.394 24.1598 121.661 24.1598C120.781 24.1598 120.001 23.9465 119.321 23.5198C118.641 23.0931 118.114 22.4865 117.741 21.6998C117.368 20.9131 117.181 19.9998 117.181 18.9598C117.181 17.9198 117.368 16.9998 117.741 16.1998C118.128 15.3865 118.661 14.7598 119.341 14.3198C120.021 13.8665 120.794 13.6398 121.661 13.6398C122.394 13.6398 123.048 13.7998 123.621 14.1198C124.194 14.4265 124.634 14.8598 124.941 15.4198V13.8998H127.401ZM122.341 22.1998C123.168 22.1998 123.808 21.9131 124.261 21.3398C124.714 20.7665 124.941 19.9598 124.941 18.9198C124.941 17.8531 124.714 17.0331 124.261 16.4598C123.808 15.8865 123.161 15.5998 122.321 15.5998C121.494 15.5998 120.848 15.8998 120.381 16.4998C119.928 17.0865 119.701 17.9065 119.701 18.9598C119.701 19.9998 119.928 20.7998 120.381 21.3598C120.848 21.9198 121.501 22.1998 122.341 22.1998Z" fill="white"/>
              <path d="M133.604 15.7798V20.2998C133.604 21.4865 134.157 22.0798 135.264 22.0798C135.571 22.0798 135.904 22.0265 136.264 21.9198V23.8998C135.824 24.0598 135.291 24.1398 134.664 24.1398C133.517 24.1398 132.637 23.8198 132.024 23.1798C131.411 22.5398 131.104 21.6198 131.104 20.4198V15.7798H129.164V13.8998H131.104V11.4398L133.604 10.5998V13.8998H136.284V15.7798H133.604Z" fill="white"/>
              <path d="M147.962 13.8998V23.9998H145.502V22.3798C145.195 22.9398 144.755 23.3798 144.182 23.6998C143.609 24.0065 142.955 24.1598 142.222 24.1598C141.342 24.1598 140.562 23.9465 139.882 23.5198C139.202 23.0931 138.675 22.4865 138.302 21.6998C137.929 20.9131 137.742 19.9998 137.742 18.9598C137.742 17.9198 137.929 16.9998 138.302 16.1998C138.689 15.3865 139.222 14.7598 139.902 14.3198C140.582 13.8665 141.355 13.6398 142.222 13.6398C142.955 13.6398 143.609 13.7998 144.182 14.1198C144.755 14.4265 145.195 14.8598 145.502 15.4198V13.8998H147.962ZM142.902 22.1998C143.729 22.1998 144.369 21.9131 144.822 21.3398C145.275 20.7665 145.502 19.9598 145.502 18.9198C145.502 17.8531 145.275 17.0331 144.822 16.4598C144.369 15.8865 143.722 15.5998 142.882 15.5998C142.055 15.5998 141.409 15.8998 140.942 16.4998C140.489 17.0865 140.262 17.9065 140.262 18.9598C140.262 19.9998 140.489 20.7998 140.942 21.3598C141.409 21.9198 142.062 22.1998 142.902 22.1998Z" fill="white"/>
              <path d="M156.953 9.75979H163.133C164.666 9.75979 165.86 10.1331 166.713 10.8798C167.566 11.6131 167.993 12.6198 167.993 13.8998C167.993 15.1798 167.56 16.1931 166.693 16.9398C165.84 17.6865 164.653 18.0598 163.133 18.0598H159.533V23.9998H156.953V9.75979ZM162.833 16.0598C163.726 16.0598 164.4 15.8798 164.853 15.5198C165.32 15.1465 165.553 14.6131 165.553 13.9198C165.553 13.2131 165.326 12.6798 164.873 12.3198C164.42 11.9465 163.74 11.7598 162.833 11.7598H159.533V16.0598H162.833Z" fill="white"/>
              <path d="M175.638 13.6598C176.025 13.6598 176.358 13.7131 176.638 13.8198L176.618 16.0998C176.191 15.9265 175.751 15.8398 175.298 15.8398C174.445 15.8398 173.791 16.0865 173.338 16.5798C172.898 17.0731 172.678 17.7265 172.678 18.5398V23.9998H170.198V16.7598C170.198 15.6931 170.145 14.7398 170.038 13.8998H172.378L172.578 15.6798C172.831 15.0265 173.231 14.5265 173.778 14.1798C174.325 13.8331 174.945 13.6598 175.638 13.6598Z" fill="white"/>
              <path d="M182.715 24.1598C181.688 24.1598 180.782 23.9465 179.995 23.5198C179.222 23.0931 178.622 22.4865 178.195 21.6998C177.782 20.8998 177.575 19.9665 177.575 18.8998C177.575 17.8331 177.782 16.9065 178.195 16.1198C178.622 15.3198 179.222 14.7065 179.995 14.2798C180.782 13.8531 181.688 13.6398 182.715 13.6398C183.728 13.6398 184.622 13.8531 185.395 14.2798C186.168 14.7065 186.762 15.3198 187.175 16.1198C187.602 16.9065 187.815 17.8331 187.815 18.8998C187.815 19.9665 187.602 20.8998 187.175 21.6998C186.762 22.4865 186.168 23.0931 185.395 23.5198C184.622 23.9465 183.728 24.1598 182.715 24.1598ZM182.695 22.1998C183.548 22.1998 184.195 21.9265 184.635 21.3798C185.088 20.8198 185.315 19.9931 185.315 18.8998C185.315 17.8198 185.088 16.9998 184.635 16.4398C184.182 15.8665 183.542 15.5798 182.715 15.5798C181.875 15.5798 181.228 15.8665 180.775 16.4398C180.322 16.9998 180.095 17.8198 180.095 18.8998C180.095 19.9931 180.315 20.8198 180.755 21.3798C181.208 21.9265 181.855 22.1998 182.695 22.1998Z" fill="white"/>
              <path d="M187.691 26.2198C188.051 26.3265 188.377 26.3798 188.671 26.3798C189.151 26.3798 189.537 26.2398 189.831 25.9598C190.124 25.6798 190.271 25.2265 190.271 24.5998V13.8998H192.751V24.7198C192.751 25.9198 192.444 26.8398 191.831 27.4798C191.231 28.1198 190.371 28.4398 189.251 28.4398C188.651 28.4398 188.131 28.3665 187.691 28.2198V26.2198ZM190.111 9.31979H192.891V11.7798H190.111V9.31979Z" fill="white"/>
              <path d="M204.626 19.0798H197.666C197.719 20.1598 197.986 20.9598 198.466 21.4798C198.959 21.9865 199.686 22.2398 200.646 22.2398C201.752 22.2398 202.779 21.8798 203.726 21.1598L204.446 22.8798C203.966 23.2665 203.372 23.5798 202.666 23.8198C201.972 24.0465 201.266 24.1598 200.546 24.1598C198.892 24.1598 197.592 23.6931 196.646 22.7598C195.699 21.8265 195.226 20.5465 195.226 18.9198C195.226 17.8931 195.432 16.9798 195.846 16.1798C196.259 15.3798 196.839 14.7598 197.586 14.3198C198.332 13.8665 199.179 13.6398 200.126 13.6398C201.512 13.6398 202.606 14.0931 203.406 14.9998C204.219 15.8931 204.626 17.1265 204.626 18.6998V19.0798ZM200.186 15.4398C199.519 15.4398 198.972 15.6398 198.546 16.0398C198.132 16.4265 197.866 16.9931 197.746 17.7398H202.446C202.366 16.9798 202.132 16.4065 201.746 16.0198C201.372 15.6331 200.852 15.4398 200.186 15.4398Z" fill="white"/>
              <path d="M211.623 24.1598C210.569 24.1598 209.656 23.9465 208.883 23.5198C208.109 23.0931 207.516 22.4931 207.103 21.7198C206.689 20.9331 206.483 20.0131 206.483 18.9598C206.483 17.9065 206.696 16.9798 207.123 16.1798C207.563 15.3798 208.176 14.7598 208.963 14.3198C209.763 13.8665 210.683 13.6398 211.723 13.6398C212.443 13.6398 213.136 13.7531 213.803 13.9798C214.483 14.2065 215.023 14.5198 215.423 14.9198L214.723 16.6798C214.296 16.3331 213.843 16.0731 213.363 15.8998C212.883 15.7131 212.409 15.6198 211.943 15.6198C211.036 15.6198 210.329 15.9065 209.823 16.4798C209.316 17.0398 209.063 17.8531 209.063 18.9198C209.063 19.9865 209.309 20.7998 209.803 21.3598C210.309 21.9198 211.023 22.1998 211.943 22.1998C212.409 22.1998 212.883 22.1065 213.363 21.9198C213.843 21.7331 214.296 21.4665 214.723 21.1198L215.423 22.8798C214.996 23.2798 214.443 23.5931 213.763 23.8198C213.083 24.0465 212.369 24.1598 211.623 24.1598Z" fill="white"/>
              <path d="M220.64 15.7798V20.2998C220.64 21.4865 221.193 22.0798 222.3 22.0798C222.607 22.0798 222.94 22.0265 223.3 21.9198V23.8998C222.86 24.0598 222.327 24.1398 221.7 24.1398C220.553 24.1398 219.673 23.8198 219.06 23.1798C218.447 22.5398 218.14 21.6198 218.14 20.4198V15.7798H216.2V13.8998H218.14V11.4398L220.64 10.5998V13.8998H223.32V15.7798H220.64Z" fill="white"/>
              <path d="M20.3307 4.70999C21.6686 4.70999 22.7532 3.67519 22.7532 2.3987C22.7532 1.1222 21.6686 0.0874023 20.3307 0.0874023C18.9928 0.0874023 17.9082 1.1222 17.9082 2.3987C17.9082 3.67519 18.9928 4.70999 20.3307 4.70999Z" fill="white"/>
              <path d="M20.3309 4.79813C18.951 4.79813 17.8164 3.71563 17.8164 2.39907C17.8164 1.08251 18.951 0 20.3309 0C21.7108 0 22.8454 1.08251 22.8454 2.39907C22.8454 3.71563 21.7108 4.79813 20.3309 4.79813ZM20.3309 0.146284C19.043 0.146284 17.9697 1.14102 17.9697 2.39907C17.9697 3.62785 19.0123 4.65185 20.3309 4.65185C21.6188 4.65185 22.6921 3.65711 22.6921 2.39907C22.6921 1.14102 21.6188 0.146284 20.3309 0.146284Z" fill="white"/>
              <path d="M7.35946 30.9257C3.31176 30.9257 0 27.7659 0 23.904C0 20.0421 3.31176 16.8823 7.35946 16.8823C11.4072 16.8823 14.7189 20.0421 14.7189 23.904C14.7189 27.7659 11.4072 30.9257 7.35946 30.9257ZM7.35946 17.9648C3.92504 17.9648 1.16525 20.6272 1.16525 23.8747C1.16525 27.1223 3.95571 29.7846 7.35946 29.7846C10.7632 29.7846 13.5537 27.1515 13.5537 23.904C13.5537 20.6565 10.7939 17.9648 7.35946 17.9648Z" fill="white"/>
              <path d="M28.6388 30.9257C24.5911 30.9257 21.2793 27.7659 21.2793 23.904C21.2793 20.0421 24.5911 16.8823 28.6388 16.8823C32.6865 16.8823 35.9982 20.0421 35.9982 23.904C35.9982 27.7659 32.6865 30.9257 28.6388 30.9257ZM28.6388 17.9648C25.2043 17.9648 22.4445 20.6272 22.4445 23.8747C22.4445 27.1223 25.235 29.7846 28.6388 29.7846C32.0425 29.7846 34.833 27.1223 34.833 23.8747C34.833 20.6272 32.0425 17.9648 28.6388 17.9648Z" fill="white"/>
              <path d="M26.2785 9.94836C26.0945 9.94836 25.9412 9.97762 25.7878 10.0361C24.04 10.0946 19.8696 8.86585 18.7964 7.46152C18.5204 7.08118 18.0604 6.81787 17.5391 6.81787C16.7112 6.81787 16.0059 7.46152 16.0059 8.28072C15.9446 9.74356 14.81 11.6453 12.6022 12.4937C11.8969 12.6985 11.4062 13.3129 11.4062 14.0443C11.4062 14.922 12.1729 15.6535 13.0928 15.6535C14.1354 15.829 16.6499 17.9355 16.9872 19.8079C16.9872 20.1298 17.0792 20.4223 17.2631 20.6564C17.3245 20.7442 17.3551 20.8027 17.4165 20.8612C18.0604 21.8559 17.9991 24.6353 16.6499 26.42C15.9446 27.0051 15.8526 27.9999 16.4352 28.702C17.0485 29.3749 18.0911 29.4627 18.827 28.9068C19.471 28.3802 19.5936 27.5025 19.1643 26.8296C18.643 25.3667 18.643 22.09 19.8083 20.9782C20.1456 20.6856 20.3603 20.276 20.3603 19.8079C20.3603 18.9302 19.5936 18.1988 18.6737 18.1988C18.643 18.1988 18.643 18.1988 18.6124 18.1988C17.2631 17.9355 15.0246 15.6535 14.7793 13.9273C14.9327 12.0549 16.1899 10.7968 17.9071 9.65579C18.0298 9.62653 18.1524 9.56802 18.2444 9.50951C21.0962 9.50951 23.4574 10.3872 24.9292 12.0549C25.1746 12.523 25.6959 12.8155 26.2478 12.8155C27.0758 12.8155 27.781 12.1719 27.781 11.3527C27.781 10.5335 27.1064 9.94836 26.2785 9.94836Z" fill="white"/>
            </svg>
          </Link>

          <NavBar />
        </div>
      </div>
    </>
  ));
};

export default Header;
