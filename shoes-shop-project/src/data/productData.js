const manShoesShoppintProducts = [
  {
    image:
      "https://media.istockphoto.com/id/1345226228/photo/male-legs-in-jeans-and-white-sneakers-on-background-of-concrete-stairs.jpg?s=2048x2048&w=is&k=20&c=XvwwwYeKyaHlN9ZadblY40leY_vjeX0Fh60F9_Z9d7Y=",
    title: "ShoeSavvy Trends",
    brand: "Nike",
    price: 36,
    discount: 20,
    id: 1,
    brandInformation: `Nike, the iconic brand synonymous with athletic excellence, offers a range of cutting-edge footwear and apparel designed to elevate performance and style. With innovative technologies like Air Max and Flyknit, coupled with iconic marketing campaigns like "Just Do It," Nike inspires athletes worldwide to push their limits and achieve greatness. From the track to the streets, Nike delivers on both performance and style, empowering individuals to pursue their passions with confidence and determination.`,
  },
  {
    image:
      "https://media.istockphoto.com/id/1015500082/photo/skateboarding-man.jpg?s=2048x2048&w=is&k=20&c=yqOkU7wCsulNoPquoIg4cP1_HUxXXrFgMH-WSzZ2BYM=",
    title: "Soleful Style",
    brand: "Adidas",
    price: 26,
    discount: 10,
    id: 2,
    brandInformation: `Adidas, a leading global brand in sports and lifestyle wear, is recognized for its innovative designs, high-performance products, and commitment to sustainability. Founded in 1949 by Adolf Dassler, Adidas has since become a symbol of excellence in athletic footwear, apparel, and accessories. With a diverse range of products catering to various sports and lifestyles, Adidas continues to inspire athletes and enthusiasts worldwide to push their limits and strive for greatness. Embrace the spirit of sport and style with Adidas, where innovation meets tradition.`,
  },
  {
    image:
      "https://media.istockphoto.com/id/1502497358/photo/woman-tying-shoelaces-on-sneakers-sitting-on-a-bench.jpg?s=2048x2048&w=is&k=20&c=B6p7-wStOWqJKELW7MW2esh03eDYo0N5Db3DknXOQ7c=",
    title: "Footwear Finesse",
    brand: "Gucci",
    price: 86,
    discount: 10,
    id: 3,
    brandInformation: `Gucci, the epitome of luxury fashion, continues to captivate the world with its innovative designs, impeccable craftsmanship, and timeless elegance. Established in Florence in 1921, Gucci has become synonymous with Italian sophistication and opulence. From iconic handbags and accessories to ready-to-wear collections, Gucci sets the standard for luxury and style. With a commitment to sustainability and inclusivity, Gucci continues to push boundaries, redefine fashion, and inspire individuals to express themselves boldly through their personal style.`,
  },
  {
    image:
      "https://media.istockphoto.com/id/1189959803/photo/young-man-skateboarding-filtered.jpg?s=2048x2048&w=is&k=20&c=yhXTh0V5uh-brCCX9rO9BANIPpLrFes04R4GOkbvfzU=",
    title: "StepUp Chic",
    brand: "Jimmy Choo",
    price: 106,
    discount: 15,
    id: 4,
    brandInformation: `Jimmy Choo, the iconic luxury fashion brand, is renowned for its glamorous footwear, handbags, and accessories that epitomize elegance and sophistication. Founded in 1996 by couture shoe designer Jimmy Choo and Vogue accessories editor Tamara Mellon, the brand quickly became a favorite among celebrities and fashion enthusiasts worldwide. With its exquisite craftsmanship, impeccable attention to detail, and innovative designs, Jimmy Choo continues to set trends and captivate audiences on and off the red carpet. From classic pumps to statement sandals, Jimmy Choo offers timeless pieces that exude confidence and style.`,
  },
  {
    image:
      "https://media.istockphoto.com/id/1401878738/photo/feet-of-woman-in-sneakers-on-a-longboard-at-the-evening.jpg?s=2048x2048&w=is&k=20&c=LQRsXOS2pOBPlUv8L394MURVayd83j14IpdAolkUvkg=",
    title: "WalkWise Couture",
    brand: "Christian Louboutin",
    price: 150,
    discount: 10,
    id: 5,
    brandInformation: `Christian Louboutin, the iconic French luxury footwear designer, is celebrated for his signature red-soled shoes that embody elegance, femininity, and glamour. Founded in 1991, the brand quickly became synonymous with high fashion and impeccable craftsmanship. Christian Louboutin's creations, ranging from stilettos to sneakers, are coveted by celebrities and fashionistas worldwide for their exquisite design and attention to detail. With a commitment to pushing boundaries and redefining luxury footwear, Christian Louboutin continues to captivate audiences with his distinctive style and creativity.`,
  },
  {
    image:
      "https://media.istockphoto.com/id/919656664/photo/guy-on-skateboard-at-sunset.jpg?s=2048x2048&w=is&k=20&c=3GzO8oreCcgaNAlf8yqzTWDf8ifqHYhIXytLOn3KfAw=",
    title: "WalkWise Couture",
    brand: "Christian Louboutin",
    price: 150,
    discount: 10,
    id: 6,
    brandInformation: `Christian Louboutin, the iconic French luxury footwear designer, is celebrated for his signature red-soled shoes that embody elegance, femininity, and glamour. Founded in 1991, the brand quickly became synonymous with high fashion and impeccable craftsmanship. Christian Louboutin's creations, ranging from stilettos to sneakers, are coveted by celebrities and fashionistas worldwide for their exquisite design and attention to detail. With a commitment to pushing boundaries and redefining luxury footwear, Christian Louboutin continues to captivate audiences with his distinctive style and creativity.`,
  },
];
export default manShoesShoppintProducts;

function getProductData(id) {
  let productData = manShoesShoppintProducts.find(
    (product) => product.id === id
  );
  if (productData === undefined) {
    console.log("Product data does not exist for ID" + id);
    return undefined;
  }
  return productData;
}

export { manShoesShoppintProducts, getProductData };
