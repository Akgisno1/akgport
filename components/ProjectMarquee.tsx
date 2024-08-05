import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { link } from "fs";

const reviews = [
  {
    name: "Anime Vault",
    link: "https://anime-vault-one-pearl.vercel.app/",
    body: "a website using shikimori api to fetch anime data and display it in a nice UI, loading animations with infinite loading.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "GameHub",
    link: "https://game-hub-umber-zeta.vercel.app/",
    body: "a Website to fetch data about games from RAWG API and display it in a nice UI, with infinite loading, various filters, sorting options and searrch functionality.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Nike Landiing Page",
    link: "https://nike-phi-one.vercel.app/",
    body: "a Frontend only website for Nike, with a landing page and a various sections describing the products using Tailwind CSS  with a mobile responsive design.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Threads Clone",
    link: "https://threads-eight-sand.vercel.app/",
    body: "A Practice Project for learning Next.js 13 and Tailwind CSS, with Next.js server actions. It&apos;s a clone of the popular social media platform Threads.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const ReviewCard = ({
  img,
  name,
  link,
  body,
}: {
  img: string;
  name: string;
  link: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="43" height="43" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-oxo font-bold  dark:text-white">
            {name}
          </figcaption>

          <a
            className=" font-semibold bg-clip-text font-sm font-oxo text-transparent bg-gradient-to-r from-green-500 to-teal-500 hover:text-white hover:scale-105"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in a New Tab
          </a>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ProjectMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden   bg-background ">
      <Marquee reverse pauseOnHover vertical className="[--duration:10s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
