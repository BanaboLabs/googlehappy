// SVG -> JS: Allows us to change the opacity of the color white depending on state

export default function ButtonWhiteArrow(props) {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6L13.7214 5.30747L14.3862 6L13.7214 6.69253L13 6ZM1 7C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5V7ZM8.92139 0.307468L13.7214 5.30747L12.2786 6.69253L7.47861 1.69253L8.92139 0.307468ZM13.7214 6.69253L8.92139 11.6925L7.47861 10.3075L12.2786 5.30747L13.7214 6.69253ZM13 7H1V5H13V7Z"
        fill="white"
        fill-opacity={props.opacity}
      />
    </svg>
  );
}
