// export default function ToDo({task,isDone}) {
//   return (
//     <li>task: {task} {isDone}</li>
//   )
// }

export default function ToDo({task,isDone,time=0}) {
  if(isDone===true){
    return <li>Done:{task} duration: {time}</li>
  }
  else{
    return <li>Pendomg:{task}</li>
  }
}

// 3
// export default function ToDo({task,isDone,time=0}){
// return isDone ? <li>done:{task} duration: {time}</li> : <li>not done:{task}</li>
// }

// 4
// export default function ToDo({task,isDone,time=0}){
// return isDone && <li>done task:{task} duration:{time}</li>
// }

// 5
// export default function ToDo({task,isDone,time=0}){
// return isDone || <li>done task:{task} duration:{time}</li>
// };

// 6

// export default function ToDo({ task, isDone, time = 0 }) {
//   let listItem;
//   if (isDone === true) {
//     listItem = (
//       <li>
//         Done:{task} duration:{time}
//       </li>
//     );
//   } else {
//     listItem = <li>Pending:{task}</li>;
//   }
//   return listItem;
// }
