import { HeaderForDesktopVersion } from "./HeaderForDesktopVersion";
// import { HeaderForMobileVersion } from "./HeaderForMobileVersion";
import { HeaderForMobileVersion } from "./HeaderForMobileVersion";

export const Header = () => {

  return (
    <nav
      className="w-[100%] flex justify-center items-center bg-blue-800 fixed top-0 overflow-visible z-20"
      name="header"
    >
      {/* Desktop version */}
      <HeaderForDesktopVersion />
     
      {/* Mobile version */}
      <HeaderForMobileVersion />
     
    </nav>
  );
};
