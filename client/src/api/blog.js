import data from "./data/blog.json";

function getBlogList() {
    return data.blog_list
}

function getBlog(blog_id) {
    const target = data.blog_list.filter((blog) => {
        console.log(blog["id"], '\t', blog_id)
        return blog["id"] === blog_id;
    });

    console.log("result is", target);
    return target[0];
}

export { getBlogList, getBlog };