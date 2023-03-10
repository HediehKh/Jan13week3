import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/characters.json'
import { useState } from 'react'
import components from '../components'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function About() {

    const [ information, setInformation ] = useState ([...data])
    console.log(data);
    
    return (
      
      <>
        <Head>
          <title>About page</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              <Link href='/'>Go back Home</Link>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={25}
                  priority
                />
              </a>
            </div>
          </div>
  
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={25}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={100}
                height={25}
                priority
              />
            </div>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.title}>San rio characters</div>
            {information && information.map((info, index) => {
                {
                return(
                    <div className={styles.character}>
                        <h3 className={styles.details}>{info.name} </h3>
                        <p className={styles.secondarydetails}>{info.type}, {info.gender}</p>
                        <img src={info.img} />
                    </div>
                ) 
              }
            })}
          </div>
          
        </main>
      </>
    )
  }
  