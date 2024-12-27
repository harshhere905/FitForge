import Button from './Button'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>IT&apos;S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Fit<span className='text-blue-400'>Forge</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>
      <p>
  Forge your <span className="text-blue-400 font-medium">fitness journey</span> with <span className="text-blue-400 font-medium">Fitforge</span>—a platform designed to <span className="text-blue-400 font-medium">empower</span>, <span className="text-blue-400 font-medium">inspire</span>, and <span className="text-blue-400 font-medium">transform</span>. Whether you&apos;re <span className="text-blue-400 font-medium">starting out</span> or <span className="text-blue-400 font-medium">leveling up</span>, Fitforge is here to help you <span className="text-blue-400 font-medium">achieve your goals</span>, <span className="text-blue-400 font-medium">track your progress</span>, and <span className="text-blue-400 font-medium">unlock your full potential</span>. It&apos;s not just about <span className="text-blue-400 font-medium">working out</span>; it&apos;s about <span className="text-blue-400 font-medium">building a stronger, healthier you</span>!
</p>

      </p>
     <Button func={()=>{
      window.location.href = '#generate'
     }} text={"Accept & Begin"}></Button>
    </div>
  )
}

export default Hero
