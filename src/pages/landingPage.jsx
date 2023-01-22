import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

function LandingPage() {
  return (
    <div>
      <Button primary buttonName={"Continue"} />
      <Button secondary buttonName={"SignUp"} />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Select options={["Opexa", "SEFS", "Review"]} />
    </div>
  );
}

export default LandingPage;
