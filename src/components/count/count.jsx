import React, {useState} from "react";


const Show = (props) => {
  const show = () => {
    console.log('testing prop', props.cou);
  }

  return (
    <>
      <button onClick={show}>show</button>
    </>
  )
}

const Count = () => {
  const [cou, setCou] = useState(1);

  const inc = () => {
    console.log('testing inside', cou);
    setCou(cou + 1);
  }

  return (
    <>
      <button onClick={inc}>click</button>
      <Show cou={cou} />
    </>
  )
}

export default Count;
