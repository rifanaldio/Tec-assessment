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
import Modal from "./modal";

export function Photo() {
    let { userId, albumId } = useParams()

    const [postPage, setPostPage] = useState([])
    const [photo, setPhoto] = useState([])
    const [comment, setComment] = useState([])
    const [users, setUsers] = useState({})
    const [albums, setAlbums] = useState([])

    const [selectedItem, setSelectedItem] = useState(null)
    console.log("🚀 ~ file: photo.jsx:23 ~ Photo ~ selectedItem:", selectedItem)
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        window.location.href = `/tech-assesment-user/${userId}`
    }

    useEffect(() => {
        if (userId) {
            let query = {
                size: 10,
            }
            axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?` + new URLSearchParams(query),)
                .then(function (response) {
                    setPhoto(response.data);
                });
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
                            <div className="md:mx-auto px-4 mb-10 border-t border-blue-gray-50 py-6 text-center ">
                                <div className="mt-2 flex flex-wrap justify-center overscroll-contain">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <div className="mt-2 flex flex-row">
                                            <div className="-my-2 max-w-screen-sm overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                                <div className="py-4 flex flex-wrap flex-grow-0 inline-block min-w-full sm:px-6 lg:px-8">
                                                    {photo.map((e, i) => {
                                                        return (
                                                            <div className="mx-2 my-2 max-w-screen-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                                <img className="rounded-t-lg" src={e.url} alt="" />
                                                                <div className="p-5">
                                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
                                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.thumbnailUrl}</p>
                                                                    <Button onClick={() => {
                                                                        setSelectedItem(e)
                                                                        setShowModal(true)
                                                                    }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                        Read more
                                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

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
            <Modal
                item={selectedItem}
                visible={showModal}
            />
        </>
    );
}

export default Photo;
