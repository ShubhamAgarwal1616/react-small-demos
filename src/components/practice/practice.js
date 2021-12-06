import React, {useState} from "react";

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('rendering again');
    return(
      <div/>
    )
  }

}



export default class Practice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  test = () => {
    return {};
  }

  handleClick(callable) {
    callable(this.state.count + 1);
    this.setState((prevState) => {
      return {  count: prevState.count };
    })
  }

  apiCalls() {
    let limit = 3;
    let queue = [];

    function closureFunc() {
      function call(count) {
        if (limit > 0) {
          limit -= 1;
        }

          console.log(limit);
          setTimeout(() => {
            if (queue.length === 0) {
              limit += 1;
              console.log(count, "   ", limit);
            }
            else {
              console.log('coming here');
              queue[0]();
              queue = queue.slice(1);
            }
          }, 2000);
      }

    if (limit <= 0) {
      queue.push(call);
      console.log(queue);
    }
    else {
      call();
    }
  }
  return closureFunc;
}



render() {
  const callable = this.apiCalls().bind(this);

  return (
      <>
        <span>{this.state.count}</span>
        <button onClick={this.apiCalls()}/>
        <Child test={() => this.test}/>
      </>
    )
  }
}


// const Child = (props) => {
//   const { name, id, onClick } = props;
//   console.log(`${name} just rendered`);
//
//   const onDeleteClick = () => {
//     // No bind needed since we can compose the relevant data for this item here
//     onClick(id);
//   };
//
//   return (
//     <li>
//       <input type="button" value="Delete" onClick={onDeleteClick} />
//       {name}
//     </li>
//   );
// }


// const Practice = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'Cory' },
//     { id: 2, name: 'Meg' },
//     { id: 3, name: 'Bob'}
//   ],)
//
//   // const deleteUser = id => {
//   //   setUsers(users.filter(user => user.id !== id))
//   //   // this.setState(prevState => {
//   //   //   return {
//   //   //     users: prevState.users.filter(user => user.id !== id)
//   //   //   };
//   //   // });
//   // };
//
//   function deleteUser(id) {
//     setUsers(users.filter(user => user.id !== id))
//     // this.setState(prevState => {
//     //   return {
//     //     users: prevState.users.filter(user => user.id !== id)
//     //   };
//     // });
//   }
//
//   const renderUser = user => {
//     return <Child key={user.id} id={user.id} name={user.name} onClick={deleteUser} />;
//   }
//
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => {
//           // return (
//           //   <Child
//           //     key={user.id}
//           //     name={user.name}
//           //     id={user.id}
//           //     onDeleteClick={() => deleteUser(user.id)}
//           //   />
//           // );
//           return renderUser(user);
//         })}
//       </ul>
//     </div>
//   );
//
// }
//
// export default Practice;
