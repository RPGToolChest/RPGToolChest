import React from "react";
import Button from '@mui/material/Button';

interface propTypes {
  label: string,
  onClick: Function,
  variant: string,
}

const StyledButton = (props: propTypes) => {

  return (
    <Button
    //@ts-ignore
      variant={props.variant} 
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  )
}


export default StyledButton;