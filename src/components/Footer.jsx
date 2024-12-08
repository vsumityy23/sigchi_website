import React from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin, AiFillInstagram, } from 'react-icons/ai';
import { FiMail, FiUsers } from 'react-icons/fi';
import { FaMedium, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} ACM SIGHI IIT Kanpur Student Chapter</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:hci.iitk@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					<a href="https://www.instagram.com/sigchi.iitk/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillInstagram className='text-xl' />
					</a>
					<a href="https://www.linkedin.com/company/iitksigchi/mycompany/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/SIGCHI-IITK" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://www.youtube.com/@SIGCHIIITK" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FaYoutube className='text-xl' />
					</a>
					<a href="https://medium.com/@hci.iitk" target="_blank" rel="noopener noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FaMedium className='text-xl' />
					</a>
					<a href="https://groups.google.com/g/iitksigchi" target="_blank" rel="noopener noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiUsers className='text-xl' />
					</a>

				</div>
			</div>
		</div>
	);
}

export default Footer;