// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _Icon(props: _IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 97 19"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.23 18.59c-2.6 0-4.81-.91-6.63-2.73C.867 14.04 0 11.873 0 9.36c0-2.6.867-4.81 2.6-6.63C4.42.91 6.63 0 9.23 0c2.6 0 4.767.91 6.5 2.73 1.82 1.82 2.73 4.03 2.73 6.63 0 2.513-.91 4.68-2.73 6.5-1.733 1.82-3.9 2.73-6.5 2.73zm38.975 0c-2.6 0-4.81-.91-6.63-2.73-1.734-1.82-2.6-3.987-2.6-6.5 0-2.6.866-4.81 2.6-6.63C43.395.91 45.605 0 48.205 0c2.6 0 4.766.91 6.5 2.73 1.82 1.82 2.73 4.03 2.73 6.63 0 2.513-.91 4.68-2.73 6.5-1.734 1.82-3.9 2.73-6.5 2.73zm38.975 0c-2.6 0-4.81-.91-6.63-2.73-1.734-1.82-2.6-3.987-2.6-6.5 0-2.6.866-4.81 2.6-6.63C82.37.91 84.58 0 87.18 0c2.6 0 4.766.91 6.5 2.73 1.82 1.82 2.73 4.03 2.73 6.63 0 2.513-.91 4.68-2.73 6.5-1.734 1.82-3.9 2.73-6.5 2.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _Icon;
/* prettier-ignore-end */
