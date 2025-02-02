import reactLogo from '../assets/react.svg'
const reactDescription = ["Fundamental", "Core", "Crucial"]
function genRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const description = reactDescription[genRandom(2)];
  return (
    <header className='flex flex-col gap-8 justify-center items-center mt-20'>
      <img src={reactLogo} alt='Moving rounded atom' className='w-22 h-22' />
      <h1 className='text-6xl font-semibold font-[playfair-display] text-[#4B3832]'>React Essentials</h1>
      <p className='text-3xl font-[lora] font-semibold text-[#E5B25D]'>
        {description} React Concepts you all need for almost any app you are going to build
      </p>
    </header>
  );
}