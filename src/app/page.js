'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  function gotogame() {
    router.push('/save-earth/index.html')
  }

  return (
    <div>
      <div className={styles.pointercursor} onClick={gotogame} >
        <Image src={'/assets/games_posters/save_earth_poster.png'} width={100} height={100}></Image>
        <h3>Save Earth</h3>
      </div>
    </div>
  );
}
