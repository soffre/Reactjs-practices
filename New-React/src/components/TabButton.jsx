
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button  className='p-2 rounded-md bg-[#0a0411] focus:bg-[#54129c] hover:bg-[#2b1f38] shadow-2xl' 
            onClick={onSelect}>{children}</button>
        </li>
    );
}