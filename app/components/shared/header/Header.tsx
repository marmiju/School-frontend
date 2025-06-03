import React from "react";
import { MobileHeader } from "./mobile/MobileHeader";
import { DesktopHeader } from "./desktop/DesktopHeader";
import { HeaderTop } from "./top/HeaderTop";

export const Header = () => {
  return (
    <header className="grid">
      <div>
        <div>
          <HeaderTop />
        </div>
        <div className="block lg:hidden">
          <MobileHeader />
        </div>
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>
      </div>
    </header>
  );
};
