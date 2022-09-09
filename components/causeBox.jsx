import React from "react";

const CauseBox = ({
  addbutton,
  buttonDesign,
  message,
  image,
  addProgress,
  progressAmount,
  progressValue,
  title,
  progressDesign,
  buttonText
}) => {
  return (
    <div className="mt-10 border rounded-lg shadow-md w-60">
      <Image src={image} width="300px" height="150px" alt="program-1" />
      <p className="font-bold ml-2">{title}</p>
      <p className="text-xs mt-2 leading-normal text-left ml-2 font-bold text-gray-500">
        {message}
      </p>
      {addbutton && <button className={buttonDesign}>{buttonText}</button>}
      {addProgress && (
        <div className={progressDesign}>
          <p className="text-xs ml-40 font-semibold mt-5">{progressAmount} $</p>
          <progress
            className="ml-20 h-3 rounded-lg bg-transparent mb-3 w-36"
            max="100"
            value={progressValue}
          />
        </div>
      )}
    </div>
  );
};

export default CauseBox;
