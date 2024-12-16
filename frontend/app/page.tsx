import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
return (
<>
{/* Embed YouTube Video */}
<div className="w-full mx-auto mt-8 lg\:max-w-[1226px] lg\:h-[690px]">
<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
<iframe
         className="absolute inset-0 w-full h-full"
         src="https://www.youtube.com/embed/M7_rmNkM_BY"
         frameBorder="0"
         title="Balloonerism"
         aria-hidden="true"
         allowFullScreen
       />
</div>
</div>

<section className="flex flex-col items-center justify-center gap-4 py-8 md\:py-10">
    <div className="inline-block max-w-xl text-center justify-center">
      <span className={title()}>Coming this&nbsp;</span>
      <span className={title({ color: "blue" })}>2025&nbsp;</span>
      <div className={subtitle({ class: "mt-4" })}>
        Beautiful, fast and modern.
      </div>
    </div>

    <div className="flex gap-3">
      <Link
        isExternal
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.links.docs}
      >
        Documentation
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        GitHub
      </Link>
    </div>

    <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="bordered">
        <span>
          Get started by editing <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
    </div>
  </section>
</>

);
}