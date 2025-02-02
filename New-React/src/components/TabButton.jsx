
export default function TabButton({ children, ...props }) {
    return (
        <li>
            <button  className='p-2 rounded-md bg-[#0a0411] focus:bg-[#54129c] hover:bg-[#2b1f38] shadow-2xl' 
            {...props}>{children}</button>
        </li>
    );
}