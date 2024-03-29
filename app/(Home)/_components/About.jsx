import Image from "next/image";
import React from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    title: "The best table in town",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 2,
    title: "Perfect For Groups",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 3,
    title: "Fresh produce everyday",
    desc: "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
];

export default function About() {
  return (
    <AboutContent className="flex w-100 column gap-4">
      <div className="w-100 flex column gap-4">
        <div className="w-85 auto wrapper flex gap-2">
          <div className="flex-1 flex column gap-2 column">
            <h4 className="fs-18 font-sans text-light">
              HAC TELLUS, FELIS RISUS AT mattis mattis. Eget euismod semper eget
              tortor, donec amet, blandit. Tristique facilisi faucibus elementum
              feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet
              vulputate.
            </h4>
            <h1 className="font-mono">
              food is our common ground, a universal experience.
            </h1>
            <h4 className="fs-18 font-sans text-light">
              HAC TELLUS, FELIS RISUS AT mattis mattis. Eget euismod semper eget
              tortor, donec amet, blandit. Tristique facilisi faucibus elementum
              feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet
              vulputate.
            </h4>

            <div className="w-100 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element,
          @next/next/no-img-element */}
              <Image
                alt=""
                width={0}
                sizes="100vw"
                height={0}
                loading="lazy"
                src="https://avada.website/restaurant/wp-content/uploads/sites/112/2019/12/signature.jpg"
                style={{ width: "20rem" }}
              />
            </div>
          </div>
          <span className="flex-1 aboutImageWrapper">
            {/* eslint-disable-next-line @next/next/no-img-element,
          @next/next/no-img-element */}
            <img
              src="https://avada.website/restaurant/wp-content/uploads/sites/112/2019/12/info22x.jpg"
              alt=""
              className="w-100 h-100 imageWrapper"
            />{" "}
          </span>
        </div>
        <div className="w-90 auto py-14">
          <div className="w-85 auto aboutBottom grid gap-2">
            {data.map((x, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="w-100 overflow-hidden" key={index}>
                  <header
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 300}
                    className="flex column gap-2 w-100"
                  >
                    <h3 className="font-mono text-center fs-40 text-light">
                      {x.title}
                    </h3>
                    <h4 className="font-sans text-center fs-18 text-light">
                      {x.desc}
                    </h4>
                    <div className="w-100 text-center">
                      <button className="btn text-dark family1 text-light fs-18 py-2">
                        Explore the Menu
                      </button>
                    </div>
                  </header>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AboutContent>
  );
}

const AboutContent = styled.div`
  padding: 8rem 0;
  .wrapper {
    @media (max-width: 980px) {
      flex-direction: column;
    }
  }
  .aboutImageWrapper {
    position: relative;
    min-height: 30rem;
    @media (max-width: 980px) {
      min-height: 85rem;
    }
    .imageWrapper {
      position: absolute;
    }
  }
  .aboutBottom {
    display: grid;
    padding-top: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5rem;
    grid-row-gap: 10rem;
  }
`;
