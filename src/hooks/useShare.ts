import toast from "react-hot-toast";
import { copyToClipboard } from "@/utils/tools";

interface Props {
  title: string;
  text: string;
  url: string;
}
export function useShare(shareInfo: Props) {
  async function share() {
    if (navigator?.share) {
      await navigator.share(shareInfo);
    } else {
      copyToClipboard(shareInfo.url);
    }
  }

  return {
    share,
  };
}
