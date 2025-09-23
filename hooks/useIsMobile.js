import { useWindowSize } from "@uidotdev/usehooks";

const useIsMobile = () => {
  const size = useWindowSize();

  if (size?.width < 600) {
    return true;
  }

  return false;
};

export default useIsMobile;
