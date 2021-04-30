import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)


const MostVotes= ({points, anecdotes}) => {
  var max = points[0];
  var maxIndex = 0;

  for (var i = 1; i < points.length; i++) {
      if (points[i] > max) {
          maxIndex = i;
          max = points[i];
      }
  }

  return (
    <div>
      {anecdotes[maxIndex]}
    </div>
  )
}

function vote(points, selected) {
  const copy = [...points]
  copy[selected] += 1
  return copy
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {anecdotes[selected]}
      <p>
        has {points[selected]} votes
      </p>
      <p>
        <Button handleClick={() => setPoints(vote(points, selected))} text="vote"/>
        <Button handleClick={() => setSelected(Math.floor(Math.random() * 5))} text="next anecdote"/>
      </p>

      <h1>
        Anecdote with the most votes
      </h1>
      <MostVotes points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App