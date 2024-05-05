import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setBlogs , setLoading , setError} from '../Redux/blogslice'

export const useGetallblogs = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const getallblogs = async () =>{
            try {
                dispatch(setLoading(true))
                const res = await axios.get("http://localhost:7000/api/v1/blogs/getallblogs")
                console.log(res.data.data)
                dispatch(setBlogs(res.data.data))
                dispatch(setLoading(false))
            } catch (error) {
                dispatch(setLoading(false))
                dispatch(setError(error.message))
            }
        }
        getallblogs()
    },[])
}