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
      toast("공유 링크가 복사되었습니다.");
    }
  }

  return {
    share,
  };
}
