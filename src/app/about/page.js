import Image from "next/image"
import styles from "@/app/styles/about.module.css"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link"

export default function AboutComp() {
        return (

                <div className={styles.about_comp}>
                        <div className={styles.about_pic}>
                                <Image src={"/about.jpg"} alt={"This is about Image"} width={600*70/100} height={800*70/100} />
                        </div>
                        <div className={styles.about_info_text}>
                                <h1> About Me, </h1>
                                <h3>If you guessed it right! Yes, The birds flying in home page at the background are 3D birds and they are rendereed using three.js</h3>
                                <h3>I never stop bragging about how cool 3D model rendering is! It lets you think in three dimention, it is challenging and you need to control camera, lights,action just like a Movie </h3>
                                <h3>When I am not coding at home, you might find me cooking some amazing dishes in kitchen. I personally believe adding artistic personal touch is so satisfying while exhibiting work.
                                        <Image src={"/cooking.gif"} alt={"This is about gif"} width={40} height={30}></Image></h3>
                                <h3>Like most of the Indians, I love cricket.
                                        <Image src={"/cricket1.gif"} alt={"This is about gif"} width={40} height={30}></Image></h3>

                                <h3>I am currently based in Seoul, South Korea. Do contact me !! </h3>
                                
                                <h3><a href="mailto:prashant.dh.12@gmail.com" target="_blank">  <MdEmail /> prashant.dh.12@gmail.com </a></h3>
                                <h3><FaWhatsapp /> +91 90 9695 7263</h3>
                                <h3><FaPhone /> +82 10 8309 7263</h3>

                                <Link href="https://www.linkedin.com/in/prashantdh/" target="_blank" >
                                        <Image src={"/linkedin.png"} alt={"This is about gif"} width={32} height={32} className={styles.about_logo}></Image>
                                </Link>
                                <Link href="https://github.com/PrashantWebGL/" target="_blank" >
                                        <Image src={"/github.png"} alt={"This is about gif"} width={32} height={32} className={styles.about_logo}></Image>
                                </Link>

                        </div>
                </div>



        )
}