import React from "react";
import { Alert } from "flowbite-react";

const AlertBox = ({ type, text }) => {
    return (
        <Alert color={type} className="absolute top-16 w-max left-[50%] translate-x-[-50%]">
            <span className="font-medium">Info alert!</span> {text}
        </Alert>
    )
}

export default AlertBox;