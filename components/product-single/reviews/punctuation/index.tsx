import TextInput from "@components/form-ui-kit/TextInput";
import Rater from "react-rater";
import { PunctuationType } from "types";

const Punctuation = ({
  votes,
  punctuation,
  countOpinions,
}: PunctuationType) => {
  const percentageBar = (count: number) => {
    return (count * 100) / 81;
  };

  return (
    <section className="product-punctuation">
      <div className="product-punctuation__values max-w-2/3">
        <h3>{punctuation}</h3>
        <Rater total={5} interactive={false} rating={punctuation} />
        <p>
          <i className="icon-avatar"></i>
          {countOpinions} all opinions
        </p>
      </div>

      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          {votes.map((vote) => (
            <li key={vote.count} className="punctuation-item">
              <Rater total={1} interactive={false} rating={1} />
              <span>{vote.value}</span>
              <div className="punctuation-item__bar">
                <div
                  style={{ width: percentageBar(vote.count) + "%" }}
                  className="punctuation-item__bar__current"
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--rounded btn--yellow">
          Add opinion
        </button>
        <div className="flex flex-col justify-center items-start w-full m-auto p-6 gap-2">
          <Rater total={5} interactive={true} />
          <textarea
            className="ring-1 ring-color-black w-full p-2 rounded-md"
            placeholder="Viết đánh giá..."
            name=""
            id=""
            cols={20}
            rows={10}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Punctuation;
