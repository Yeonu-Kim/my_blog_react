import React, { useState, useEffect} from "react"

function BlogCard ({ title, created_date, content }) {
    console.log(title);
    return (
        <section>
            <div>
                <p>{title}</p>
                <span>{created_date}</span>
            </div>
            <div>
                {content}
            </div>
        </section>
    );
}

function BlogThumbnail({title, created_date}) {
    return (
        <section>
            <h3>{title}</h3>
            <span>{created_date}</span>
        </section>
    );
}

export { BlogCard, BlogThumbnail }