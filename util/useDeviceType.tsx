// // "use client"
// // import { useEffect, useState } from 'react';

// // const useDeviceType = () => {
// //     const [isMobile, setIsMobile] = useState(false);

// //     useEffect(() => {
// //       if (typeof window !== 'undefined') {  
// //         const userAgent = window.navigator.userAgent;
// //         const mobile = Boolean(
// //             /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|Tablet/i.test(userAgent)
// //         );
// //         setIsMobile(mobile);
// //     }
// // }, []);

// // return isMobile;
// // };

// // export default useDeviceType;

// "use client"
// import { useEffect, useState } from 'react';

// const useDeviceType = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return isMobile;
// };

// export default useDeviceType;