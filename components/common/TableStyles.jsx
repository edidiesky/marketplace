import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  margin-top: 1rem;
  background: var(--white);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-collapse: collapse;
  table-layout: fixed;
  @media (max-width: 680px) {
    padding: 2rem 3rem;
  }

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #f8f8f8;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }

    .tableWrapper {
      border-collapse: collapse;
      width: 100%;
      min-width: 100%;
      /* max-width: 1000px; */

      thead {
        tr {
          text-align: start;
          z-index: 200;
          text-align: start;
          transition: all 0.3s var(--transition-2);
          th {
            color: var(--blue-3);
            text-align: start;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding: 2rem 1.8rem;

            transition: all 0.3s var(--transition-2);
          }
        }
      }

      tbody {
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;
          td {
            font-weight: 500;
            text-align: start;
            padding:1.8rem;

            color: var(--dark-1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            .true {
              color: #e72d2d;
            }
            .tablespan {
              display: block;
              padding: 1rem 1.4rem;
              font-size: 1.3rem;
              font-weight: 600;
              width: 100%;
              border-radius: 4px;
              color: #333;
              text-align: center;
              &.true {
                color: #045235;
                background: #04523517;
              }
              &.false {
                color: #e50b0b;
                background: #e50b0b12;
              }
            }

            .true {
              color: var(--green);
              font-size: 1.3rem;
            }
            .false {
              color: var(--red);
              font-size: 1.3rem;
            }

            .imageGradient {
              position: absolute;
              bottom: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: rgba(0, 0, 0, 0.03);
              display: flex;
              align-items: center;
              width: 100%;
              justify-content: center;
              transition: all 0.6s var(--ease);
            }
          }
          .true {
            color: var(--success-color);
            font-size: 1.2rem;
          }
          .false {
            color: var(--error-color);
            font-size: 1.2rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            h3 {
              font-size: 1.2rem;
              color: #777;
              font-weight: 600;
            }
            p {
              font-size: 1.2rem;
              color: #ccc;
              font-weight: 400;
              width: 80%;
              margin: 0 auto;
              text-align: start;
              line-height: 1.8;
            }
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;
            .icons {
              width: 4rem;
              height: 4rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 1.7rem;
                cursor: pointer;
              }
              &:hover {
                background: var(--grey-3);
              }
            }
            .details {
              padding: 0.8rem 1rem;
              background: var(--grey-3);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
`;
