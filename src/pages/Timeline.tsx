import { FormEvent } from "react";

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css'

const tweets = [
  'Meu tweet 1',
  'Meu tweet 2',
  'Meu tweet 3',
]

export function Timeline() {
  function createNewTweet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('teste');
    
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/helioLJ.png" alt="Hélio Lúcio" />
          <textarea id="tweet" placeholder="What's happening?"></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}

    </main>
  )
}