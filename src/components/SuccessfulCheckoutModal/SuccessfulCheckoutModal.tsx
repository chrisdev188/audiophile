import * as React from "react";

interface ISuccessfulCheckoutModalProps {}

const SuccessfulCheckoutModal: React.FunctionComponent<
  ISuccessfulCheckoutModalProps
> = (props) => {
  return (
    <div className="modal">
      <div className="content"></div>
      <div className="overlay"></div>
    </div>
  );
};

export default SuccessfulCheckoutModal;
