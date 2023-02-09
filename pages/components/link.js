import Link from "next/link";
import { useEffect } from "react";

const LinkC = () => {
  useEffect(() => {
    console.log("mounted");
  });
  return (
    <>
      <div style={{ height: "1000px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in lorem
        faucibus, mattis neque nec, rutrum ligula. Suspendisse potenti.
      </div>
      <Link
        key="foobar"
        replace={true}
        shallow={true}
        href={`/asd/bar?date=${new Date()}`}
      >
        go link
      </Link>
    </>
  );
};

export default LinkC;
