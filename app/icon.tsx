import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img 
        src="https://sds-bem-unsoed.vercel.app/assets/icon.svg"
        alt="SDS Icon" 
        width={size.width}
        height={size.height}
        style={{ width: '100%', height: '100%' }}
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}