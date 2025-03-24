// import { useEffect, useRef, useState } from 'react'
// import io from 'socket.io-client'

// const Home = () => {
//   const [input, setInput] = useState('')
//   const socket = useRef(null);
//   useEffect(() => {
//     socket.current = io();

//     socket.current.on('connect', () => {
//       console.log('Connected to WebSocket server');
//     });

//     socket.current.on('update-input', msg => {
//       setInput(msg);
//     })

//     return () => {
//       socket.current.disconnect();
//     };
//   }, []);

//   const onChangeHandler = (e) => {
//     setInput(e.target.value)
//     socket.current.emit('input-change', e.target.value)
//   }

//   return (
//     <input
//       placeholder="Type something"
//       value={input}
//       onChange={onChangeHandler}
//     />
//   )
// }

// export default Home;