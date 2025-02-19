import "./contactCommunity.css";

export function ContactCommunity() {
  return (
    <div className="container-community">
      <div className="container-background-img">
        <h6 className="title-h6">JOIN OUR COMMUNITY</h6>
        <p className="p-txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
          <button type="button" className="button">
            <div className="span">
              <span className="fa-brands fa-discord"></span>
              <span>DISCORD</span>
            </div>
          </button>
          <button type="button" className="button2">
              <div className="span">
                <span>WHITELIST NOW</span>
              </div>
            </button>
      </div>
    </div>
  );
}
