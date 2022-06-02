import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './index.module.css'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`${siteConfig.title}`} description="@rsapkf\'s wiki.">
      <main className={styles.main}>
        <div className='container'>
          <h1 className='hero__title'>[rsapkf/42]</h1>
          <p className='hero__subtitle'>Hi, welcome to @rsapkf's wiki.</p>
          <p>
            <strong>
              <u>/links</u>
            </strong>{' '}
            is an ongoing attempt to organize my links, a directory of 5000+
            bookmarks that I use or have used in the past to learn programming,
            puzzle solving, web development and other intellectually stimulating
            things. Contains my blogroll, websites, software, Reddit/YouTube
            subscriptions, podcasts, browser add-ons, Linux tools, and
            everything.
          </p>
          <p>
            <strong>
              <u>/notes</u>
            </strong>{' '}
            directory contains companion notes to my{' '}
            <a href='https://github.com/rsapkf/config/'>dotfiles</a> and{' '}
            <a href='https://rsapkf.xyz/weblog'>weblog</a> where I keep short
            snippets of code, shell scripts, tricks and tips related to common
            *nix utilities, mathematics, mathemagics, poems, notes from books
            I've read, etc.
          </p>
          <h2 id='inspiration'>Inspiration</h2>
          <blockquote>
            <p>
              I'm writing this down. This is good stuff. -{' '}
              <a href='https://www.youtube.com/watch?v=yGzCAV3S1Vc'>
                George McFly
              </a>
            </p>
          </blockquote>
          <img
            className={styles.takingNotes}
            src='img/undraw/taking-notes.svg'
            alt='Taking notes'
          />
        </div>
      </main>
    </Layout>
  )
}

export default Home
