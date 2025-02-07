import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedTab) {
        setSelectedTopic(selectedTab)
    }

    let tapContent = <p> Please select a topic</p>;
    if (selectedTopic) {
        tapContent = (<div className='flex flex-col w-dvh gap-4 p-8 bg-[#2f2733] rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.4)'>
            <h3 className='p-4 text-3xl font-semibold font-[lora] '>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>)
    }
    return (
        <div className='flex justify-center items-center'>
            <Section title="Example" className='flex flex-col gap-8 justify-start items-start   text-white p-14 max-w-fit'>
                <Tabs 
                buttons={
                    <>
                        <TabButton onClick={() => handleSelect('component')}>Component</TabButton>
                        <TabButton onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onClick={() => handleSelect('state')}>State</TabButton>
                    </>
                }>
                    {tapContent}
                </Tabs>
            </Section>
        </div>
    );
}