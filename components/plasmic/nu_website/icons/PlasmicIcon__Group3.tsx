// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 331 332"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M171.892.339c-.03.186-.169 1.82-.309 3.631-.35 4.52-.765 9.702-1.391 17.365-.291 3.568-.512 6.506-.492 6.529.021.023 1.082.125 2.358.227 7.762.617 9.508.75 9.541.721.02-.017.105-.891.189-1.943.108-1.342.122-1.93.048-1.977-.059-.036-1.738-.193-3.733-.349-1.994-.156-3.642-.3-3.662-.318-.041-.04.579-8.056.627-8.105.017-.017 1.35.08 2.963.218 1.612.136 2.96.216 2.995.178.102-.114.368-3.858.278-3.917-.045-.029-1.375-.155-2.956-.28-1.58-.126-2.899-.26-2.93-.297-.062-.073.54-7.575.612-7.633.024-.019 1.324.067 2.888.191 1.564.125 3.252.257 3.75.295l.906.068.154-1.933c.084-1.064.126-1.964.092-2-.049-.053-4.88-.467-11.107-.95l-.766-.06-.055.339zM151.774.35c-.961.108-1.757.205-1.769.217-.012.01.132 1.477.32 3.258.895 8.487 1.348 12.87 1.344 12.988-.003.072-.254-.521-.558-1.317a1520.32 1520.32 0 00-2.18-5.639c-.896-2.305-2.016-5.201-2.491-6.436-.475-1.235-.896-2.278-.936-2.318-.074-.074-5.356.437-5.446.528-.028.027.035.857.14 1.843l.546 5.186c.338 3.223.953 8.994 1.696 15.917.186 1.73.367 3.458.403 3.843.036.384.083.767.106.85.037.137.238.133 1.863-.03 1.002-.1 1.883-.202 1.957-.227.162-.055.261 1.013-.985-10.623-.537-5.022-.963-9.146-.946-9.163.034-.036.463 1.049 2.497 6.319 3.398 8.806 4.949 12.774 5.015 12.834.069.062 4.393-.355 4.468-.43.019-.02-.163-1.876-.405-4.125-.887-8.23-1.948-18.224-2.198-20.704-.304-3.02-.3-2.998-.522-2.98-.095.006-.959.1-1.919.209zm47.372 5.23c-.265 1.023-.444 1.895-.4 1.937.045.043 1.002.313 2.127.6 1.126.288 2.079.551 2.118.585.074.064-.395 1.947-2.417 9.688a1956.63 1956.63 0 00-1.697 6.537c-.282 1.097-.804 3.111-1.161 4.475-.357 1.364-.634 2.49-.617 2.503.124.087 4.195 1.067 4.241 1.02.033-.032.519-1.845 1.081-4.028.562-2.184 1.547-5.991 2.189-8.461.643-2.47 1.522-5.855 1.955-7.523.433-1.667.802-3.046.82-3.064.018-.017.962.213 2.098.512 1.137.3 2.132.544 2.212.544.081 0 .186-.146.235-.324.31-1.131.853-3.467.815-3.501-.092-.082-12.753-3.36-12.98-3.36-.097 0-.285.564-.619 1.86zm-83.249 1.68l-2.994.923.032.289c.048.442 1.051 7.666 1.723 12.414.331 2.333.891 6.352 1.246 8.932.85 6.174.884 6.388.995 6.376.053-.005.915-.25 1.917-.546 1.333-.392 1.821-.577 1.821-.688 0-.084-.16-1.223-.356-2.532-.196-1.309-.341-2.395-.323-2.414.046-.045 4.958-1.544 5.062-1.544.044 0 .562 1.022 1.151 2.27a179.93 179.93 0 001.09 2.291c.029.03 4.151-1.231 4.208-1.288.028-.028-1.327-2.852-3.009-6.277a5127.509 5127.509 0 01-8.757-17.878c-.337-.7-.658-1.267-.713-1.262-.054.006-1.447.426-3.093.934zm3.882 10.183c.519 1.098 1.532 3.225 2.252 4.728.72 1.502 1.29 2.751 1.266 2.775-.024.024-.849.286-1.834.583-.984.297-1.86.567-1.947.6-.12.046-.17-.028-.216-.321-.033-.21-.485-3.21-1.005-6.669l-.991-6.586c-.049-.317.916 1.588 2.475 4.89zm-33.896 2.322c-1.028.534-1.87 1.004-1.87 1.044-.001.069.73 1.5 5.215 10.206 4.291 8.329 5.066 9.834 6.239 12.126a237.742 237.742 0 001.28 2.48c.015.02 1.007-.468 2.204-1.086 1.197-.617 3.052-1.571 4.122-2.12 2.705-1.386 3.992-2.072 3.992-2.125 0-.047-1.696-3.461-1.747-3.517-.015-.017-1.458.707-3.207 1.61-3.105 1.601-3.183 1.635-3.33 1.437-.082-.11-.96-1.778-1.95-3.705l-4.19-8.144a8692.05 8692.05 0 01-3.538-6.88c-.632-1.232-1.194-2.253-1.249-2.268-.055-.016-.942.409-1.97.942zm160.044 2.044c-.155.233-1.132 1.794-2.172 3.468-4.385 7.058-5.019 8.078-6.855 11.027-3.824 6.143-5.291 8.522-5.345 8.661-.065.17 3.225 2.236 3.346 2.102.041-.047.726-1.14 1.522-2.43.796-1.29 2.426-3.917 3.622-5.838a3636 3636 0 003.441-5.538c1.674-2.704 1.897-3.05 1.897-2.946 0 .049-.335 1.192-.743 2.54-.409 1.348-1.175 3.889-1.702 5.645l-2.215 7.363c-.691 2.293-1.239 4.184-1.217 4.203.163.144 3.8 2.37 3.825 2.341.018-.02 1.751-2.797 3.85-6.173 2.1-3.376 4.434-7.125 5.187-8.333 4.081-6.545 5.688-9.15 5.685-9.211-.004-.09-3.124-2.016-3.265-2.016-.06 0-.21.169-.335.374-.125.206-1.985 3.204-4.134 6.662a915.596 915.596 0 00-4.031 6.52c-.068.128-.143.213-.167.19-.04-.041.57-2.1 3.652-12.323.616-2.044 1.097-3.777 1.068-3.852-.054-.142-4.364-2.86-4.535-2.86-.054 0-.225.19-.379.424zM67.296 32.012c-.69.187-1.348.48-1.969.878-.55.353-5.49 4.063-5.787 4.348-.161.154-.048.328 1.846 2.83l8.405 11.102c3.513 4.64 6.445 8.425 6.517 8.411.272-.05 3.408-2.522 3.362-2.649-.043-.119-3.621-4.888-5.455-7.27l-.78-1.013.987-.756c1.445-1.108 2.043-1.687 2.6-2.52 1.19-1.779 1.23-3.737.121-5.875-.503-.97-3.47-4.899-4.357-5.77-1.33-1.305-2.559-1.862-4.093-1.855-.494.002-1.123.064-1.397.139zm1.796 4.35c.165.099.484.373.71.61.597.625 3.212 4.14 3.492 4.693.274.539.315 1.241.098 1.655-.266.507-2.16 2.073-2.398 1.982-.07-.027-1.072-1.3-2.225-2.827a833.206 833.206 0 00-2.777-3.663l-.68-.884.343-.286c.8-.664 1.865-1.377 2.19-1.466.427-.117.85-.054 1.247.185zm199.942 6.94l-4.59 5.022c-.741.812-3.521 3.844-6.176 6.738l-4.829 5.263.438.43c.24.237 2.228 2.07 4.416 4.074l3.978 3.642.57-.615c1.594-1.718 2.105-2.302 2.079-2.372-.015-.042-1.195-1.15-2.622-2.46-1.427-1.31-2.655-2.457-2.728-2.547-.117-.143-.048-.255.549-.893a763.98 763.98 0 002.72-2.95c1.12-1.223 2.073-2.21 2.116-2.194.044.015 1.03.903 2.192 1.973 1.161 1.07 2.142 1.959 2.179 1.973.038.015.666-.627 1.397-1.426 1.316-1.44 1.327-1.455 1.142-1.66-.102-.114-1.094-1.038-2.204-2.053l-2.019-1.847.522-.576c1.593-1.762 4.454-4.858 4.595-4.975.188-.155-.125-.415 3.349 2.78 1.224 1.126 2.283 2.046 2.353 2.046.157 0 2.745-2.765 2.684-2.866-.024-.04-.749-.719-1.611-1.508l-4.362-3.995c-1.536-1.407-2.816-2.557-2.844-2.555-.028.002-1.51 1.6-3.294 3.551zm22.739 18.185c-1.006.776-3.669 2.809-9.819 7.499l-6.555 4.992c-2.561 1.948-4.658 3.58-4.662 3.625-.003.046.497.742 1.113 1.547a2125.49 2125.49 0 015.243 6.88l.85 1.124.361-.27c1.299-.97 2.806-2.146 2.806-2.191 0-.03-.727-1.004-1.616-2.166l-2.245-2.938c-.347-.453-.629-.857-.628-.898.001-.04.681-.59 1.512-1.22.831-.632 2.256-1.72 3.167-2.42s1.686-1.272 1.723-1.273c.036 0 .867 1.055 1.845 2.345.978 1.29 1.806 2.345 1.84 2.345.034 0 .685-.476 1.448-1.058.763-.583 1.469-1.118 1.571-1.189.17-.12.051-.304-1.585-2.445-.973-1.272-1.774-2.37-1.781-2.44-.012-.127.158-.263 3.912-3.134 1.811-1.384 2.146-1.605 2.246-1.476l2.254 2.957c1.175 1.543 2.172 2.828 2.216 2.855.045.027.689-.423 1.433-1.002.743-.578 1.441-1.107 1.55-1.175.109-.068.199-.151.199-.185 0-.033-.682-.954-1.515-2.047a4239.98 4239.98 0 01-3.41-4.48 271.527 271.527 0 00-2.118-2.765l-.221-.27-1.134.873zM32.958 64.375c-.223.314-1.763 2.448-3.422 4.741-1.659 2.293-3.038 4.227-3.064 4.296-.028.072.221.321.578.58l3.52 2.545a239823.869 239823.869 0 0111.028 7.965 2063.39 2063.39 0 015.604 4.059c.97.706 1.8 1.282 1.847 1.28.078-.005 6.944-9.485 6.99-9.652.021-.075-2.844-2.18-3.102-2.279-.094-.036-.445.367-1.065 1.225-2.828 3.914-3.429 4.722-3.512 4.722-.05 0-.706-.442-1.456-.982l-3.21-2.309c-1.015-.73-1.862-1.34-1.881-1.356-.019-.016.744-1.111 1.697-2.433.952-1.322 1.74-2.436 1.75-2.477.029-.102-3.148-2.339-3.24-2.282-.042.026-.839 1.106-1.77 2.4-.933 1.294-1.747 2.334-1.81 2.31-.062-.023-1.252-.867-2.644-1.875a775.955 775.955 0 00-3.005-2.17c-.26-.185-.472-.385-.471-.444.001-.06.967-1.442 2.145-3.073 1.18-1.63 2.141-3 2.138-3.043-.006-.078-2.98-2.242-3.151-2.293-.048-.014-.27.231-.494.545zM305.66 87.012a6427.148 6427.148 0 00-7.285 3.702 4406.41 4406.41 0 01-6.586 3.348c-1.729.878-4.055 2.065-5.169 2.64l-2.025 1.043 1.763 3.46c.969 1.903 1.958 3.736 2.198 4.074 1.553 2.192 3.917 2.933 6.626 2.076.915-.289 14.26-7.004 15.518-7.808 1.834-1.172 2.949-3.007 2.943-4.842-.003-.63-.219-1.692-.501-2.452-.193-.519-3.427-6.96-3.575-7.119-.036-.038-1.794.807-3.907 1.878zM16.836 89.71c-.17.377-.596 1.287-.946 2.022a66.872 66.872 0 00-.638 1.358c0 .011.416.213.923.448.508.235 2.607 1.222 4.666 2.194 2.058.971 4.068 1.915 4.466 2.096.398.182.723.372.723.422 0 .161-2.026 4.37-2.104 4.37-.075 0-4.645-2.124-8.56-3.98-1.173-.555-2.16-1.01-2.196-1.009-.046 0-1.58 3.163-1.888 3.893-.03.07.759.453 5.966 2.893a7106.53 7106.53 0 0117.109 8.046c1.203.571 2.22 1.004 2.258.962.169-.185 1.84-3.904 1.78-3.959-.022-.02-1.297-.621-2.834-1.337a782.842 782.842 0 01-5.14-2.417 134.572 134.572 0 00-2.568-1.203c-.273-.106-.33.049.915-2.538.567-1.178 1.01-1.983 1.082-1.964.165.042 1.765.782 5.162 2.388 3.975 1.88 5.38 2.521 5.519 2.517.065-.001.383-.574.706-1.272l.923-1.998.337-.729-.524-.233c-.289-.128-1.4-.647-2.47-1.154a4243.15 4243.15 0 00-11.677-5.488c-1.729-.81-3.951-1.855-4.94-2.322a910.05 910.05 0 00-5.614-2.637c-.081-.035-.237.192-.436.631zm291.808 2.45c.489.961.651 1.385.685 1.8.055.663-.188 1.205-.747 1.666-.567.467-14.214 7.376-14.953 7.57-.514.135-.686.142-1.025.04-.678-.203-.962-.537-1.709-2.01l-.703-1.384 2.22-1.121a605.57 605.57 0 003.517-1.79c.714-.367 3.274-1.672 5.689-2.899a654.568 654.568 0 005.289-2.707c.494-.262.943-.464.998-.449.055.016.388.594.739 1.285zm8.059 22.395c-2.282.413-4.331 1.555-5.672 3.163-.843 1.012-1.44 2.002-2.481 4.113-1.186 2.406-1.76 3.299-2.673 4.16-1.008.951-2.205 1.475-3.38 1.477-.904.002-1.364-.286-1.789-1.122-.468-.919-.438-1.836.08-2.425.448-.51.979-.782 2.32-1.186.655-.197 1.208-.375 1.228-.395.05-.05-1.073-3.782-1.169-3.885-.134-.143-2.203.527-3.377 1.094-.941.454-1.252.666-1.859 1.264-1.146 1.13-1.652 2.337-1.652 3.937 0 2.144 1.007 4.615 2.37 5.815.552.485 1.659 1.033 2.4 1.186 2.26.468 5.442-.38 7.429-1.979 1.397-1.123 2.145-2.188 3.688-5.247.609-1.207 1.319-2.509 1.578-2.894.597-.886 1.713-1.943 2.407-2.279 1.085-.525 2.351-.706 3.014-.429.683.286 1.182 1.161 1.202 2.11.022 1.085-.606 1.691-2.283 2.202-.494.151-.907.28-.919.288-.012.007.246.906.574 1.996.327 1.091.595 1.995.595 2.009 0 .014.37-.088.823-.226 2.721-.832 4.474-2.285 5.066-4.202.517-1.674.089-4.237-1.014-6.074-1.282-2.135-3.565-3.002-6.506-2.471zM5.531 117.563c-.095.305-2.003 7.55-2.707 10.281-.372 1.441-.651 2.645-.62 2.676.064.065 3.199.904 3.567.956.246.034.26-.002.808-2.106.306-1.177.602-2.155.656-2.173.094-.031 5.02 1.232 13.456 3.45 6.324 1.662 9.655 2.519 9.677 2.489.046-.063 1.053-4.029 1.052-4.142 0-.066-.17-.165-.375-.218l-3.318-.861c-1.62-.419-4.449-1.159-6.288-1.644a1121.63 1121.63 0 00-5.139-1.345c-6.382-1.641-7.934-2.079-7.932-2.238 0-.088.246-1.078.544-2.201.3-1.123.526-2.059.504-2.081-.031-.032-2.5-.691-3.563-.952-.204-.05-.28-.024-.322.109zm3.18 36.7c-3.45.609-6.286 2.787-7.782 5.976-.609 1.298-.856 2.348-.918 3.905-.096 2.417.423 4.332 1.69 6.237 1.462 2.195 3.57 3.696 6.205 4.415.7.191 1.053.22 2.606.216 1.66-.004 1.864-.025 2.694-.275 1.822-.55 3.265-1.386 4.564-2.643 2.974-2.877 3.934-7.205 2.48-11.187-1.166-3.196-3.841-5.571-7.28-6.46-1.21-.314-3.07-.394-4.258-.184zm320.65 6.646c-.549.162-3.019.859-5.489 1.549-2.47.69-6.201 1.741-8.291 2.335l-3.801 1.08-4.582-.073c-2.52-.04-4.617-.044-4.659-.009-.042.035-.065 1.026-.05 2.202l.027 2.138 4.597.069 4.596.068 2.988.948c1.643.521 4.29 1.35 5.882 1.842 1.592.492 4.412 1.375 6.268 1.964 1.856.588 3.393 1.05 3.417 1.026.024-.024.073-.969.11-2.099l.066-2.055-.44-.117c-.241-.065-1.764-.491-3.383-.947a930.214 930.214 0 00-5.739-1.596c-1.536-.422-2.831-.802-2.875-.845-.045-.042 2.694-.761 6.087-1.596 3.393-.835 6.226-1.536 6.294-1.557.094-.029.125-.492.125-1.874 0-1.009.028-2.044.063-2.298.076-.555.128-.549-1.211-.155zm-25.378 26.433c-2.819.763-4.519 3.378-4.519 6.95 0 1.797.467 2.997 1.609 4.132.785.779 1.511 1.224 2.614 1.603.463.158 2.864.676 5.465 1.179 2.553.494 6.056 1.175 7.785 1.513 4.572.897 5.811.902 7.575.034 1.474-.726 2.605-2.296 3.119-4.329.285-1.129.308-3.064.046-3.942-.548-1.842-1.905-3.201-3.939-3.943-.451-.164-2.037-.526-3.719-.848-1.613-.308-5.111-.989-7.773-1.513-4.327-.851-4.983-.956-6.187-.992-1.118-.034-1.472-.007-2.076.156zm7.49 5.199c10.665 2.052 10.729 2.065 11.272 2.36.297.162.615.44.767.671.225.341.26.496.254 1.149-.013 1.444-.808 2.301-2.133 2.301-.275 0-2.443-.379-4.819-.842-2.375-.463-5.666-1.095-7.312-1.403a202.205 202.205 0 01-3.693-.717c-1.794-.401-2.504-1.241-2.254-2.666.207-1.177.985-1.856 2.126-1.856.321 0 2.904.447 5.792 1.003zm-284.195 2.623a62.891 62.891 0 00-1.93.525c-.02.014.373 1.59.873 3.503.498 1.913.907 3.567.907 3.675 0 .177-.409.302-3.817 1.174-2.1.537-3.862.974-3.917.972-.055-.002-.433-1.283-.84-2.847-.535-2.059-.779-2.844-.882-2.844-.08 0-.948.209-1.93.465-1.21.315-1.787.509-1.787.601 0 .074.316 1.331.703 2.793.386 1.461.69 2.725.674 2.809-.022.11-1.008.404-3.623 1.079-1.976.51-3.643.929-3.705.931-.062.002-.158-.164-.213-.37-.055-.206-.469-1.811-.92-3.568-.45-1.756-.85-3.227-.89-3.269-.078-.083-3.596.794-3.747.935-.103.096-.14-.06 1.662 6.9.819 3.16 1.25 4.665 1.339 4.665.072 0 1.827-.445 3.901-.99 2.074-.544 4.67-1.22 5.767-1.502 1.098-.282 4.309-1.117 7.135-1.855a2558.63 2558.63 0 017.614-1.978c1.361-.35 2.494-.655 2.518-.679.024-.024-.07-.468-.21-.986-.138-.518-.814-3.119-1.5-5.78a421.888 421.888 0 00-1.268-4.849c-.01-.006-.872.215-1.914.49zm269.3 17.775c-1.756.453-3.055 1.574-3.938 3.398-1.891 3.911-.87 7.074 2.89 8.955.705.352 1.69.751 10.13 4.097 2.552 1.012 5.976 2.37 7.608 3.019 1.633.648 2.984 1.159 3.003 1.136.081-.099 1.464-3.645 1.464-3.752 0-.065-1.583-.745-3.518-1.512l-7.609-3.015c-7.218-2.859-9.459-3.781-9.855-4.055-.601-.417-.811-.782-.856-1.492-.084-1.311.894-2.529 2.032-2.532.524-.002 2.004.552 10.573 3.955l10.064 3.996c.485.191.893.333.906.315.141-.192 1.56-3.921 1.526-4.008-.057-.148-19.707-7.958-20.896-8.305-1.098-.321-2.702-.412-3.524-.2zM32.617 220.13c-.967.196-1.834.537-4.459 1.757-1.308.607-3.163 1.467-4.124 1.91-.96.443-1.76.817-1.779.83-.024.019 2.435 5.468 2.532 5.61.026.038 3.466-1.569 3.566-1.665.042-.041-.101-.453-.319-.915-.218-.463-.365-.872-.327-.91.15-.148 4.802-2.267 5.308-2.417 1.223-.363 2.05-.028 2.603 1.055.504.985.427 1.813-.232 2.492-.447.461-.89.682-7.31 3.656-9.03 4.182-8.4 3.915-9.231 3.913-.912-.002-1.752-.816-2.004-1.941-.105-.47-.099-.605.048-.989.321-.842.784-1.153 3.727-2.505.343-.157.624-.324.624-.369 0-.046-.368-.891-.818-1.879-.519-1.14-.871-1.796-.964-1.796-.08 0-1.004.425-2.051.945-2.185 1.083-2.934 1.633-3.727 2.739-.702.978-.969 1.834-.968 3.103.002 2.008.854 4.016 2.332 5.498.79.791 1.604 1.272 2.506 1.479.656.151 2.148.127 2.892-.047 1.087-.254 1.936-.616 7.235-3.088a1142.51 1142.51 0 014.79-2.219c4.536-2.088 5.218-2.481 6.272-3.621 1.689-1.823 1.92-4.239.659-6.877-1.462-3.058-3.804-4.352-6.781-3.749zm247.963 12.944c-.41.669-.768 1.284-.768 1.32 0 .022.63.907 1.399 1.966l1.399 1.925 1.653.985c.91.542 1.665.97 1.68.952.022-.029 2.018-3.417 2.116-3.592.053-.095-3.553-2.194-3.657-2.129-.049.03-.236.322-.416.65-.346.63-.488.713-.7.411-.072-.101-.678-.755-1.348-1.451-1.198-1.246-1.22-1.263-1.358-1.037zM44.243 243.562c-6.19 4.439-13.904 9.966-16.442 11.78-1.303.931-2.37 1.73-2.37 1.774 0 .044.5.779 1.11 1.633.75 1.049 1.146 1.525 1.222 1.466.063-.047 2.157-1.546 4.654-3.33s5.432-3.881 6.522-4.662c1.09-.78 1.994-1.405 2.01-1.388.023.027-5.602 6.933-9.572 11.754-1.005 1.219-1.08 1.34-.96 1.537.351.58 3.032 4.255 3.104 4.255.045 0 1.69-1.153 3.656-2.563a3543.59 3543.59 0 015.27-3.774c3.26-2.329 12.28-8.795 12.998-9.318.398-.291.724-.566.724-.613 0-.144-2.203-3.144-2.292-3.121-.083.022-.934.628-10.981 7.825a852.786 852.786 0 01-5.08 3.624c-.218.134-.104-.016 1.27-1.679 1.315-1.594 2.898-3.53 8.25-10.091a1363.51 1363.51 0 013.302-4.042c.109-.128-.069-.425-1.164-1.946-.711-.988-1.326-1.806-1.366-1.818-.04-.013-1.78 1.201-3.865 2.697zm19.283 17.908c-.189.261-1.57 2.27-3.067 4.466a3175.779 3175.779 0 01-4.44 6.487c-.944 1.372-2.838 4.134-4.21 6.137a2392.18 2392.18 0 01-3.219 4.69l-.723 1.048 1.531 1.478c.842.813 1.9 1.816 2.351 2.229l.82.752 2.124-1.624a4109.99 4109.99 0 019.908-7.579 4197.65 4197.65 0 009.877-7.556l.596-.457-1.444-1.378c-.794-.758-1.468-1.379-1.497-1.381-.029-.001-.946.694-2.039 1.545l-1.986 1.548-.253-.225c-.757-.673-3.603-3.413-3.603-3.468 0-.036.649-.983 1.441-2.104l1.442-2.038-1.566-1.519c-.862-.836-1.596-1.521-1.633-1.522-.036-.002-.22.21-.41.471zm198.667 2.187c-3.763 3.597-3.982 3.837-4.614 5.079-.502.989-.662 2.545-.373 3.632.37 1.392 1.06 2.366 3.261 4.607 1.647 1.676 2.408 2.227 3.583 2.593.741.23 1.957.25 2.643.044.267-.081.494-.137.505-.125.01.012-.048.336-.129.72-.26 1.236.053 2.539.927 3.859.646.974 2.7 3.039 3.583 3.601 1.788 1.139 3.325 1.238 5.125.331.919-.462 1.846-1.216 3.757-3.052.878-.844 1.991-1.911 2.473-2.372l.877-.837-1.97-2.062a1141.786 1141.786 0 00-3.173-3.31 484.155 484.155 0 01-2.053-2.146 4539.15 4539.15 0 00-11.569-12.159l-.572-.583-2.281 2.18zm4.147 6.181c3.113 3.266 3.588 3.775 3.579 3.832-.028.186-1.993 1.857-2.416 2.054-1.201.559-1.883.223-4.003-1.975-2.009-2.082-2.35-2.76-1.885-3.74.14-.295 2.281-2.521 2.43-2.525.027-.001 1.06 1.059 2.295 2.354zm-202.825 2.996c.79.748 1.436 1.397 1.436 1.442 0 .045-1 .861-2.22 1.813-1.222.952-3.65 2.846-5.394 4.209-1.745 1.363-3.19 2.461-3.212 2.44-.02-.021.487-.791 1.128-1.711 5.624-8.069 6.665-9.543 6.74-9.548.047-.002.732.607 1.522 1.355zm212.884 7.567l1.427 1.496-.928.871c-1.426 1.339-1.891 1.497-2.915.993-.496-.244-.878-.563-1.72-1.441-1.294-1.347-1.675-1.974-1.677-2.763-.002-.734.3-1.236 1.34-2.23l.812-.775 1.117 1.176c.614.647 1.759 1.85 2.544 2.673zm-34.664.031c-1.65 1.084-3.884 2.547-4.965 3.252-1.081.705-1.966 1.302-1.966 1.326 0 .023.438.714.973 1.533.535.82 1.021 1.568 1.08 1.662.094.153.349.014 2.245-1.229 1.177-.77 2.604-1.704 3.172-2.074.568-.371 1.066-.636 1.106-.589.073.083 2.403 3.64 3.736 5.702l.663 1.026-2.171 1.425a144.466 144.466 0 01-2.498 1.616c-.214.126-.306.243-.269.341.117.305 1.985 3.121 2.1 3.165.065.025 1.229-.678 2.586-1.563 1.358-.885 2.479-1.595 2.493-1.578.224.281 4.087 6.261 4.114 6.368.025.102-.669.607-2.187 1.593a548.99 548.99 0 00-3.142 2.052l-.919.608 1.096 1.641c.603.902 1.15 1.626 1.215 1.608.091-.024 9.801-6.332 9.935-6.453.016-.015-.661-1.076-1.504-2.359s-2.253-3.433-3.132-4.778a7015.58 7015.58 0 00-3.495-5.339c-3.71-5.662-5.89-8.995-6.51-9.955-.345-.535-.657-.972-.693-.972-.035 0-1.414.887-3.063 1.971zm-158.59.023c-.593.933-1.82 2.856-2.726 4.273-.906 1.417-2.455 3.844-3.443 5.393a4409.036 4409.036 0 01-6.498 10.173c-.68 1.059-1.236 1.96-1.236 2.004 0 .043.839.608 1.864 1.255 1.755 1.108 1.872 1.166 2 .991.076-.103 1.516-2.353 3.201-5 1.686-2.648 3.11-4.813 3.164-4.812.18.004 4.078 2.537 4.06 2.64-.009.055-1.407 2.281-3.107 4.947-1.7 2.666-3.115 4.911-3.145 4.99-.082.215 3.542 2.532 3.696 2.362.062-.068.608-.91 1.213-1.871.605-.96 2.078-3.273 3.272-5.139a2059.83 2059.83 0 003.44-5.389 1828.54 1828.54 0 013.246-5.09c3.508-5.479 3.742-5.85 3.742-5.936 0-.139-3.614-2.416-3.695-2.328-.073.08-2.067 3.191-4.894 7.637-.792 1.247-1.488 2.268-1.546 2.27-.08.003-3.953-2.388-4.12-2.543-.017-.017.436-.764 1.01-1.661l3.113-4.874 2.181-3.413c.06-.094.088-.189.063-.213-.087-.081-3.694-2.361-3.735-2.361-.022 0-.526.763-1.12 1.695zm25.966 12.985c-.746.151-1.826.712-2.452 1.272-.536.48-1.373 1.59-1.74 2.307-.31.606-1.831 4.439-1.788 4.507.034.056 1.178.53 3.351 1.39l.466.184.723-1.816c.939-2.358 1.19-2.85 1.675-3.289.695-.628 1.347-.685 2.377-.207.96.446 1.315 1.085 1.202 2.163-.069.66-5.906 15.355-6.368 16.031-.174.256-.468.569-.652.695-.66.452-1.748.363-2.534-.207-.49-.355-.704-.679-.803-1.214-.115-.628.047-1.288.746-3.033.348-.868.604-1.606.57-1.639-.1-.097-3.804-1.521-3.84-1.477-.07.086-1.153 2.969-1.365 3.633-.274.862-.379 2.717-.2 3.573.379 1.827 1.857 3.361 4.095 4.248 2.558 1.014 4.858.731 6.539-.804.524-.48 1.353-1.6 1.72-2.326.224-.445 5.791-14.384 6.055-15.164.44-1.299.58-2.941.346-4.067-.329-1.582-1.532-2.993-3.294-3.863-.57-.282-1.351-.603-1.736-.713-.82-.235-2.384-.328-3.093-.184zm94.139 5.059c-1.025.313-1.892.598-1.926.632-.064.066.317 1.409 2.161 7.622.603 2.03 1.477 4.994 1.942 6.586.465 1.592 1.23 4.19 1.699 5.773.47 1.583.816 2.914.769 2.958-.076.071-.996.358-3.504 1.095-.412.121-.723.267-.723.34 0 .071.242.933.537 1.917.463 1.54.564 1.784.724 1.757.102-.017 2.364-.676 5.026-1.465s5.502-1.626 6.312-1.86c.81-.233 1.472-.471 1.472-.529 0-.166-1.017-3.591-1.091-3.673-.036-.042-.999.197-2.14.529s-2.121.589-2.179.569c-.104-.034-.402-1.002-2.391-7.76-4.179-14.2-4.431-15.019-4.63-15.04-.106-.011-1.032.236-2.058.549zm-20.067 4.458c-1.14.123-2.09.241-2.11.263-.021.022.23 2.685.557 5.918.398 3.937.561 5.899.491 5.942-.139.085-4.698.539-4.764.474-.05-.05-.595-5.041-1.037-9.5-.119-1.208-.252-2.232-.293-2.277-.069-.074-4.287.305-4.386.395-.038.033.269 3.122 1.283 12.909l.908 8.783c.342 3.32.639 6.056.658 6.078.039.044 4.354-.383 4.407-.435.017-.017-.108-1.372-.278-3.012-.555-5.363-.898-8.852-.873-8.871.013-.01 1.115-.128 2.448-.262l2.423-.243.043.204c.024.112.206 1.798.404 3.746.618 6.069.815 7.888.855 7.922.057.048 4.256-.378 4.309-.437.025-.027-.062-1.105-.193-2.395a25714.94 25714.94 0 00-2.63-25.423c0-.014-.034-.02-.075-.014-.041.006-1.007.112-2.147.235zm-36.44.677c-.131 1.245-.283 3.377-.244 3.416.023.023 1.7.181 3.726.35 2.026.169 3.705.328 3.73.354.042.042-.243 3.774-.522 6.833l-.114 1.247-.348-.021c-.192-.011-1.53-.117-2.974-.236-1.443-.118-2.639-.199-2.658-.179-.045.051-.368 3.9-.329 3.938.017.018 1.35.146 2.964.287 1.613.14 2.95.272 2.971.294.022.021-.098 1.649-.267 3.616-.169 1.968-.306 3.685-.306 3.815v.238l-1.023-.071a368.6 368.6 0 01-3.767-.304c-1.509-.128-2.764-.213-2.788-.19-.023.024-.116.901-.204 1.948-.161 1.902-.161 1.905.043 1.977.224.08 11.727 1.048 11.771.99.015-.019.443-5.065.95-11.212a6447.06 6447.06 0 011.155-13.872c.128-1.482.214-2.713.19-2.737-.023-.023-1.557-.168-3.409-.321-1.852-.154-4.455-.37-5.784-.482a153.33 153.33 0 00-2.563-.202c-.101 0-.161.157-.2.524z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
