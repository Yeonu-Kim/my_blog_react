import data from "./data/blog.json";

function getBlogList() {
    console.log(data.blog_list);
}

function getBlog(blog_id) {
    const target = data.blog_list.filter((blog) => {
        return blog["id"] === blog_id;
    });
    console.log(target);

    return target;
}

export default {getBlogList, getBlog};