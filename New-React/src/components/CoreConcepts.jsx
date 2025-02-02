import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <div className='flex justify-center items-center'>
            <section className='flex gap-8 justify-center items-center text-white flex-col p-14 max-w-fit rounded-[6px] bg-[#140524] shadow-[0_2px_8px_rgba(0,0,0,0.4)]'>
                <h2 className='p-4 text-3xl font-semibold font-[lora]'>Core Concepts</h2>
                <ul className='flex gap-8 justify-center items-center'>
                    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                </ul>
            </section>
        </div>
    );
}