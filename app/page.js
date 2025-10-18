'use client';
import './globals.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}
