import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { WidthFull } from '@mui/icons-material';

export default function SimpleAlert(props) {

    const alertStyle = {
        height: "50px", position: "absolute", width: "100%"
    }

  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" style={alertStyle}>
      {props.text}
    </Alert>
  );
}
