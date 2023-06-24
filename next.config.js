const withTwin = require('./withTwin')


/** @type {import('next').NextConfig} */
module.exports = withTwin({
  poweredByHeader: false,
  optimizeFonts: false,

  env: {
    APP_ENV: process.env.REACT_APP_ENV,
    APP_URL: process.env.REACT_APP_ENV === "development" ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_URL,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4200/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "http://localhost:4200/uploads/:path*",
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
})

