import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
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
  buttonText,
  onClicked,
  boxDesign,

  textColor,
  addDescription
}) => {
  const router = useRouter();
  const detailPage = () => {
    router.push(`/detailPage/1`); //Dyamic detail page
  };

  return (
    <div
      className={`mt-10 rounded-lg   transition ease-in duration-150 hover:scale-105   ${boxDesign} `}
    >
      <Image
        src={image}
        width="300px"
        height="150px"
        alt="program-1"
        className=" rounded-lg"
        onClick={detailPage}
      />
      <p className={`font-bold ml-2 text-${textColor}`} onClick={detailPage}>
        {title}
      </p>
      {addDescription && (
        <p
          className={`text-xs mt-2 leading-normal text-left ml-2 font-bold `}
          onClick={detailPage}
        >
          {message}
        </p>
      )}

      <div className="flex">
        {addbutton && (
          <button onClick={onClicked} className={buttonDesign}>
            {buttonText}
          </button>
        )}
        {addProgress && (
          <div>
            <p className="text-xs ml-20 font-semibold mt-5">
              {progressAmount} $
            </p>
            <progress
              className={progressDesign}
              max="100"
              value={progressValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CauseBox;
