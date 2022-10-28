import Navbar from "../../components/navbar/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
          <div className="d-flex flex-column align-items-center logo">
          <a
            href="https://www.linkedin.com/in/f-cansu-%C3%B6zta%C5%9F-9545a3243/"
            target="blank"
          >
            <svg width="156" height="156" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <h1>LinkedIn</h1>
        </div>
        <div className="d-flex flex-column align-items-center logo">
          <a href="https://github.com/Cansuoztas/" target="blank">
            <svg width="156" height="156" viewBox="0 0 24 24">
              <path
                fill="gray"
                fill-opacity="0"
                d="M15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98302 13.0822 6 14C7.01698 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18V22H15V18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.6s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <g
                fill="none"
                stroke="gray"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="30"
                  stroke-dashoffset="30"
                  d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="30;0"
                  />
                </path>
                <path
                  stroke-dasharray="10"
                  stroke-dashoffset="10"
                  d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
              </g>
            </svg>
          </a>
          <h1>GitHub</h1>
        </div>
      </div>

  );
}