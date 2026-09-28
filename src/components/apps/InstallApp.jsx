"use client";
import { AuthContex } from "@/contex/AppProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }) => {
  const { installApp, setInstallApp } = useContext(AuthContex);

  const handleInstallBtn = () => {
    const alreadyInstalled = installApp.some((item) => item.id === app.id);
    if (alreadyInstalled) {
      return;
    }

    setInstallApp([...installApp, app]);

   toast.success("🦄 Install successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
    });
  };
  return (
    <button
      onClick={() => handleInstallBtn()}
      className="btn btn-primary mt-6 w-full sm:w-auto"
    >
      Install App
    </button>
  );
};

export default InstallAppButton;

// "use client";
// import { AppContex } from "@/contex/AppProvider";
// import React, { useContext } from "react";

// const InstallAppButton = ({ app }) => {
//   const {installApp, setInstallApp} = useContext(AppContex);
//   console.log(installApp,setInstallApp,"data")

//   const handaleInstall = () => {
//     console.log("intall button triger", app);
//     setInstallApp([...installApp,app])
//   };
//   return (
//     <button
//       onClick={() => handaleInstall()}
//       className="btn btn-primary mt-6 w-full sm:w-auto"
//     >
//       Install App
//     </button>
//   );
// };

// export default InstallAppButton;
