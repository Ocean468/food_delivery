import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <h2 style={styles.followUs}>Follow Us</h2>

      <div style={styles.imageGallery}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6QU1WLLyP2jXyYA1_P_Ok60bi0o04zIpdv8Hg6aQyt-LCKwMih7F5V0ilyUi6zVL6io&usqp=CAU"
          alt="Drink"
          style={styles.image}
        />
        <img
          src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65784f2205a1963dd68b671c_footer-image-02.jpg"
          alt="Cake"
          style={styles.image}
        />
        <img
          src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65784f226152e73bfc829b2d_footer-image-03.jpg"
          alt="Grilled"
          style={styles.image}
        />
        <img
          src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65784f2276d31121ac760ce3_footer-image-04.jpg"
          alt="Ice Cream"
          style={styles.image}
        />
        <img
          src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/65784f2207bb5773dcf8e39b_footer-image-05.jpg"
          alt="Dessert"
          style={styles.image}
        />
      </div>

      <div style={styles.footerLinks}>
        <div>
         
        </div>

        <div style={styles.centerLogo}>
          <h2 style={styles.logo}>Food Delivery</h2>
          <p style={styles.description}>
          Food is more than just sustenance—it’s an art form, a universal language that transcends borders and cultures. Every dish tells a story, blending flavors, traditions, and creativity into a masterpiece. It’s an expression of love, passion, and craftsmanship, plated to perfection to delight the senses and bring people together.
          </p>
          <div style={styles.socialIcons}>
            <span>🔵</span>
            <span>❌</span>
            <span>📷</span>
          </div>
        </div>

        <div>
          
        </div>
      </div>

      <p style={styles.copyright}>
        Copyright © 2025
      </p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#121212",
    color: "white",
    padding: "40px 0",
    textAlign: "center",
  },
  followUs: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  imageGallery: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  image: {
    width: "120px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  linkHeader: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  centerLogo: {
    textAlign: "center",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "24px",
  },
  description: {
    fontSize: "14px",
    marginBottom: "15px",
    maxWidth: "450px",
    margin: "0 auto",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    fontSize: "20px",
  },
  copyright: {
    marginTop: "20px",
    fontSize: "14px",
    opacity: 0.8,
  },
};

export default Footer;
