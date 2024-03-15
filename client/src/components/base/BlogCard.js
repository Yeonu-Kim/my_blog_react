import React, { useState, useEffect} from "react"

function BlogCard ({ title }) {
    console.log(title);
    return <div>{title}</div>
}

export { BlogCard }