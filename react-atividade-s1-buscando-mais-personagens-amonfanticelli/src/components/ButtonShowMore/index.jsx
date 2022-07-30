import { ButtonAfter } from "./style";
const ButtonShowMore = ({ showNext, nextPage }) => {
  return (
    <ButtonAfter
      isDisabled={nextPage === null ? true : false}
      disabled={!nextPage}
      onClick={() => showNext()}
    >
      Próxima
    </ButtonAfter>
  );
};

export default ButtonShowMore;
