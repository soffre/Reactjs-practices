export default function Tabs({children, buttons}){
    return(
       <>
        <menu className='flex flex-row justify-between gap-8 font-[lora]'>{buttons}</menu>
        {children}
        </>
    );
}