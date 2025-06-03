import { Helmet } from "react-helmet-async";

export default function PageHead({ title = "Kutubi" }) {
    console.log("PageHead rendered with title:", title);
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
}
