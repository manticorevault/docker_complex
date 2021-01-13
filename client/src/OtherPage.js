/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { Link } from "react-router-dom"

export default () => {
    return (
        <div>
            Just some other page!
            <Link to="/"> Go Home </Link>
        </div>
    );
};