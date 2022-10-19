import * as React from "react";

const SVGComponent = ({ fillColor }) => {
  console.log(fillColor);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="15px"
      height="15px"
      viewBox="0 0 15 15"
    >
      <g id="surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: fillColor,
            fillOpacity: 1,
          }}
          d="M 7.660156 13.109375 C 4.765625 13.109375 2.410156 10.753906 2.410156 7.859375 L 0.980469 7.859375 C 0.980469 11.542969 3.976562 14.539062 7.660156 14.539062 C 8.738281 14.539062 9.808594 14.277344 10.753906 13.78125 C 11.425781 13.429688 12.035156 12.960938 12.554688 12.40625 L 11.539062 11.398438 C 10.550781 12.476562 9.140625 13.109375 7.660156 13.109375 Z M 7.660156 13.109375 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: fillColor,
            fillOpacity: 1,
          }}
          d="M 11.75 11.605469 L 15 14.839844 L 15 8.351562 Z M 11.75 11.605469 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: fillColor,
            fillOpacity: 1,
          }}
          d="M 8.480469 8.351562 L 11.75 11.605469 L 15 8.351562 Z M 8.480469 8.351562 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: fillColor,
            fillOpacity: 1,
          }}
          d="M 3.460938 3.601562 C 4.449219 2.523438 5.859375 1.890625 7.339844 1.890625 C 10.234375 1.890625 12.589844 4.246094 12.589844 7.140625 L 14.019531 7.140625 C 14.019531 3.457031 11.023438 0.460938 7.339844 0.460938 C 6.261719 0.460938 5.191406 0.722656 4.246094 1.21875 C 3.574219 1.570312 2.964844 2.039062 2.445312 2.59375 L 3.25 3.394531 L 0 6.648438 L 6.519531 6.648438 Z M 3.460938 3.601562 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: fillColor,
            fillOpacity: 1,
          }}
          d="M 3.25 3.394531 L 2.445312 2.59375 L 0 0.160156 L 0 6.648438 Z M 3.25 3.394531 "
        />
      </g>
    </svg>
  );
};
export default SVGComponent;
