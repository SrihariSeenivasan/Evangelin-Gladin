const SuccessMessage = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#successMessage"
        id="success-msg-modal-btn"
        // onClick={() => handleShow()}
      >
        Success Btn
      </button>
      <div
        className={`modal fade zoom `}
        id="successMessage"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="successMessageLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className={`modal-content border border-1 rounded-2`}
            style={{
              boxShadow: "0 0 10px white !important",
              background:
                "linear-gradient(88deg,#2e6179 -11.16%, #6dd0de 94.89%)",
            }}
          >
            <div className="modal-body text-center text-white">
              <div className="fs-1 text-success p-3">
                <span className="step">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </span>
              </div>
              <div className="fs-3 pt-2">Awesome !</div>
              <div className="py-3 fs-5">
                Our Team member will get in touch with you.
              </div>
              <div className="py-2 pb-4">
                <button
                  type="button"
                  class="btn btn-outline-light w-50"  
                  data-bs-dismiss="modal"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
