import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'

const answers = [
  'Concordo',
  'Faz sentido!',
  'Legal!',
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique. Explicabo possimus tempora corrupti est repudiandae ducimus dolores nostrum quia optio maxime laborum aut fugiat, voluptatibus delectus ullam magnam ex." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/helioLJ.png" alt="Hélio Lúcio" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))}
    </main>
  )
}