import React, { useState, useEffect} from "react";
import { useParams } from "react-router";
import { getBlogList, getBlog } from '../api/blog';
import { BlogCard, BlogThumbnail } from '../components/base/Card';


function BlogMainLoader() {
    const [loading, setLoading] = useState(true);
    const [blogList, setBlogList] = useState([]);

    const fetchData = async () => {
        // 240315: 현재 getBlogList 함수가 동기 함수여서 임의로 비동기 함수를 만들었음. 추후 백엔드가 완성되면 수정
        setTimeout(async () => {
            // 블로그 리스트 불러오기
            setBlogList(getBlogList());
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    console.log(blogList);

    return (
        <div>
            {blogList.map((blog, index) => {
                return <BlogThumbnail key={index} title={blog.title} created_date={blog.created_date}/>
            })}
        </div>
    )
}

function BlogDetailLoader() {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState();

    const { blog_id } = useParams();

    const fetchData = async () => {
        // 240315: 현재 getBlogList 함수가 동기 함수여서 임의로 비동기 함수를 만들었음. 추후 백엔드가 완성되면 수정
        setTimeout(async () => {
            // 블로그 리스트 불러오기
            setBlog(getBlog(Number(blog_id)));
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    console.log(blog);
    console.log(blog);

    return (
        <div>
            <BlogCard
                title={blog.title}
                created_date={blog.created_date}
                content={blog.content}
            />
        </div>
    )
}

export { BlogMainLoader, BlogDetailLoader };