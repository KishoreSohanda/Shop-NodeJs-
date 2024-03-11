const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product.ejs', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop.ejs', { prods: products, path: '/', pageTitle: 'Shop' });
};