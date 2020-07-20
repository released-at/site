import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileHeader from './MobileHeader'
import Button from '../Button'
import { UserContext } from '../../core/auth'

import styles from './Header.module.css'

function Header({ hasBack }) {
  const { back, push } = useRouter()
  const { user, updateUser } = useContext(UserContext)

  return (
    <>
      <header className={styles.Header} aria-label="header">
        <div className={styles.Logo}>
          {hasBack && (
            <button
              className={styles.Back}
              onClick={() => {
                back()
              }}
            >
              <img src="/icons/back.svg" alt="" />
            </button>
          )}
          <Link href="/">
            <a className={styles.DesktopLogo} data-text="released">
              released
            </a>
          </Link>
          <Link href="/">
            <a className={styles.MobileLogo}>
              <img src="/images/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className={styles.Right}>
          <Link href="/whats-new">
            <a>Что нового?</a>
          </Link>
          <Link href="/archive">
            <a>Вышедшее</a>
          </Link>
          {user ? (
            <Button
              className={styles.Subscribe}
              isPrimary
              onClick={() => {
                push('/me')
              }}
            >
              {user.email.split('@')[0]}
            </Button>
          ) : (
            <>
              <Link href="/auth">
                <a>Вход</a>
              </Link>
              <Button
                className={styles.Subscribe}
                isPrimary
                onClick={() => {
                  push('/auth')
                }}
              >
                Регистрация
              </Button>
            </>
          )}
        </div>
      </header>
      <MobileHeader user={user} />
    </>
  )
}

export default Header
