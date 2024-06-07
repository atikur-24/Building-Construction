const fetchData = ({ page = 1, limit = 5 }) => {
  console.log(`API page is ${page} & limit is ${limit}`);
};

const newFun = ({ page = 1, limit = 5 }) => {
  console.log(`page ${page} & limit ${limit}`);
  fetchData({ search, page, limit });
};

const search = "atik";
const page = 3;
const limit = 15;

newFun({ page });
