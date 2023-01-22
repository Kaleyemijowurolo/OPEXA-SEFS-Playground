import React, { useState, useEffect } from "react";

const DeviceInfo = () => {
  const [device, setDevice] = useState({
    deviceName: "unknown",
    deviceType: "unknown",
    operatingSystem: "unknown",
  });
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);

  useEffect(() => {
    function detectDeviceInfo() {
      let deviceName = "unknown";
      let deviceType = "unknown";
      let operatingSystem = "unknown";

      // Check for device type
      if (navigator.userAgent.match(/Android/i)) {
        deviceType = "mobile";
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        deviceType = "mobile";
      } else if (navigator.userAgent.match(/Windows Phone/i)) {
        deviceType = "mobile";
      } else {
        deviceType = "desktop";
      }

      // Check for operating system
      if (navigator.userAgent.match(/Windows/i)) {
        operatingSystem = "Windows";
      } else if (navigator.userAgent.match(/Mac OS X/i)) {
        operatingSystem = "Mac OS X";
      } else if (navigator.userAgent.match(/Android/i)) {
        operatingSystem = "Android";
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        operatingSystem = "iOS";
      } else if (navigator.userAgent.match(/Linux/i)) {
        operatingSystem = "Linux";
      } else if (navigator.userAgent.match(/CrOS/i)) {
        operatingSystem = "Chrome OS";
      }

      // Check for operating system
      if (navigator.userAgent.match(/Windows/i)) {
        operatingSystem = "Windows";
      } else if (navigator.userAgent.match(/Mac OS X/i)) {
        operatingSystem = "Mac OS X";
      } else if (navigator.userAgent.match(/Android/i)) {
        operatingSystem = "Android";
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        operatingSystem = "iOS";
      } else if (navigator.userAgent.match(/Linux/i)) {
        operatingSystem = "Linux";
      } else if (navigator.userAgent.match(/CrOS/i)) {
        operatingSystem = "Chrome OS";
      }

      // Check for device name
      if (navigator.userAgent.match(/Samsung/i)) {
        deviceName = "Samsung";
      } else if (navigator.userAgent.match(/Pixel/i)) {
        deviceName = "Google Pixel";
      } else if (navigator.userAgent.match(/LG/i)) {
        deviceName = "LG";
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        deviceName = "Apple";
      } else if (navigator.userAgent.match(/Mac/i)) {
        deviceName = "Mac";
      } else if (navigator.userAgent.match(/Windows/i)) {
        deviceName = "Windows";
      }
      setDevice({ ...device, deviceName, deviceType, operatingSystem });
    }

    detectDeviceInfo();
  }, [device]);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
      setDeviceHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="text-left">
      <p>
        Device Name: <span className="font-bold">{device.deviceName}</span>
      </p>
      <p>
        Device Height: <span className="font-bold">{deviceHeight}px</span>
      </p>
      <p>
        Device Width: <span className="font-bold">{deviceWidth}px</span>
      </p>
      <p>
        Device Type: <span className="font-bold">{device.deviceType}</span>
      </p>
      <p>
        Operating System:{" "}
        <span className="font-bold">{device.operatingSystem}</span>
      </p>
    </div>
  );
};

export default DeviceInfo;
