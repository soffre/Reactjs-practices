export default function Section({title,children, ...props}){
    return(
        <section {...props}>
        <h2 className='p-4 text-3xl font-semibold font-[lora]'>{title}</h2>
        {children}
        </section>
    );
}