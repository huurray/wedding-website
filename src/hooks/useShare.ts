import toast from "react-hot-toast";

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
      toast("링크가 클립보드에 복사되었습니다.");
    }
  }

  return {
    share,
  };
}
