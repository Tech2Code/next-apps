import Image from 'next/image';
import styles from './HomeBanner.module.css'

const MobileBanner = () => {
  return (
     <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
            <Image
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=600"
                alt="Next.js Logo"
                // width={1200}
                // height={320}
                layout='fill'
                objectFit='cover'
                priority={true}
            />
        </div>
        <div className={styles.bannerContent}>
            <h1>Welcome to My Mobile banner</h1>
            <p>Experience fast, beautiful web apps with Next.js!</p>
            <button className={styles.bannerBtn}>Get Started</button>
        </div>
    </div>
  )
}

export default MobileBanner