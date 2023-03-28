import { PaperPlaneRight } from "phosphor-react";
import { useState, FormEvent, KeyboardEvent } from "react";

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState<string[]>([])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique. Explicabo possimus tempora corrupti est repudiandae ducimus dolores nostrum quia optio maxime laborum aut fugiat, voluptatibus delectus ullam magnam ex." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/helioLJ.png" alt="Hélio Lúcio" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={event => setNewAnswer(event.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {
        answers.map((answer, index) => (
          <Tweet key={index} content={answer} />
        ))
      }
    </main >
  )
}