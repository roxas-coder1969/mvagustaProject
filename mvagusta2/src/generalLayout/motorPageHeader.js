import React, { useEffect } from "react";
import { Spring } from "react-spring/renderprops";

export default function MotorPageHeader({ headerData }) {
  useEffect(() => {
    if (headerData.manifesto_Arr.length < 5) {
      for (var i = 0; i < headerData.manifesto_Arr.length; i++) {
        document.getElementsByClassName("motorPageHeader-manifesto")[
          i
        ].style.height = 101.8 + "px";
      }
    } else {
      for (var k = 0; k < headerData.manifesto_Arr.length; k++) {
        document.getElementsByClassName("motorPageHeader-manifesto")[
          k
        ].style.height = (1 / headerData.manifesto_Arr.length) * 100 + "%";
        document.getElementsByClassName("motorPageHeader-manifesto")[
          k
        ].style.marginTop = 5 + "px";
        document.getElementsByClassName("motorPageHeader-manifesto")[
          k
        ].style.fontSize = "98%";
      }
    }
  });

  return (
    <>
      <div
        className="motorPageHeader"
        style={{
          // backgroundImage: "url(./img/dragster800rrscs/dragster-800-rr-xl.png)",
          background: `${headerData.colorBg}`,
          position: "relative",
        }}
      >
        <div
          className="motorPageHeader-Content"
          style={{
            zIndex: 10,
            left: headerData.reveredContent === true ? 0 : null,
          }}
        >
          <Spring
            from={{
              opacity: 0,
              transition: "0.4s ease",
              backgroundImage: "url(./img/" + headerData.nameHeaderTitle + ")",
              backgroundSize: headerData.titleSize,
              height: headerData.heightContentTop,
            }}
            to={{
              opacity: 1,
              backgroundImage: "url(./img/" + headerData.nameHeaderTitle + ")",
              backgroundSize: headerData.titleSize,
            }}
          >
            {(props) => (
              <div className="motorPageHeader-Content-top" style={props}></div>
            )}
          </Spring>
          <div className="motorPageHeader-Content-center">
            <div className="motorPageHeader-Content-center-top">
              {headerData.manifesto_Arr.map((item, index) => (
                <Spring
                  from={{
                    opacity: 0,
                    position: "relative",
                    top: 300,
                    transition: "0.4s ease-out",
                  }}
                  to={{
                    opacity: 1,
                    top: 0,
                  }}
                >
                  {(props) => (
                    <div className="motorPageHeader-manifesto">
                      <p style={props}>{headerData.manifesto_Arr[index]}</p>
                    </div>
                  )}
                </Spring>
              ))}
            </div>
            <Spring
              from={{ opacity: 0, transition: "0.4s ease" }}
              to={{ opacity: 1 }}
            >
              {(props) => (
                <div
                  className="motorPageHeader-Content-center-bottom"
                  style={props}
                >
                  <p>{headerData.contentHeaderContent}</p>
                </div>
              )}
            </Spring>
          </div>
          <Spring
            from={{ opacity: 0, transition: "0.4s ease" }}
            to={{ opacity: 1 }}
          >
            {(props) => (
              <div className="motorPageHeader-Content-bottom" style={props}>
                <p>Starting from {headerData.price} €</p>
              </div>
            )}
          </Spring>
        </div>
        <div
          className="xxxxx"
          style={{
            backgroundImage: `url(./img/${headerData.bgHeaderParallax})`,
            width: "100%",
            height: "110vh",
            position: "sticky",
            top: 0,
            // backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
}
