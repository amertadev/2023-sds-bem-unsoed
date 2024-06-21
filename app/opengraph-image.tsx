/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soedirman Digital School - BEM UNSOED | SDS is an online course event on technology organized by BEM UNSOED for students and the public";
export const contentType = "image/svg+xml";

export default async function OG() {
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <img
          src="https://sds-bem-unsoed.vercel.app/assets/logo.svg"
          alt="SDS Logo"
          width={80}
          height={80}
          style={{
            width: '80px',
            height: '80px',
            marginBottom: '16px',
            opacity: 0.95,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
