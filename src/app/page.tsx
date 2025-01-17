import clsx from "clsx";
import Image from "next/image";

const results = [
  {
    category: "Reaction",
    score: 80,
    icon: "/icon-reaction.svg",
    textColor: "text-[#FF5555]",
    backgroundColor:
      "bg-[#FF5555] bg-gradient-to-b from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]",
  },
  {
    category: "Memory",
    score: 92,
    icon: "/icon-memory.svg",
    textColor: "text-[#FFB21E]",
    backgroundColor:
      "bg-[#FFB21E] bg-gradient-to-b from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/icon-verbal.svg",
    textColor: "text-[#00BB8F]",
    backgroundColor:
      "bg-[#00BB8F] bg-gradient-to-b from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]",
  },
  {
    category: "Visual",
    score: 72,
    icon: "/icon-visual.svg",
    textColor: "text-[#1125D6]",
    backgroundColor:
      "bg-[#1125D6] bg-gradient-to-b from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.95)]",
  },
];

export default function Page() {
  const score = Math.round(
    results.reduce((acc, result) => acc + result.score, 0) / results.length
  );

  return (
    <main className="min-h-screen max-md:h-screen md:flex md:items-center md:justify-center">
      <section className="w-full h-full max-md:flex max-md:flex-col md:grid md:grid-cols-2 md:max-w-[46rem] md:rounded-[2rem] md:overflow-hidden bg-white md:shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)]">
        <div className="p-6 pb-10 md:pt-[2.375rem] md:pb-[3.4375rem] bg-gradient-to-b from-[#7755FF] via-[#6943FF] to-[#2F2CE9] max-md:rounded-b-[2rem] md:rounded-r-[2rem] flex flex-col items-center">
          <span className="text-lg leading-[1.4375rem] font-bold md:text-2xl md:leading-[1.9375rem]">
            Your Result
          </span>
          <div className="mt-6 md:mt-[2.1875rem]">
            <span className="sr-only">
              {`Your score is ${score} out of 100`}
            </span>
            <div
              className="size-[8.75rem] md:size-[12.5rem] flex flex-col md:gap-y-1 items-center justify-center rounded-full bg-gradient-to-b from-[#4D21C9] to-[rgba(37,33,201,0)]"
              aria-hidden
            >
              <span className="text-[3.5rem] leading-[4.5rem] font-extrabold text-white md:text-[4.5rem]">
                {score}
              </span>
              <span className="text-base leading-[1.3125rem] font-bold opacity-[0.5168] md:text-lg md:leading-[1.4375rem]">
                of 100
              </span>
            </div>
          </div>

          <h1 className="mt-6 md:mt-7 text-2xl leading-[1.9375rem] font-bold text-white md:text-[2rem] md:leading-[2.625rem]">
            Great
          </h1>
          <p className="mt-2 md:mt-[.875rem] text-base leading-[1.3125rem] font-medium max-w-[16.25rem] text-center md:text-lg md:leading-[1.4375rem]">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="max-md:flex-1 p-[1.875rem] pt-6 md:px-10 md:pt-[2.375rem] md:pb-[2.875rem] bg-white">
          <h2 className="text-lg leading-[1.4375rem] text-[#303B59] font-bold max-md:pl-0.5 md:text-2xl md:leading-[1.9375rem]">
            Summary
          </h2>

          <ul className="mt-6 md:mt-7 space-y-4">
            {results.map((result) => (
              <li
                key={result.category}
                className={clsx(
                  "px-4 pb-[1.0625rem] pt-4 md:p-4 md:pb-[.9375rem] rounded-xl border border-transparent",
                  result.backgroundColor
                )}
              >
                <span className="sr-only">
                  {result.category}: {result.score} / 100
                </span>
                <div className="flex items-center justify-between" aria-hidden>
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={result.icon}
                      alt={`${result.category} icon`}
                      width={20}
                      height={20}
                      aria-hidden
                    />
                    <span
                      className={clsx(
                        "text-base leading-[1.3125rem] font-medium md:text-lg md:leading-[1.4375rem]",
                        result.textColor
                      )}
                    >
                      {result.category}
                    </span>
                  </div>
                  <span className="text-base leading-[1.3125rem] font-bold text-[#303B59] md:text-lg md:leading-[1.4375rem]">
                    {result.score} <span className="opacity-50">/ 100</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <button className="bg-[#303B59] overflow-hidden p-4 h-14 flex items-center justify-center w-full rounded-[8rem] mt-6 md:mt-[2.5625rem] text-white text-base leading-[1.4375rem] relative group">
            <span className="relative z-10">Continue</span>
            <span className="absolute inset-0 button-hover-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>
    </main>
  );
}
