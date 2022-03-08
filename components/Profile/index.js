import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import AssetKuning from '/components/Assets/AssetKuning';
import AssetUngu from '/components/Assets/AssetUngu';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';
import CardUser from '../CardUsers';

export default function Profile() {
    const [users, setUsers] = useState('');
    const [username, setUsername] = useState('-');
    const [name, setName] = useState('-');
    const [bio, setBio] = useState('-');
    const [userScore, setUserScore] = useState('-');
    const [myProfile, setMyProfile] = useState(false);

    const router = useRouter();

    useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
        return router.push('/');
    }
    axios
        .get('https://server-impostor.herokuapp.com/api/users')
        .then((result) => {
            setUsers(result.data.user);
        });
}, [router]);

    const handleDetailUser = (user) => {
    const { username } = user;
    axios
        .get(`https://server-impostor.herokuapp.com/api/user/${username}`)
        .then((res) => {
        const myProfile = JSON.parse(Cookies.get('data'));
        const { id } = user;
        setUsername(res.data.data.username);
        setName(res.data.data.name);
        setBio(res.data.data.bio);
        setUserScore(res.data.data.score);
        if (myProfile.user.id === id) {
            setMyProfile(true);
            } else {
            setMyProfile(false);
        }
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const handleMyProfile = () => {
    const myProfile = JSON.parse(Cookies.get('data'));
    if (myProfile) {
        setUsername(myProfile.user.username);
        setName(myProfile.user.name);
        setBio(myProfile.user.bio);
        setUserScore(myProfile.user.score);
        setMyProfile(true);
    }
    };

    const handleOnClick = () => {
    router.push('/home');
    };

    const handleUpdate = () => {
    router.push('/edit-profile');
    };

    return (
    <div className="bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden">
        <AssetKuning />
        <AssetUngu />
        <AssetGame />
        <AssetBatu />
        <div className="container px-[6%]">
        <div className="mt-6 xl:w-[100%] xl:h-[100%] lg:w-[150px] lg:h-[30px] md:w-[140px] md:h-[30px] sm:w-[140px] sm:h-[30px]">
            <Image
            src="/images/feature.svg"
            className="mt-6 cursor-pointer"
            alt="feature"
            width={200}
            height={40}
            onClick={handleOnClick}
            />
        </div>
        <div className="flex flex-row">
            <div className="basis-1/3 h-screen">
            <button
                className="bg-sky-600 hover:bg-sky-700 rounded-large xl:px-9 xl:py-[15px] lg:px-6 lg:py-[13px] md:px-4 md:py-[12px] sm:px-4 sm:py-[8px] flex flex-nowrap justify-center mt-6"
                onClick={handleMyProfile}
            >
                <FontAwesomeIcon icon={faUser} className="mt-1" />
                <h3 className="mx-3 text-slate-50 hover:underline">My Profile</h3>
            </button>
            <div className="flex items-center justify-center">
                <div className="bg-slate-100 rounded-xl p-8 mt-6 font-body relative w-full">
                <div className="xl:ml-[110px] lg:ml-[83px] md:ml-[44px] sm:ml-[33px] xl:w-[100%] xl:h-[100%] lg:w-[80px] lg:h-[80px] md:w-[47%] md:h-[47%] sm:w-[60px] sm:h-[60px]">
                    <Image
                    src="/images/kelinci.jpeg"
                    className="rounded-full"
                    alt="kelinci"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="space-y-4">
                    <div>
                    <p className="mt-5 text-sky-500 text-center">
                        Data Profile
                    </p>
                    <p className="mt-5">
                        Username:
                        {username}
                    </p>
                    <p className="mt-5">
                        Full Name:
                        {name}
                    </p>
                    <p className="mt-5">
                        Bio:
                        {bio}
                    </p>
                    <p className="mt-5">
                        Score:
                        {userScore}
                    </p>
                    </div>
                    {myProfile && (
                    <button
                        className="bg-primary text-white h-12 rounded-large mt-4 hover:bg-blue-700 w-full"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    )}
                </div>
                </div>
            </div>
            </div>

            <div className="basis-1/3 ml-8 overflow-hidden">
            <div className="flex w-full">
                <input
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none xl:mt-[102px] lg:mt-[100px] md:mt-[98px] sm:mt-[90px] appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl pl-4 ml-4 w-5/6 xl:py-3 lg:py-3 md:py-2 sm:py-2 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Filter projects"
                placeholder="Search Username..."
                />
            </div>
            <CardUser users={users} handleDetailUser={handleDetailUser} />
            </div>
        </div>
        </div>
    </div>
    );
}
