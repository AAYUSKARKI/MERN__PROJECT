import axios from "axios";
import { useEffect, useState } from "react";


const useGetsingleblog = (id) => {
    const [blogdata, setBlog] = useState({})

    useEffect(() => {

        const getsingleblog = async () => {
            try {
                const res = await axios.get(`http://localhost:7000/api/v1/blogs/getsingleblog/${id}`)
                console.log(res.data.data)
                setBlog(res.data.data)
            } catch (error) {
                console.log(error)
            }
            }
            getsingleblog()
    }, [id])

    return {blogdata}
}

export default useGetsingleblog