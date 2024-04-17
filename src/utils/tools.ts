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
