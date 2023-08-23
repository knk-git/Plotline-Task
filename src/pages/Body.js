import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="screen-background" />
      <div className="screen1">
        <div className="survey-click1">
          <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
          <div className="image-21" />
          <div className="tooltip-master-auto-layout">
            <img
              className="beak-bottom-border"
              alt=""
              src="/beak--bottom--border.svg"
            />
            <div className="tooltip-wrapper">
              <div className="beak-bubble-beak">
                <div className="beak-left">
                  <img
                    className="beak-container-left"
                    alt=""
                    src="/beak-container--left.svg"
                  />
                </div>
                <div className="bubble">
                  <div className="tooltip-content">
                    <div className="tooltip-text-goes">
                      {" "}
                      Tooltip text goes here
                    </div>
                  </div>
                  <div className="close" />
                </div>
                <div className="beak-right">
                  <img
                    className="beak-container-left"
                    alt=""
                    src="/beak-container--right.svg"
                  />
                </div>
              </div>
              <div className="beak-top">
                <img
                  className="beak-container-top"
                  alt=""
                  src="/beak-container--top.svg"
                />
              </div>
              <div className="beak-bottom">
                <div className="beak-container-top" />
              </div>
            </div>
          </div>
          <div className="frame-parent">
            <div className="button-4-wrapper">
              <div className="tooltip-text-goes">Button 4</div>
            </div>
            <div className="button-5-wrapper">
              <div className="tooltip-text-goes">Button 5</div>
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="button-4-wrapper">
            <div className="tooltip-text-goes">Button 1</div>
          </div>
          <div className="button-2-wrapper">
            <div className="tooltip-text-goes">Button 2</div>
          </div>
        </div>
        <div className="button-3-wrapper">
          <div className="tooltip-text-goes">Button 3</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
