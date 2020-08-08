import React from 'react';
import '../../css/block.css';

export default function block(props){
  return (
    <button className="block">
      {props.entity}
    </button>
  );
}