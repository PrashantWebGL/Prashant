
import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";
const MovieCard = (argument) => {

    const item = argument.props;

    return (
        <>
            <Link href={`/experience/${item.title}`} className={styles.card_link}>
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Image src={item.image} alt={"company logo"} width={260} height={150} />
                    </div>
                    <div className={styles.card_data}>
                        <h2>{item.title}</h2>
                        <p>
                            {item.duration}
                        </p>
                    </div>
                </div>
            </Link>

        </>
    );
};

export default MovieCard;