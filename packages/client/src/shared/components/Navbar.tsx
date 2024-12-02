import React from "../../React.ts";
import navbarConfig from "../signals/navbarConfig.ts";
import FlexSeparator from "./FlexSeparator.tsx";
import Icon from "./Icon.tsx";
import Logo from "./Logo.tsx";

export default function () {
  const navRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    navbarConfig.height.value = navRef.current.getBoundingClientRect().height;

    return () => {
      navbarConfig.height.value = 0;
    };
  }, [navRef]);

  return (
    <nav
      ref={navRef}
      className="flex fixed top-0 left-0 w-full z-[999] p-page py-2 items-center bg-background gap-x-5 border-b shadow-sm"
    >
      <div className="flex group">
        <Logo className="size-12 group-hover:motion-preset-wiggle" />

        <div className="px-3 leading-3">
          <p className="font-semibold text-lg">Mouse</p>
          <p className="text-xs text-muted">Events & Ticketing</p>
        </div>
      </div>

      <div className="w-1/2 flex border border-front px-2 py-1 text-sm rounded-md focus-within:bg-primary/5">
        <input
          type="text"
          name="query"
          placeholder="Search nearby events in Gwalior"
          className="w-full"
        />
        <button>
          <Icon name="Search" className="size-5" />
        </button>
      </div>

      <FlexSeparator size="full" />

      <div className="flex items-center gap-x-8">
        <p>Trade</p>

        <button className="font-medium ani motion-preset-bounce motion-duration-200 motion-loop-infinite">
          $MST
        </button>

        <div className="flex items-center gap-x-1">
          <Icon name="MapPin" className="text-red-500 stroke-2" />
          <p>Gwalior</p>
          <Icon name="ChevronDown" />
        </div>

        <FlexSeparator size="sm" />

        <img
          className="size-10 rounded-full outline outline-offset-1 outline-2 outline-muted"
          src="https://assets.promptbase.com/DALLE_IMAGES%2Fmb3uv9MiTehdpFT4CwVY0V4GveQ2%2Fresized%2F1725705400370u_w_800x800.webp?alt=media&token=15233fd3-fdd8-4157-96c6-635522901bca"
          alt="prfofiel"
        />
      </div>
    </nav>
  );
}
