import React from "react";

import "./statement.scss";

export default function Statement(props) {
  return (
    <div className="hack-statement">
      <h1>Formal Statement</h1>
      <p className="hack-statement-body">
        Hey Hackers!
        <br></br>
        <br></br>
        With UC Irvine’s campus reopening on January 31st, we wanted to
        reevaluate the virtual format of HackUCI and pursue a hybrid option in
        order to provide participants and mentors with the most immersive
        hackathon experience possible.
        <br></br>
        <br></br>
        That being said, HackUCI 2022 will no longer take place from February
        11th to February 13th and will be postponed until further notice. The
        application window for the event will therefore be prolonged and no
        longer close on January 30th. You may continue to apply to HackUCI until
        we have secured a safe venue which complies to COVID guidelines.
        <br></br>
        <br></br>
        We sincerely apologize for the inconvenience that this decision may have
        caused anyone and hope that this postponement does not change your mind
        on whether or not to apply to and attend HackUCI 2022.
        <br></br>
        <br></br>
        If you have any questions regarding this decision or HackUCI 2022 in
        general, please email us at hack@uci.edu- thank you!
      </p>
    </div>
  );
}
