import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <footer>
        <div>I am a footer line #1</div>
        <div>I am a footer line #2</div>
        <div>I am a footer line #3</div>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          height: 12vh;
          box-shadow: 1px 1px #e8e2e2;
          border: 1px solid black;
          border-bottom: 1px solid black;
          margin: 0 20px 20px 20px;
        }
      `}</style>
    </div>
  );
}
