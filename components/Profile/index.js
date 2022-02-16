import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useRouter } from 'next/router';
import axios from "axios";
import AssetKuning from '/components/Assets/AssetKuning';
import AssetUngu from '/components/Assets/AssetUngu';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';
import CardUser from "../CardUsers";

export default function Profile() {
    const [users, setUsers] = useState('')
    const [username, setUsername] = useState('-')
    const [name, setName] = useState('-')
    const [bio, setBio] = useState('-')
    const [userScore, setUserScore] = useState('-')
    const [myProfile, setMyProfile] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const token  = sessionStorage.getItem("token");
        if (!token) {
            return router.push('/')
        }
        axios.get(`https://impostorteam-app.herokuapp.com/api/users`)
        .then((result) => {
            setUsers(result.data.user)
            console.log('result:', result.data);
        })
    }, [router])

    const handleDetailUser = (user) => {
        const username = user.username
        axios.get(`https://impostorteam-app.herokuapp.com/api/user/${username}`)
        .then((res) => {
            console.log("res detail:", res.data);
            const myProfile = JSON.parse(localStorage.getItem('data'))
            const id = user.id
            if(myProfile.data.data.id === id){
                setMyProfile(true)
            } else {
                setMyProfile(false)
            }
            setUsername(res.data.data.username)
            setName(res.data.data.name)
            setBio(res.data.data.bio)
            setUserScore(res.data.data.score)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleMyProfile = () => {
        const myProfile = JSON.parse(localStorage.getItem('data'))
        if(myProfile) {
            console.log('myProfile:', myProfile);
            setUsername(myProfile.data.data.username)
            setName(myProfile.data.data.name)
            setBio(myProfile.data.data.bio)
            setUserScore(myProfile.data.data.score)
            setMyProfile(true)
        }
    }

    const handleOnClick = () => {
        router.push('/home')
    }

    const handleUpdate = () => {
        router.push('/edit-profile')
    }

    return (
        <div className='bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden'>
            <AssetKuning />
            <AssetUngu />
            <AssetGame />
            <AssetBatu />
            <div className="container px-[6%]">
                <div className="mt-6">
                    <Image src="/images/feature.svg" className="mt-6 cursor-pointer" alt="feature" width={200} height={40} onClick={handleOnClick}/>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/3 h-screen">
                        <button className="bg-sky-600 hover:bg-sky-700 rounded-large px-9 py-[15px] flex flex-nowrap justify-center mt-6" onClick={handleMyProfile}>
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <h3 className="mx-3 text-slate-50 hover:underline">My Profile</h3>
                        </button>
                        <div className="flex items-center justify-center">
                            <div className="bg-slate-100 rounded-xl p-8 mt-6 font-body relative w-full">
                                <Image src="/images/kelinci.jpeg" className="w-24 h-24 rounded-full mx-auto" alt="kelinci" width={150} height={150}/>
                                <div className="pt-6 space-y-4">
                                    <div>
                                        <p className="mt-5 text-sky-500 text-center">Data Profile</p>
                                        <p className="mt-5">Username: {username}</p>
                                        <p className="mt-5">Full Name: {name}</p>
                                        <p className="mt-5">Bio: {bio}</p>
                                        <p className="mt-5">Score: {userScore}</p>
                                    </div>
                                    {
                                        myProfile && (
                                            <button className='bg-primary text-white h-12 rounded-large mt-4 hover:bg-blue-700 w-full' onClick={handleUpdate}>Update</button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="basis-1/3 ml-8">
                        <div className="flex w-full">
                            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none xl:mt-[126px] lg:mt-[110px] appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl pl-4 ml-4 w-5/6 xl:py-4 lg:py-3 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Username..."></input>
                        </div>
                        <CardUser 
                            users={users}
                            handleDetailUser={handleDetailUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}