import React from 'react'
import WebBanner from './WebBanner'
import { headers } from "next/headers";
import MobileBanner from './MobileBanner';

const HomeBanner = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobileView = /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\ mini|avantgo|mobilesafari|docomo|KAIOS)/i
    .test(userAgent);
  return (
    isMobileView ? <MobileBanner /> : <WebBanner />   
  )
}

export default HomeBanner