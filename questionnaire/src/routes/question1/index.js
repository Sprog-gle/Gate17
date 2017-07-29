import React from "react";

import { Header, TextInput, Footer } from "../../components";

const Question1 = () =>
  <div>
    <Header />
    <TextInput dataSource={["test", "lala"]} />
    <Footer />
  </div>;

export default Question1;
