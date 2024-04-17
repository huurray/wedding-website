import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
