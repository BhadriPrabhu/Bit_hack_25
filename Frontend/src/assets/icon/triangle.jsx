const Triangle = ({ rotate }) => {
    return (
      <svg width="70" height="70" style={{transform: `${rotate}`}}>
        <polygon points="0,0 100,100 0,100" fill="white" />
      </svg>
    );
  };
  
  export default Triangle;
  