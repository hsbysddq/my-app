import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { updateProfile } from '../redux/actions/users';
import AssetKuning from '../components/Assets/AssetKuning';
import LingkaranKuning from '../components/Assets/LingkaranKuning';
import AssetUngu from '../components/Assets/AssetUngu';
import AssetGame from '../components/Assets/AssetGame';
import AssetBatu from '../components/Assets/AssetBatu';
import Cookies from 'js-cookie';
import Image from 'next/image';

function EditProfile(props) {
  const { user, updateProfile, isLoading } = props;

  // const myProfile = JSON.parse(Cookies.get('data'))
  // const data  = myProfile.data.data
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [avatar, setAvatar] = useState(null)

  const router = useRouter();

  useEffect(() => {
    const myProfile = JSON.parse(Cookies.get('data'))
    const data = myProfile.user;

    setUsername(data.username);
    setName(data.name);
    setBio(data.bio);
    setAvatar(data.avatar)
  }, []);

//   useEffect(() => {
//     const token = Cookies.get('token')
//     if (!token) {
//         return router.push('/')
//     }
// }, [router])

  const handleInputImage = (e) => {
    console.log("e:", e);
  }

  const onInputUsername = (e) => {
    setUsername(e.target.value)
  }

  async function handleUpdate(e){
    e.preventDefault()

    const formData = new FormData()
    const form = e.currentTarget
    const fileInput = Array.from(form.elements).find(({ name }) => name === "file")
    console.log("fileInput", fileInput);
    console.log("currentTarget", e.currentTarget);

    for ( const file of fileInput.files ){
      formData.append('file', file)
    }

    formData.append("upload_preset", "my-images")

    const cloudinaryData = await fetch('https://api.cloudinary.com/v1_1/ulfatunamanah/image/upload', {
      method: "POST",
      body: formData
    }).then(res => res.json())

    console.log("cloudinaryData:", cloudinaryData);

    const data = {
      username,
      name,
      bio,
      avatar: cloudinaryData.secure_url,
      id: user.id,
    };

    console.log('data update: ', data);
    updateProfile(data);
    setTimeout(() => {
      router.push('/profile');
    }, 3000);
  };
  return (
    <div className="bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden">
      <AssetKuning />
      <LingkaranKuning />
      <AssetUngu />
      <AssetGame />
      <AssetBatu />

      <div className='container mx-auto px-[6%]'>
        {/* <div className='h-screen w-5/12 pt-[80px] xl:ml-4 lg:ml-4 md:ml-20 sm:ml-[30%]'> */}
        <form className='h-screen w-5/12 pt-[80px] xl:ml-4 lg:ml-4 md:ml-20 sm:ml-[30%]' onSubmit={handleUpdate}>
          <p className='text-[38px] text-center font-semibold text-slate-700'>
            Edit Profile
          </p>
          <p className="text-left mt-4">Username</p>
          <input
            className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2'
            type='text'
            aria-label='Filter projects'
            placeholder='Username'
            // value={username}
            value={username ?? "Loading..."}
            onChange={onInputUsername}
          />

          <p className="text-left mt-4">FullName</p>
          <input
            className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2'
            type='text'
            aria-label='Filter projects'
            placeholder='Fullname'
            value={name ?? "Loading..."}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="text-left mt-4">Bio</p>
          <input
            className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2'
            type='text'
            aria-label='Filter projects'
            placeholder='Bio'
            value={bio ?? "Loading..."}
            onChange={(e) => setBio(e.target.value)}
          />
          
          <p className='text-left mt-4'>Foto Profile</p>
          <input type="file" name="file" className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-[40px] py-3 pl-4 ring-1 ring-slate-200 shadow-sm mt-2' onChange={handleInputImage} />
          <button
            // type='button'
            className='bg-primary text-white rounded-large mt-4 py-3 w-full'
            // onClick={handleUpdate}
            // loading={isLoading ? 1 : 0}
          >
            Update
          </button>
          {/* <button
            type='button'
            className='bg-primary text-white rounded-large mt-4 py-3 w-full'
            onClick={handleUpdate}
            // loading={isLoading ? 1 : 0}
          >
            Update
          </button> */}
          {/* {isLoading ? (
            <button className='bg-gray-300 text-gray-600 rounded-large mt-4 py-3 w-full hover:cursor-not-allowed'>
              Loading ...
            </button>
          ) : (
            <button
              type="button"
              className="bg-primary text-white rounded-large mt-4 py-3 w-full"
              onClick={handleUpdate}
              loading={isLoading ? 1 : 0}
            >
              Update
            </button>
          )} */}
          <div className='flex text-slate-700'>
            <p className='mt-4'>Back To Profile?</p>
            <Link href='/home'>
              <a className='text-blue-400 underline mt-4 px-2'>Klick Here</a>
            </Link>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.users.user,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch(updateProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);