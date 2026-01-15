import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-black/20 backdrop-blur-md pb-6 pt-8 backdrop-filter lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200/5 lg:p-4">
          SAVA-LINE &nbsp;
          <code className="font-mono font-bold">PREMIUM</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-blue-500 before:to-transparent before:opacity-10 before:blur-3xl after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-to-t after:from-sky-900 after:via-sky-900 after:blur-2xl after:content-[''] before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 z-[-1]">
        <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          SAVA LINE
        </h1>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Invisible Air Diffusion Systems. <br />
          Engineered for comfort, designed for silence.
        </p>

        <div className="mt-12 flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
            View Collection
          </button>
          <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            Technical Specs
          </button>
        </div>
      </div>

    </main>
  );
}
