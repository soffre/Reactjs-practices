import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab)
  }

  // let tapContent = <p> Please select a topic</p>;
  // if (selectedTopic) {
  //   tapContent = (<div className='flex flex-col w-dvh gap-4 p-8 bg-[#2f2733] rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.4)'>
  //     <h3 className='p-4 text-3xl font-semibold font-[lora] '>{EXAMPLES[selectedTopic].title}</h3>
  //     <p>{EXAMPLES[selectedTopic].description}</p>
  //     <pre>
  //       <code>
  //         {EXAMPLES[selectedTopic].code}
  //       </code>
  //     </pre>
  //   </div>)
  // }
    return(
        <div className='flex justify-center items-center'>
          <section className='flex flex-col gap-8 justify-start items-start   text-white p-14 max-w-fit'>
            <h2 className='p-4 text-3xl font-semibold font-[lora]'>Examples</h2>
            <menu className='flex flex-row justify-between gap-8 font-[lora]'>
              <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {/* {tapContent} */}
            {!selectedTopic && <p> Please select a topic</p>}
            {selectedTopic && (<div className='flex flex-col w-dvh gap-4 p-8 bg-[#2f2733] rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.4)'>
              <h3 className='p-4 text-3xl font-semibold font-[lora] '>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}
          </section>
        </div>
    );
}