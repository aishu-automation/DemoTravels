import React from "react";

function Privacy() {
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "40px 40px",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      lineHeight: 1.6,
      fontSize: "14px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#001f3f",
	   textAlign: "center",
    },
    subHeading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#001f3f",
    },
    paragraph: {
      marginBottom: "15px",
    },
    link: {
      color: "#001f3f",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>

      <p style={styles.paragraph}>
        At AP Travels, We ensure to protect the privacy of our visitors and is of prime importance to us. This Privacy Policy applies only to our online activities that are done by the website visitors and are valid for visitors who share their information with AP Travels. This policy is not applicable to any action taken outside the website other than this website.
      </p>

      <p style={styles.paragraph}>
        By using our services, you agree to the collection and use of information in accordance with this privacy policy as stated hereunder.
      </p>

      <h2 style={styles.subHeading}>Collecting Your Personal Data</h2>
      <p style={styles.paragraph}>
        While using our services, we may require some of your personal identifiable information that can be used to contact you which is not limited only to your email address and mobile numbers.
      </p>

      <h2 style={styles.subHeading}>Use of Your Personal Data</h2>
      <p style={styles.paragraph}>
        At AP Travels, we may use your personal data for the following purposes:
      </p>
      <p style={styles.paragraph}>
        We use the information we collect in order to fulfill our customer’s needs:
      </p>
      <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand how you interact with our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicating with you directly or through our partners</li>
        <li>Including customer service, to provide you with updates that we offer and other pieces of information related to the website, for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2 style={styles.subHeading}>Log Files</h2>
      <p style={styles.paragraph}>
        AP Travels follow a standard procedure of using log files. These log files automatically log visitors when they visit websites. All hosting companies do this in the concept of tracking the analytics. The information collected by log files includes IP addresses, internet service provider, browser type, date and time stamp, referring and exit pages, the number of clicks. These things are not related to collecting personal information. This information is for analyzing trends, administering sites, tracking user movements on the website, and collecting demographic info.
      </p>

      <h2 style={styles.subHeading}>Tracking Technologies and Cookies</h2>
      <p style={styles.paragraph}>
        Like any other website, AP Travels also uses ‘cookies’. Cookies are used to store information according to visitors’ preferences, and the pages of the website that the user accessed or interacted with. This information is used to optimize user experience by customizing our web page content based on search queries and type of other information. You can instruct Your browser to refuse all cookies or to indicate when a cookie is being sent. Cookies can be “Persistent” or “Session” Cookies. We use both session and persistent cookies for purposes solely for the benefit of our visitors.
      </p>

      <h2 style={styles.subHeading}>Advertising Partners Privacy Policies</h2>
      <p style={styles.paragraph}>
        You may consult this list to find the Privacy Policy for each of the advertising partners of AP Travels.
      </p>
      <p style={styles.paragraph}>
        Third-party ad networks use technologies like cookies, JavaScript, etc that are used in their advertisements and links that appear on AP Travels, which are directly sent to user browsers. This is an automated process that receives your IP address when this thing occurs. They are used to measure the effectiveness of their advertising campaigns and to see relevant advertisements that you see on the web.
      </p>
      <p style={styles.paragraph}>
        Note that AP Travels has no access to or control over these cookies that are used by third-party advertisers.
      </p>

      <h2 style={styles.subHeading}>Third-Party Privacy Policies</h2>
      <p style={styles.paragraph}>
        AP Travels privacy policy does not apply to other advertisers or websites. We advise you to consult the respective policies of the respective site. It includes how their practices and instructions about how to ignore certain options.
      </p>
      <p style={styles.paragraph}>
        You can disable your cookies through your individual browser settings. To know more relatable information about cookie management with a specified browser, it can be found at the respective web browser sites.
      </p>

      <h2 style={styles.subHeading}>Links to Other Websites</h2>
      <p style={styles.paragraph}>
        If you click on a third-party link contained in our site which is not operated by us, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site you visit.
      </p>
      <p style={styles.paragraph}>
        We have no control over the privacy policies or practices of any third-party sites or services.
      </p>

      <h2 style={styles.subHeading}>Changes to this Privacy Policy</h2>
      <p style={styles.paragraph}>
        You are kindly advised to review this privacy policy page periodically for any changes from time-to-time.
      </p>

      <h2 style={styles.subHeading}>Consent</h2>
      <p style={styles.paragraph}>
        By using our website, you hereby declare that you agree to our Privacy Policy and to its terms.
      </p>
      <p style={styles.paragraph}>
        The personal information that we are asking to provide and the reasons why you are asked to provide is because we will be made clear to you at the point we ask you to provide your unique information.
      </p>
      <p style={styles.paragraph}>
        If you contact us personally, we may receive additional information about you such as your name, your email address, your phone number, the contents of the message, and other pieces of information that you are ready to provide
      </p>
      <p style={styles.paragraph}>
        When you are registering an account, we ask you to provide your contact information, such as name, address, email address, and telephone number.
      </p>

      <h2 style={styles.subHeading}>Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about this Privacy Policy, you can contact us at{" "}
        <a href="https://www.aptravels.in" style={styles.link} target="_blank" rel="noopener noreferrer">
          https://www.aptravels.in/
        </a>
      </p>
    </div>
  );
}

export default Privacy;
