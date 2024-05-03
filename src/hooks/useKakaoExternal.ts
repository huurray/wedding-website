import { useEffect, useRef } from "react";

export function useKakaoExternal() {
  const isSent = useRef(false);

  useEffect(() => {
    if (isSent.current) return;
    const target_url = location.href;
    if (navigator.userAgent.match(/kakaotalk/i)) {
      //카카오톡 외부브라우저로 호출
      location.href =
        "kakaotalk://web/openExternal?url=" + encodeURIComponent(target_url);
    } else if (navigator.userAgent.match(/line/i)) {
      //라인 외부브라우저로 호출
      if (target_url.indexOf("?") !== -1) {
        location.href = target_url + "&openExternalBrowser=1";
      } else {
        location.href = target_url + "?openExternalBrowser=1";
      }
    }
    isSent.current = true;
  }, []);
}
