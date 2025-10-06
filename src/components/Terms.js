import React from "react";

function Terms() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 10px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#333",
      gap: "40px",
      flexWrap: "wrap", // wrap on small screens
    },
    textSection: {
      flex: 1,
      paddingRight: "20px", // optional padding for spacing
      minWidth: "300px", 
	  marginTop: "-20px", 
    },
    paragraph: {
      fontSize: "13px",
      marginBottom: "15px",
      lineHeight: 1.6,
    },
    imageSection: {
      flex: 1,
      textAlign: "right",
      minWidth: "300px", // ensure image shrinks on smaller screens
    },
    image: {
      maxWidth: "800px",
      width: "100%",
      height: "400px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    fullWidthSection: {
      backgroundColor: "#f0f8ff",
      padding: "20px 60px",
      width: "100vw", // full viewport width
      position: "relative", // avoid overflow issues
      left: "50%", // shift left half the viewport
      right: "50%", // shift right half the viewport
      marginLeft: "-50vw", // pull back to start from left edge
      marginRight: "-50vw", // pull back to start from right edge
      color: "#333",
      boxSizing: "border-box",
    },
    fullWidthHeading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#001f3f",
    },
  };

  return (
    <>
      {/* Centered heading across full page */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "40px 0 20px 0",
          color: "#001f3f",
          textAlign: "center",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        Terms & Conditions
      </h1>

      {/* Existing content: side-by-side text + image */}
      <div style={styles.container}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}>
            Kindly go through our terms and conditions carefully. These terms and
            conditions set forth the general terms and conditions of your use of
            the Chennai Travels website and any of its related services. This
            accordance is between you and the website administrator. By
            accessing the website and using our services you declare that you
            have read and accepted our terms and conditions.
          </p>
          <p style={styles.paragraph}>
            If you ignore this agreement it represents that you aren’t allowed to
            use our website and the services we provide.
          </p>
          <p style={styles.paragraph}>Read our terms and conditions till the end.</p>
        </div>

        <div style={styles.imageSection}>
          <img src="/images/attach.jpg" alt="Car" style={styles.image} />
        </div>
      </div>

      {/* New full width background section with your additional content */}
      <div style={styles.fullWidthSection}>
        <h2 style={styles.fullWidthHeading}>Accounts and Membership</h2>
        <p style={styles.paragraph}>
          If you create an account on our site your account’s privacy and security
          are highly under your responsibility. All the activities that happen
          and actions that are taken on our site are entirely your
          responsibility. We actually monitor and review and your account before
          you could start using our services. Registering with false information
          may result in the termination of your account. Always register with
          valid details. If we found any suspicious activities with your
          account we may suspend your account, please report to us immediately
          if it is not done by you, or else we will end up deleting the account
          on behalf of the goodwill of our website.
        </p>
        <p style={styles.paragraph}>
          If we delete your account don’t try to re-register with your account
          because we block your IP address in order to strictly keep your
          account out of our site.
        </p>

        <h2 style={styles.fullWidthHeading}>Links to other sources</h2>
        <p style={styles.paragraph}>
          Notwithstanding the fact that our websites may refer to other links and
          services that are relevant to our site’s category we are not sponsors
          are affiliated with any of the services with any linked resource,
          unless specified, we stated herein. We are not responsible for any of
          the offers that are offered by the third-party sites’ likes, products
          offered, and related services. Carefully review the terms and
          conditions of the third-party sites that are linked with our website.
          Other than our site if you are likely to buy third-party service
          providers it is at your own risk.
        </p>

        <h2 style={styles.fullWidthHeading}>Prohibited uses</h2>
        <p style={styles.paragraph}>
          In addition to our terms, you are not allowed to use our website’s
          content for any unlawful purposes, to make third parties perform
          unlawful on our site, to violate any of the national and international
          laws, including local orders. Do not harass, harm, insult, add
          abusive comments, discriminate by race, religion, age sex, gender,
          disability, etc., Avoid false information to our site. Do not upload
          viruses or any malicious code that affects our website’s performance
          behavior. Do not spam our websites for any immoral purpose. Do not
          interfere with the security feature of our websites and services or
          the Internet.
        </p>

        <h2 style={styles.fullWidthHeading}>Changes and amendments</h2>
        <p style={styles.paragraph}>
          We regularly update our website’s terms of services on a regular basis
          if there’s are any changes in our services. We always update the date
          when our terms of service conditions are modified at the end of the
          terms of service page. Regularly check our modified terms and
          conditions and make you are you agree to the new terms. If you do not
          agree to the new terms you are not allowed to access our website’s
          offers and services.
        </p>
      </div>
    </>
  );
}

export default Terms;
