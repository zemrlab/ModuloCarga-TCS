import React from "react";
import Popup from "reactjs-popup";
import HelpModal from './HelpModal';

export default () => (
  <Popup trigger={<button> Help me!</button>} position="right center">
    <div>
        <HelpModal />
    </div>
  </Popup>
);