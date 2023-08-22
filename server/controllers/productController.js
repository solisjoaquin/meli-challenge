const axios = require("axios");
const constants = require("../utils/constants");

const apiUrl = process.env.API_URL;
const limitProducts = 4;

exports.getProducts = (searchValue, res) => {
  axios
    .get(
      `${apiUrl}/sites/${constants.MLA_REGION}/search?q=${searchValue}&limit=${limitProducts}`
    )
    .then((response) => {
      res.json(formatProducts(response.data));
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getProductDetails = (productId, res) => {
  const detailResponse = {};
  axios
    .all([
      axios.get(`${apiUrl}/items/${productId}`),
      axios.get(`${apiUrl}/items/${productId}/description`),
    ])
    .then(
      axios.spread((product, description) => {
        detailResponse.author = getAuthor();
        detailResponse.item = formatItemValues(product.data, description.data);
        axios
          .get(`${apiUrl}/categories/${product.data.category_id}`)
          .then((response) => {
            detailResponse.categories = response.data.path_from_root.map(
              (category) => {
                return category.name;
              }
            );
            res.json(detailResponse);
          });
      })
    );
};

/**
 *
 * @param {*} response - Response from API
 * @returns {Object} Products
 * @returns {Object} Products.author
 * @returns {Array} Products.categories
 * @returns {Array} Products.items
 *
 */
function formatProducts(response) {
  const products = {};
  products.author = getAuthor();
  products.categories = getCategories(response.filters);
  products.items = getItems(response.results);
  return products;
}

/**
 * @param {Array} filters - Filters from API
 * @returns {Array} Categories
 *
 */
const getCategories = ([firstFilter]) => {
  let categories = [];
  if (!!firstFilter.id && firstFilter.id == "category") {
    categories = firstFilter.values[0].path_from_root.map((category) => {
      return category.name;
    });
  }
  return categories;
};

/**
 * @param {Array} items - Items from API
 * @returns {Array} Items formatted for response
 */
const getItems = (items) => {
  return items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: formatPrice(item.price).decimals,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
    };
  });
};

/**
 * @param {Object} product - Product from API
 * @param {Object} description - Description from API
 * @returns {Object} Product formatted for response
 *
 */
const formatItemValues = (product, description) => {
  const productFormat = {};

  productFormat.id = product.id;
  productFormat.title = product.title;
  productFormat.price = {
    currency: product.currency_id,
    amount: product.price,
    decimals: formatPrice(product.price).decimals,
  };

  if (product.pictures.length) {
    productFormat.picture = product.pictures[0].secure_url;
  }

  productFormat.condition =
    product.condition === "new" ? constants.NEW : constants.USED;
  productFormat.free_shipping = product.shipping.free_shipping;
  productFormat.sold_quantity = product.sold_quantity;
  productFormat.description = description.plain_text;

  return productFormat;
};

/**
 * @param {Number} price - Price from API
 * @returns {Object} Object with decimals value
 */
const formatPrice = (price) => {
  const priceString = price.toString();
  const decimals = priceString.split(".")[1] ? priceString.split(".")[1] : 0;

  return {
    decimals: decimals,
  };
};

/**
 *
 * @returns {Object} Author
 * @returns {string} Author.name
 * @returns {string} Author.lastname
 *
 */
const getAuthor = () => ({ name: "Joaquin", lastname: "Solis" });
