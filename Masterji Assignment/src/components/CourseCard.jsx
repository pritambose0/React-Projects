import React from "react";
import cards from "../Data/CourseData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faGripVertical } from "@fortawesome/free-solid-svg-icons";

function CourseCard() {
  return (
    <div className="border bg-[#F9F7F7] space-y-3 p-5 rounded-lg w-[95%] lg:w-[60%]">
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl text-[#313131] font-bold">Manage Bundle</h2>
        <p className="text-[#4B4747] text-sm">
          Change orders of the products based on priority
        </p>
      </div>

      <div className="sm:pb-6">
        {cards.map((card) => (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center mb-2 w-full sm:w-[90%] border shadow-custom rounded-lg p-1 px-3 gap-2 sm:0"
            key={card.id}
          >
            <div className="flex items-center gap-3 sm:w-[75%]">
              <FontAwesomeIcon
                icon={faGripVertical}
                className="text-[#7F7F7F] text-sm"
              />
              <img
                src={card.image}
                alt=""
                className="aspect-video w-20 rounded-md"
              />

              <h2 className="text-[13px] text-black font-medium">
                {card.text}
              </h2>
            </div>
            <div className="flex items-center justify-around gap-5 sm:w-[25%]">
              <p className="text-[12px] font-medium">{card.price}</p>
              <p className="text-[10px] font-medium bg-[#DBFFCE] px-[3px] py-[1px] border rounded-sm">
                {card.type}
              </p>
              <FontAwesomeIcon icon={faEllipsisV} className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
