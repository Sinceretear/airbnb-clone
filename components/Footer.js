import Image from 'next/image'

  function Footer() {
    return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMUNITY</h5>
            <p>Accessibility</p>
            <p>Diversiy & Belonging</p>
            <p>Airbnb 2021</p>
            <p>Airbnb for Work</p>
            <p>Careers</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>How Airbnb works</p>
            <p>Host an Experience</p>
            <p>Host your home</p>
            <p>Guest Referrals</p>
            <p>Gift cards</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Our COVID-19 Response</p>
            <p>Help Center</p>
            <p>Cancellation options</p>
            <p>Neighborhood Support</p>
            <p>Trust & Safety</p>
        </div>

    </div>
  );
}

export default Footer;
