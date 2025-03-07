const Triangle = ({ rotate }) => {
    return (
      <svg width="100" height="100" style={{transform: "scaleX(-1)"}}>
        <polygon points="0,0 100,100 0,100" fill="blue" />
      </svg>
    );
  };
  
  export default Triangle;
  