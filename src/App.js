

// Görevler:
//  Kullanıcının oturum durumunu useState veya useReducer hook'u ile yönetin.
//    - Eğer kullanıcı giriş yapmamışsa (isAuthUser === false), yalnızca Login butonu görüntülenmelidir.
//    - Eğer kullanıcı giriş yapmışsa (isAuthUser === true), Dashboard ve Sign out linkleri görüntülenmelidir.
//  Login butonuna tıklandığında, kullanıcı oturum açmalı ve Dashboard ile Sign out linkleri görünmelidir.
//  Sign out linkine tıklandığında, kullanıcı oturumu kapatmalı ve yalnızca Login butonu görünmelidir.
//  Logo bileşenini bağımsız bir bileşen olarak tanımlayın ve tasarımı bozmadan üstte görüntüleyin.
//  Beklenen çıktıyı görmek için public/preview1.png  ve public/preview2.png dosyalarını inceleyin.

// Ek görev:
// - Navbar'a bir Contact Us linki ekleyin ve bu linkin her iki durumda da (giriş yapmış ya da yapmamış) görünür olmasını sağlayın.

import { useState } from 'react'
import Image from 'next/image'

// Navbar bileşeni
export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const handleLogin = () => {
    setIsAuthUser(true)
  }

  const handleSignOut = () => {
    setIsAuthUser(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Sayfanın tamamını kapsayan konteynır */}
      <header className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"> {/* Navbar için genişliği sınırlı bir konteynır ve dikey düzen */}
        {/* Logo kısmı */}
        <Logo />

        <div className="navbar-links flex flex-col items-center space-y-4 mt-4 w-full">
          {/* Hesabınıza giriş yapın metni */}
          {!isAuthUser && (
            <p className="text-xl font-semibold text-gray-700">Hesabınıza giriş yapın</p>
          )}

          {/* Eğer kullanıcı giriş yapmışsa Dashboard ve Sign out linkleri görünür */}
          {isAuthUser ? (
            <>
              <button
                onClick={() => {}}
                className='w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none'
              >
                Dashboard
              </button>
              <button
                onClick={handleSignOut}
                className='w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-red-700 focus:outline-none'
              >
                Sign out
              </button>
            </>
          ) : (
            // Giriş yapmamışsa yalnızca Login butonu görünür
            <button
              onClick={handleLogin}
              className='w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none'
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  )
}

// Logo bileşeni
function Logo() {
  return (
    <div className='flex justify-center'>
      <a href='#' className='-m-1.5 p-1.5'>
        <Image
          className='h-16 w-auto' // Logo boyutunu biraz büyüttüm
          src='/mark.svg'
          alt='Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}