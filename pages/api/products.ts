import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import products from "../../utils/data/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);
  const filter = req.query;
  const { sizes } = filter;
  // fake loading time
  setTimeout(() => {
    res.status(200).json(
      products.map((item) => {
        if (sizes && item.sizes.includes(sizes as string)) return item;
        else return item;
      })
    );
  }, 800);
};
