"use client"
import '@/app/components/homestyles.css'
import BirdsPage from "./birds/page";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home() {
  return (
    <div>

      <main className='mainstyle'>
        
        <div>
          <BirdsPage className="canvasbird" />
        </div>

        <div className="homediv">
          <div className="shortinfo">

            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Prashant Dhawase</div>
            <div class="text-3">And I am a <span class="typing">
              <Typewriter
                options={{
                  strings: ['Three.js Developer', 'Full stack developer', 'C++ Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span></div>

          </div>
          <div className='profilepicdiv'>
            <Image src={"/skype.png"} loading='lazy' decoding="async" height={450} width={450} alt="Title Photo Prashant" className='homePhotoImage' ></Image>
                
          </div>







        </div>
      </main>

    </div>
  );
}
