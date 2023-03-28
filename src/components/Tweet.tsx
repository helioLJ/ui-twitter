import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'

import { Link } from 'react-router-dom'

import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet" >
      <img src="https://github.com/helioLJ.png" alt="Hélio Lúcio" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Hélio Lúcio</strong>
          <span>@heliojota</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>

        </div>
      </div>
    </Link>
  )
}