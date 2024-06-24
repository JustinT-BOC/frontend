import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName='Apple' ticker='AAPL' price={100} />
      <Card companyName='Microsoft' ticker='MSFT' price={80} />
      <Card companyName='Tesla' ticker='TSLA' price={250} />
    </div>
  );
};

export default CardList;
