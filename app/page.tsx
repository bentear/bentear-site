'use client'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
    // Autoplay after modal opens
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }, 100)
  }

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setProgress(0)
    setVideoReady(false)
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(percent)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = percent * videoRef.current.duration
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    // On mobile, loop the video. On desktop, close modal.
    const isMobile = window.innerWidth <= 768
    if (isMobile && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      closeModal()
    }
  }

  const handleVideoCanPlay = () => {
    setVideoReady(true)
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal()
      }
      if (e.key === ' ' && modalOpen) {
        e.preventDefault()
        togglePlay()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [modalOpen, isPlaying])

  return (
    <>
      <div className="container">
        <div className="content">
          <p>Ben Tear</p>

          <div className="spacer"></div>
          <div className="spacer"></div>

          <p>I build brands and product experiences that accelerate traction for companies doing hard, important things.</p>

          <p>I work on strategy and GTM with high-growth startups in AI infrastructure, web3, space, and consumer health at <a href="https://thisislandscape.com" target="_blank" rel="noopener noreferrer">Landscape</a>, and manage editorial output for the literary journal <a href="https://bidoun.org" target="_blank" rel="noopener noreferrer">Bidoun</a>.</p>

          <p>Previously I was a director at ToftH, a think-tank consulting on product strategy with R&D teams at Google X, Meta, Microsoft, and Snap.</p>

          <div className="spacer-lg"></div>

          <p><a onClick={openModal} className="sizzle-reel" style={{ fontWeight: 500 }}>Sizzle Reel</a></p>

          <div className="spacer-lg"></div>

          <p>You can reach me by email <a href="mailto:benjamin.tear@gmail.com">here</a>.</p>
        </div>
      </div>

      {/* Video Modal */}
      <div 
        className={`modal-overlay ${modalOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div className="modal-content">
          <div className="video-container">
            <video 
              ref={videoRef}
              preload="auto"
              muted
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnd}
              onClick={togglePlay}
            >
              <source src="/reel.mp4" type="video/mp4" />
            </video>
            
            {/* Mute Button */}
            <button className="mute-btn" onClick={toggleMute}>
              {isMuted ? (
                <svg viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
