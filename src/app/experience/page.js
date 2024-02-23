
import MovieCard from "../components/moviecard";
import styles from "@/app/styles/common.module.css"

export default function ExperienceComp() {

        const list = [
                {
                    title: "Wondevari",
                    image: "/wondervari.png",
                    duration:"8 Months",
                },
                {
                    title: "Dassault Systemes",
                    image: "/3ds.png",
                    duration:"3 Years 6 Months",
                },
                {
                    title: "Siemens",
                    image: "/siemens.png",
                    duration:"2 Years 1 Month",
                },
                {
                    title: "ProtoTech Solutions",
                    image: "/pts.png",
                    duration:"2 years 5 Months",
                },
                {
                    title: "CDAC",
                    image: "/cdac.png",
                    duration:"1 Year",
                },
                
            ];
        return (
                <div>
                        <section className={styles.movieSection}>
                                <div className={styles.container}>
                                        <div className={styles.card_section}>

                                                {
                                                        list.map((item,index)=>(
                                                                <MovieCard props={item} key={index}/>  
                                                        ))
                                                }
                                               
                                        </div>
                                </div>
                        </section>

                </div>

        )
}