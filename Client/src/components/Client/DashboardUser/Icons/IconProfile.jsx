import React from "react";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
//cami cami cami
const IconProfile = () =>{
    return (
      <Link to="/profile">
          <Tooltip title='Ir a perfil'>
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
      </Tooltip>
      </Link>
    )
}

export default IconProfile;