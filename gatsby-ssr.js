const React = require("react")

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <div id="fb-root"></div>,
    <script
      async
      defer
      crossOrigin="anonymous"
      src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v13.0&appId=1994883547264823&autoLogAppEvents=1"
      nonce="OIP6FzCN"
    ></script>,
  ])
}