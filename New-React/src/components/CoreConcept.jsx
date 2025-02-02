export default function CoreConcept({title, description, image}) {
    return (
      <li className='text-1xl font-[lora] flex flex-col gap-4 justify-center items-center w-60 text-white'>
        <img className='w-20 h-20 rounded-lg' src={image} alt={title} />
        <h3 className='font-bold'>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  