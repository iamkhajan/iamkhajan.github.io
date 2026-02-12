import { Typewriter } from 'react-simple-typewriter';

export default function TypingTitle({ words }) {
  return (
    <h1>
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
}