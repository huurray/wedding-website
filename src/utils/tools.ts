export async function copyAddressToClipboard() {
  const address =
    "서울 영등포구 국회대로38길 2, 더컨벤션 영등포 2층 다이너스티홀";
  try {
    if (!window.navigator?.clipboard) return;
    await window.navigator.clipboard.writeText(address);
    alert("클립보드에 주소가 복사되었습니다.");
  } catch (error) {
    throw error;
  }
}
