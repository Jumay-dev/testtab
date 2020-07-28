import React from "react";
import { Spinner } from 'react-bootstrap';

export default function SpinnerPage(props) {
    return props.showLoader ? <Spinner animation="border" variant="primary" /> : null
}