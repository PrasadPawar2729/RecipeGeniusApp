// import { useRef } from "react";

// const useDebounce = (func, delay) => {
//   const idRef = useRef(null);
//   return function (...args) {
//     clearTimeout(idRef.current);
//     idRef.current = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };
// export { useDebounce };