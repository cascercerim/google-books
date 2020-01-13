import React from "react";
import Button from "../Button";


function RemoveBookBtn(props) {
    return (
      <Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Button>
    );
  }



  export default RemoveBookBtn;