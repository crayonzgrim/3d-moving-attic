import React, {useState} from 'react'
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Section } from './Section';

export const Overlay = () => {
  const scroll = useScroll();

  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  const [isCopied, setIsCopied] = useState(false);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">Hi, I'm DONG IL</h1>
          <p className={"text-gray-500"}>Welcome to my beautiful 3D-rooms</p>
          <h3 className={"mt-3"}>About Me...</h3>
          <ul>
            <li>- 코딩 하는 일을 즐깁니다.</li>
            <li>- 새로운 것을 익히는데 즐거움을 느낍니다.</li>
            <li>- 시원한 UI/UX를 제공하기 위해 고민합니다.</li>
          </ul>
          <p className="animate-bounce mt-6">⬇</p>
        </Section>

        <Section right opacity={opacitySecondSection}>
          <h1 className={"font-serif text-2xl"}>My Skills</h1>
          <p className={"text-gray-500"}>느릴지언정 꾸준히 공부하고 있습니다</p>
          <h3 className={"mt-3"}><b>Frontend 🌼</b></h3>
          <ul className="leading-9">
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- Javascript</li>
            <li>- Typescript</li>
            <li>- MUI</li>
            <li>- ThreeJS</li>
            <li>- ReactJS</li>
            <li>- React Native</li>
            <li>- Tailwindcss</li>
          </ul>
          <h3 className="mt-3"><b>Backend 🚀</b></h3>
          <ul className="leading-9">
           <li>- NodeJS</li> 
           <li>- Express</li> 
           <li>- MongoDB</li> 
          </ul>
          <p className="animate-bounce mt-6">⬇</p>
        </Section>
        
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Send Email to me!
          </h1>
          <p className="text-gray-500 mt-6">
            이메일을 클릭하면 복사할 수 있어요
          </p>
          <CopyToClipboard text="crayonzgrim@gmail.com" onCopy={() => {
            setIsCopied(true)
            setTimeout(() => {
              setIsCopied(false)
            }, 1200)
          }}>
            <p className="mt-1 p-3 bg-slate-200 rounded-lg cursor-pointer flex align-center justify-between">
              📧  crayonzgrim@gmail.com
              {isCopied ? <p>Copy!✅ </p>: null}
            </p>
          </CopyToClipboard>
        </Section>
      </div>
    </Scroll>
  )
}

