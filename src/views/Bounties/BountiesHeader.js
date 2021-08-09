import React, { useState, useEffect } from "react";
//Design imports
import { Button, Collapse } from "antd";

function BountiesHeader({ rawData }) {
  const [tellorBountiesAvailableData, setTellorBountiesAvailableData] =
    useState();
  const [showPanel, toggleShowPanel] = useState(false);

  //Panel instantiation
  const { Panel } = Collapse;

  //useEffect to call the Sheety API to render proper amount of available Tellor Bounties
  useEffect(() => {
    rawData &&
      rawData.forEach((bounty) => {
        if (bounty.bountiesTitle === "Tellor Bounties Available") {
          setTellorBountiesAvailableData(bounty);
        }
      });
  }, [rawData]);

  //   const toggleShowPanel = () => {
  //     if (changePanelKey === "0") {
  //       setChangePanelKey("1");
  //       setChangeButtonText(!changeButtonText);
  //     } else if (changePanelKey === "1") {
  //       setChangePanelKey("0");
  //       setChangeButtonText(!changeButtonText);
  //     }
  //   };

  return (
    <>
      <div className="contentTxt">
        <h2>Bounties</h2>
        <div className="bountiesAvailable">
          <h3>{`Currently available in bounties: ${
            tellorBountiesAvailableData
              ? tellorBountiesAvailableData.tributes + " USD"
              : "Loading..."
          }`}</h3>
        </div>
        <div className="headerGroundRules">
          <p>
            The Tellor Bounties program is a way to reward developers who help
            us build out Tellor. <br /> We have a dev fund that's for developing
            Tellor and we plan to use it!
          </p>
          <Button
            id="openPanelButton"
            onClick={() => toggleShowPanel(!showPanel)}
          >
            {showPanel ? "Hide Ground Rules" : "Read Ground Rules"}
          </Button>
        </div>
      </div>

      <section className="panel">
        <Collapse
          defaultActiveKey={["0"]}
          activeKey={showPanel ? ["1"] : ["0"]}
        >
          <Panel key={"1"}>
            <div className="groundRules">
              <div className="panelRowsSpecial">
                <h3>Tellor Bounties Ground Rules</h3>
                <p>Welcome Tellor Developers and Bounty Hunters!</p>
              </div>
              <div className="panelRows">
                <h3>How do I get started?</h3>
                <p>
                  Scroll down to see available bounties, and see if anything
                  tickles your fancy and then shoot me an email to find out
                  more.
                  <br />
                  If it says yes, it's "available"! Then you can email me and
                  I'll say it's yours. If you want to help someone else working
                  on one not available, then also ask and I'll see if its a fit.
                  <br />
                  If you're building something else that's open source and fits
                  with our mission...tell me to add it and lets keep building
                  this out.
                </p>
              </div>
              <div className="panelRows">
                <h3>What this is NOT.</h3>
                <p>
                  This is not us paying teams to get this done. We're not
                  selling off our dev share or hiring contractors. Instead, we
                  want the community to become part of completing the network's
                  development need.
                  <br />
                  The rewards should be seen as just bonuses for helping to
                  build out Tellor, not nessecarily a salary or a fair market
                  value for the work.
                  <br />
                  It's also not some anonymous thing. If you want the reward,
                  you have to let me know you're working on it. Hell, let
                  discord and the Tellor channel know you're on it. We want you
                  to work on it alone, with people, and with the team.
                </p>
              </div>
              <div className="panelRows">
                <h3>Disclaimer!</h3>
                <p>
                  This is crypto...no promises or guarantees in any way. Rewards
                  are subject to change given price changes.
                </p>
              </div>
              <p
                className="panelClose"
                onClick={() => toggleShowPanel(!showPanel)}
              >
                close ground rules
              </p>
            </div>
          </Panel>
        </Collapse>
      </section>
    </>
  );
}

export default BountiesHeader;
