import Image from 'next/image';
import styles from './HomeBanner.module.css'
const WebBanner = () => (
    <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
            <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="Next.js Logo"
                // width={1200}
                // height={320}
                layout='fill'
                objectFit='cover'
                priority={true}
            />
        </div>
        <div className={styles.bannerContent}>
            <h1>Welcome to My Web Banner</h1>
            <p>Experience fast, beautiful web apps with Next.js!</p>
            <button className={styles.bannerBtn}>Get Started</button>
        </div>
    </div>
);

export default WebBanner;
