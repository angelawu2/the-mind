const inProduction = () => process.env.NODE_ENV == 'production';

const inNonProd = () => process.env.NODE_ENV != 'production';

export { inProduction, inNonProd };
