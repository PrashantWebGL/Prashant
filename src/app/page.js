"use client"
import '@/app/components/homestyles.css'
import BirdsPage from "./birds/page";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home() {
  return (
    <div>

      <main className="maincomponent">
        <div className="homediv">
          <div className="headingover">

            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Prashant Dhawase</div>
            <div class="text-3">And I am a <span class="typing">
              <Typewriter
                options={{
                  strings: ['Three.js Developer', 'Full stack developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span></div>

          </div>
          <div className='homePhoto'>
            <Image src={"/skype.png"} height={500} width={500} alt="Title Photo Prashant" className='homePhotoImage'></Image>

          </div>
          <div>
            <BirdsPage className="canvasbird" />
          </div>






        </div>
      </main>

    </div>
  );
}
