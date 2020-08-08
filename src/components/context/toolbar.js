import ThemedButton from './button';
import React from "react";
// An intermediate component that uses the ThemedButton
export default function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}