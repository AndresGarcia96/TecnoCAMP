import React from "react";
import styles from "./Icons.module.css";
import { Link } from "react-router-dom";

export default function Icons() {
  /*   const onClickMe = (event)=>{
    const value = event.target.name;
    console.log(event.target.name)
  } */

  return (
    <div>
      <Link to="/cart">
        <div name="cart">
          <svg
            width="30"
            height="43"
            viewBox="0 0 45 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              value="shopping cart"
              d="M43.7855 10.1455C43.3896 9.45947 42.8225 8.88773 42.1398 8.48609C41.457 8.08445 40.6818 7.86664 39.8897 7.85388H10.5564L9.22721 2.67472C9.09292 2.17476 8.79331 1.735 8.37718 1.42707C7.96105 1.11913 7.45292 0.961161 6.93555 0.978883H2.35221C1.74443 0.978883 1.16153 1.22033 0.73176 1.6501C0.30199 2.07987 0.0605469 2.66276 0.0605469 3.27055C0.0605469 3.87834 0.30199 4.46123 0.73176 4.891C1.16153 5.32077 1.74443 5.56222 2.35221 5.56222H5.19388L11.5189 29.0747C11.6532 29.5747 11.9528 30.0144 12.3689 30.3224C12.785 30.6303 13.2932 30.7883 13.8105 30.7705H34.4355C34.8587 30.7693 35.2733 30.6508 35.6333 30.4283C35.9933 30.2059 36.2847 29.8881 36.4751 29.5101L43.9918 14.4768C44.3176 13.7939 44.4693 13.041 44.4333 12.2852C44.3973 11.5295 44.1748 10.7944 43.7855 10.1455Z"
              fill="#50C6E0"
            />
            <path
              d="M12.665 42.2305C14.5635 42.2305 16.1025 40.6914 16.1025 38.793C16.1025 36.8945 14.5635 35.3555 12.665 35.3555C10.7666 35.3555 9.22754 36.8945 9.22754 38.793C9.22754 40.6914 10.7666 42.2305 12.665 42.2305Z"
              fill="#50C6E0"
            />
            <path
              d="M35.5811 42.2305C37.4795 42.2305 39.0186 40.6914 39.0186 38.793C39.0186 36.8945 37.4795 35.3555 35.5811 35.3555C33.6826 35.3555 32.1436 36.8945 32.1436 38.793C32.1436 40.6914 33.6826 42.2305 35.5811 42.2305Z"
              fill="#50C6E0"
            />
          </svg>
        </div>
      </Link>

      <Link to="/favorites">
        <div name="favorites">
          <svg
            width="30"
            height="40"
            viewBox="0 0 47 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              value="hola"
              name="chau"
              d="M23.1756 39.2287C22.874 39.2305 22.575 39.1727 22.2958 39.0586C22.0166 38.9446 21.7626 38.7766 21.5485 38.5642L3.74226 20.735C1.50871 18.4781 0.255859 15.4311 0.255859 12.2558C0.255859 9.08056 1.50871 6.03354 3.74226 3.77665C5.99327 1.53199 9.04249 0.271484 12.2214 0.271484C15.4004 0.271484 18.4496 1.53199 20.7006 3.77665L23.1756 6.25165L25.6506 3.77665C27.9016 1.53199 30.9508 0.271484 34.1298 0.271484C37.3087 0.271484 40.3579 1.53199 42.6089 3.77665C44.8425 6.03354 46.0953 9.08056 46.0953 12.2558C46.0953 15.4311 44.8425 18.4781 42.6089 20.735L24.8027 38.5642C24.5885 38.7766 24.3346 38.9446 24.0554 39.0586C23.7762 39.1727 23.4772 39.2305 23.1756 39.2287Z"
              fill="#50C6E0"
            />
          </svg>
        </div>
      </Link>

      <Link to="/login">
        <div name="profile">
          <svg
            width="20"
            height="43"
            viewBox="0 0 30 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1032 19.2171C17.9162 19.2171 19.6885 18.6795 21.1959 17.6723C22.7034 16.665 23.8783 15.2334 24.5721 13.5584C25.2659 11.8834 25.4474 10.0403 25.0937 8.26213C24.74 6.48397 23.867 4.85063 22.585 3.56865C21.303 2.28667 19.6697 1.41363 17.8915 1.05993C16.1134 0.70623 14.2702 0.887761 12.5953 1.58156C10.9203 2.27537 9.48863 3.45028 8.48139 4.95773C7.47414 6.46518 6.93652 8.23746 6.93652 10.0505C6.93652 12.4816 7.90229 14.8132 9.62138 16.5323C11.3405 18.2514 13.672 19.2171 16.1032 19.2171Z"
              fill="#50C6E0"
            />
            <path
              d="M29.8532 42.1341C30.461 42.1341 31.0439 41.8927 31.4736 41.4629C31.9034 41.0331 32.1449 40.4502 32.1449 39.8424C32.1449 35.5879 30.4548 31.5077 27.4464 28.4993C24.438 25.4909 20.3577 23.8008 16.1032 23.8008C11.8487 23.8008 7.76841 25.4909 4.76002 28.4993C1.75162 31.5077 0.0615235 35.5879 0.0615234 39.8424C0.0615234 40.4502 0.302967 41.0331 0.732738 41.4629C1.16251 41.8927 1.7454 42.1341 2.35319 42.1341H29.8532Z"
              fill="#50C6E0"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
