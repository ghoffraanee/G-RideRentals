import React from 'react'

export default function Hero() {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To G-Rent's World!</h1>
      <p className="mb-5">Your premier destination for convenient and reliable car rentals. Our user-friendly app simplifies the rental process, allowing you to choose from a diverse fleet of high-quality vehicles with just a few taps. Enjoy transparent pricing, flexible pickup/drop-off locations, and 24/7 support for a stress-free experience. With secure transactions and a commitment to your convenience, G-Rent is your key to unlocking the freedom of the open road. <br /> Download the app now and embark on your next journey with ease!</p>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>
  )
}
