import { Avatar, Typography, Button, IconButton } from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Detail() {

    let { userId } = useParams()

    const [postPage, setPostPage] = useState([])
    const [photoPage, setPhotoPage] = useState([])
    const [comment, setComment] = useState([])
    const [users, setUsers] = useState({})
    const [albums, setAlbums] = useState([])

    const handleClick = () => {
        window.location.href = `/tech-assesment`
    }
    const handleClickAlbums = (albumId) => {
        window.location.href = `/tech-assesment-user-album/${userId}/${albumId}`
    }


    useEffect(() => {
        if (userId) {
            let query = {
                size: 10,
            }
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`,)
                .then(function (response) {
                    setUsers(response.data);
                });
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts?` + new URLSearchParams(query),)
                .then(function (response) {
                    setPostPage(response.data);
                });
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums?` + new URLSearchParams(query),)
                .then(function (response) {
                    setAlbums(response.data);
                });
            axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments?` + new URLSearchParams(query),)
                .then(function (response) {
                    setComment(response.data);
                });
        }
    }, [userId])



    return (
        <>
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                                    <div className="relative">
                                        <div className="-mt-20 w-40">
                                            <Avatar
                                                src="/img/team-1.jpg"
                                                alt="Profile picture"
                                                variant="circular"
                                                className="h-full w-full shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                                    {/* <Button className="bg-blue-400">Conntect</Button> */}
                                </div>
                                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                                        <div className="mr-4 p-3 text-center">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                {postPage.length}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                Post
                                            </Typography>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                {albums.length}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                Albums
                                            </Typography>
                                        </div>
                                        <div className="p-3 text-center lg:mr-4">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                {comment.length}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                Comments
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 text-center">
                                <Typography variant="h2" color="blue-gray" className="mb-2">
                                    {users.name}
                                </Typography>
                                <div className="mb-16 flex items-center justify-center gap-2">
                                    <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                                    <Typography className="font-medium text-blue-gray-700">
                                        {users.address?.city}
                                    </Typography>
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-2">
                                    <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                                    <Typography className="font-medium text-blue-gray-700">
                                        {users.company?.catchPhrase}
                                    </Typography>
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-2">
                                    <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                                    <Typography className="font-medium text-blue-gray-700">
                                        {users.company?.name}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <IconButton onClick={() => handleClick()} ><i className="fas fa-arrow-left" /></IconButton>
                            </div>
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <div className="mt-2 flex flex-col">
                                            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div className="py-2 mb-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                        <div className="mb-5 text-grey-darkest font-bold">
                                                            ALBUMS
                                                        </div>
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        #
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Action
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Title
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody
                                                                // {...getTableBodyProps()}
                                                                className="bg-white divide-y divide-gray-200"
                                                            >
                                                                {albums.map((e, i) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                {i + 1 + "."}
                                                                            </td>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                <IconButton onClick={(e) => handleClickAlbums(e.target.id)} id={e.id}><i className="fas fa-info" /></IconButton>
                                                                            </td>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                {e.title}
                                                                            </td>

                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pagination */}
                                        <Button variant="text">Show more</Button>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <div className="mt-2 flex flex-col">
                                            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div className="py-2 mb-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                        <div className="mb-5 text-grey-darkest font-bold">
                                                            POST USER
                                                        </div>
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        #
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Title
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Body
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody
                                                                // {...getTableBodyProps()}
                                                                className="bg-white divide-y divide-gray-200"
                                                            >
                                                                {postPage.map((e, i) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                {i + 1 + "."}
                                                                            </td>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                {e.title}
                                                                            </td>
                                                                            <td className="text-left px-6 py-4 whitespace-wrap">
                                                                                {e.body}
                                                                            </td>

                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pagination */}
                                        <Button variant="text">Show more</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    );
}

export default Detail;
