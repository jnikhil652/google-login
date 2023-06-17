import React from "react";
const GoogleLogin = ({ config, btnConfig }) => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        ...config,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-button-1234v"),
        btnConfig
      );
    };
    document.body.appendChild(script);
  }, []);
  return <div id="google-button-1234v"></div>;
};
export default GoogleLogin;
