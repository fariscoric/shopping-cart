import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

export default function Footer() {
    return (
        <div className="w-full h-40 bg-blue-900 flex justify-between align-center">
            <div className="flex justify-evenly align-center ml-32">
            <div className="border-r mt-6 h-28 w-40 px-7 flex-col">
                <h1 className="text-white text-xl font-bold mb-2">Contact us</h1>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Address</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">E-mail</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Number</h3>
            </div>
            <div className="border-r mt-6 h-28 w-40 px-7 flex-col">
                <h1 className="text-white text-lg font-bold mb-2">About us</h1>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Join our team</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Product info</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Working with us</h3>
            </div>
            <div className="border-r mt-6 h-28 w-40 px-7 flex-col">
                <h1 className="text-white text-lg font-bold mb-2">Terms</h1>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">General terms</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Payment</h3>
                <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">Sales</h3>
            </div>
                
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-around align-center mr-32 my-4'>
                    <h1 className='text-white text-lg font-bold mb-2'>Follow our Social Media</h1>
                    <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">{<YouTubeIcon/>} Youtube</h3>
                    <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">{<TwitterIcon/>} Twitter</h3>
                    <h3 className="text-blue-200 cursor-pointer hover:scale-110 hover:text-white">{<InstagramIcon/>} Instagram</h3>
                </div>
                <div className="flex-col justify-around align-center mr-32 mt-4">
                    <h1 className="text-white text-lg font-bold mb-2.5">Sign up for our newsletter</h1>
                    <input type="text" placeholder="E-mail" className="bg-blue-900 border-b text-white pl-1"></input>
                </div>
            </div>
        </div>
    )
}