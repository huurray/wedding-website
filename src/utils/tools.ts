import toast from "react-hot-toast";

export async function copyToClipboard(text: string) {
  try {
    if (!window.navigator?.clipboard) return;
    await window.navigator.clipboard.writeText(text);
    toast("클립보드에 복사되었습니다.");
  } catch (error) {
    throw error;
  }
}

export function navigateExternal(url: string) {
  if (navigator.userAgent.match(/kakaotalk/i)) {
    //카카오톡 외부브라우저로 호출
    window.location.href =
      "kakaotalk://web/openExternal?url=" + encodeURIComponent(url);
  } else if (navigator.userAgent.match(/line/i)) {
    //라인 외부브라우저로 호출
    if (url.indexOf("?") !== -1) {
      window.location.href = url + "&openExternalBrowser=1";
    } else {
      window.location.href = url + "?openExternalBrowser=1";
    }
  } else {
    window.open(url, undefined, "noopener, noreferrer");
  }
}
