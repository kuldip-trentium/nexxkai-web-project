import React from "react";
import { SpacedComponentProps } from "./Spacer.props";

const Spacer: React.FC<SpacedComponentProps> = ({ size }) => {
  const styles = {
    marginTop: size,
    marginBottom: size,
  };

  return <div className="spaced-component" style={styles} />;
};

export default Spacer;
