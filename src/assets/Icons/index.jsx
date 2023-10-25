export const AddProductSvg = () => {
  return (
    <svg
      className="w-3 h-3 text-gray-800"
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12h6m6 0h-6m0 0V6m0 6v6"
      ></path>
    </svg>
  );
};

export const ShoppingBagSvg = ({ white }) => {
  const isWhite = white ? "w-4 h-4 fill-white" : "w-5 h-5 fill-gray-800";
  return (
    <svg
      className={isWhite}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.5,6.2H18V6A6,6,0,0,0,6,6v.2H3.5A3.543,3.543,0,0,0,0,9.7v8.8A5.549,5.549,0,0,0,5.5,24h13A5.549,5.549,0,0,0,24,18.5V9.7A3.543,3.543,0,0,0,20.5,6.2ZM9,6a3,3,0,0,1,6,0v.2H9ZM21,18.5A2.476,2.476,0,0,1,18.5,21H5.5A2.476,2.476,0,0,1,3,18.5V9.7a.472.472,0,0,1,.5-.5H6v1.3a1.5,1.5,0,0,0,3,0V9.2h6v1.3a1.5,1.5,0,0,0,3,0V9.2h2.5a.472.472,0,0,1,.5.5Z"
      />
    </svg>
  );
};

export const UserAccountSvg = () => {
  return (
    <svg
      className="w-6 h-6 stroke-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
      ></path>
      <path
        fill="#000000"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
        d="M8.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM15.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
      ></path>
    </svg>
  );
};