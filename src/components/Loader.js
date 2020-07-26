import React from "react";
import { Spinner } from 'react-bootstrap';

export default function SpinnerPage(props) {
    return (props.visibility && <Spinner animation="border" variant="primary" />)
}