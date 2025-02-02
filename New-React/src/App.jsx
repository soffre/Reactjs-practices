import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'

function App() {
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
  return (
    <>
      <Header />
      <main className='mt-8 flex flex-col gap-8'>
        <div className='flex justify-center items-center'>
          <section className='flex gap-8 justify-center items-center text-white flex-col p-14 max-w-fit rounded-[6px] bg-[#140524] shadow-[0_2px_8px_rgba(0,0,0,0.4)]'>
            <h2 className='p-4 text-3xl font-semibold font-[lora]'>Core Concepts</h2>
            <ul className='flex gap-8 justify-center items-center'>
              {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            </ul>
          </section>
        </div>
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
      </main>
    </>
  )
}

export default App
