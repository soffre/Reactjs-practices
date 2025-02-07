export default function Tabs({children, buttons, ButtonContainer = 'menu'}){ 
    return(
       <>
        <ButtonContainer className='flex flex-row justify-between gap-8 font-[lora]'>{buttons}</ButtonContainer>
        {children}
        </>
    );
}