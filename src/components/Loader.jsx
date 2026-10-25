import { RotatingLines } from "react-loader-spinner";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const Overflow = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #80808083;
  color: #052daf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  const loader = useSelector((state) => state.loader.value);
  return (
    <>
      {loader && (
        <Overflow>
          <RotatingLines color="#052daf" />
        </Overflow>
      )}
    </>
  );
};
