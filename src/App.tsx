import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// hooks
import { useKakaoExternal } from "./hooks/useKakaoExternal";
// styles
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import global from "./styles/global";
// pages
import IntroPage from "@/pages/intro";
import InvitationPage from "@/pages/invitation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "invitation",
    element: <InvitationPage />,
  },
]);

export default function App() {
  useKakaoExternal();
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#3a3a44",
            color: "#f2f2f2",
            fontSize: 14,
          },
        }}
      />
    </>
  );
}
