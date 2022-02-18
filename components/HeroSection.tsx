const HeroSection = () => {
  return (
    <div className="bg-black text-white px-8 pt-40 pb-20 grid gap-24   md:px-14 md:pt-52 md:pb-28 xl:pt-64 xl:pb-36 md:gap-40">
      <h1 className="text-5xl leading-normal sm:text-6xl md:text-6xl 2xl:text-8xl md:w-4/5">
        Reply Art es un empredimiento de artesania rustica en madera especialista en tallado de autos a escala.
      </h1>
      <div className='grid gap-8 justify-items-start'>
        <img className='w-full aspect-[2/1]' src="https://source.unsplash.com/random/1000x500" alt="" />
        <p className='text-2xl md:w-1/2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit
          aspernatur deserunt, architecto voluptate impedit blanditiis at, velit
          provident non dolores accusamus ex cum!
        </p>
        <button className='bg-white text-black font-bold rounded-full px-9 py-5'>
          Nuestros servicios
        </button>
      </div>
    </div>
  )
}

export default HeroSection
