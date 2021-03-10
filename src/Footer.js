import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className='text-white border-t mt-24'>
            <div
                className='container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap '>
                <div className='flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 '>
                    <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            About
                        </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://github.com/iJKTen/can-i-wash-my-car'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Source code</a>
                            </li>
                        </nav>
                    </div>
                    <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            Made With
                        </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://openweathermap.org'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Open Weather</a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://tailwindcss.com'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Tailwindcss</a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://reactjs.com'
                                    className='text-sm text-gray-600 hover:text-gray-800'>React</a>
                            </li>
                        </nav>
                    </div>
                    <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            Other Projects
                        </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://federal-register.netlify.app'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Federal Register</a>
                            </li>
                        </nav>
                    </div>
                    <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            My Friend Jai
                        </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://MyFriendJai.com'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Website</a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://MusicFrom.MyFriendJai.com'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Music Blog</a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://GitHub.com/iJKTen'
                                    className='text-sm text-gray-600 hover:text-gray-800'>GitHub</a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='nofollow noreferrer noopener'
                                    href='https://Twitter.com/MyFriendJai'
                                    className='text-sm text-gray-600 hover:text-gray-800'>Twitter</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row'>
                    <p className='text-sm text-center text-gray-200 sm:text-left '>
                        &copy; {(new Date()).getFullYear()}
                    </p>
                    <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                        <a
                            href='https://www.github.com/iJKTen'
                            target='_blank'
                            rel='nofollow noreferrer noopener'
                            className='text-white hover:text-blue-500'>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a
                            rel='nofollow noreferrer noopener'
                            target='_blank'
                            href='https://www.twitter.com/MyFriendJai'
                            className='ml-4 text-white hover:text-blue-500'>
                            <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                className='w-5 h-5' viewBox='0 0 24 24'>
                                <path
                                    d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'>
                                </path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
