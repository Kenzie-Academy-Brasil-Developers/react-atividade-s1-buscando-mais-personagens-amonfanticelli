import { ButtonBefore } from "./style";

const ButtonShowBefore = ({ showBefore, beforePage }) => {
  return (
    <ButtonBefore
      isDisabled={beforePage === null ? true : false}
      onClick={() => {
        showBefore();
      }}
      disabled={!beforePage}
    >
      Anterior
    </ButtonBefore>
  );
};

export default ButtonShowBefore;
