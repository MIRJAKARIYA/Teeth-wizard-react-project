import React from "react";
import './Blogs.css';
const Blogs = () => {
  return (
    <div className="blogs-container">
      <div>
        <h2>Difference between Authentication and Authorization</h2>
        <p>
          Authentication is the act of confirming a person's identity, whereas
          authorization is the process of confirming a user's access to certain
          apps, files, and data.There are much differences between them.some of
          which are shown below..
        </p>
        <li>
          The identity of users is validated during the authentication process
          before they are granted access to the system on the other hand The
          authority of the individual or user to access the resources is
          evaluated during the authorization procedure.
        </li>
        <li>
          Users or persons are varified in authentication process on the other
          hand users or persons are validated in authorization process.
        </li>
        <li>
          Users login details are needed in the process of authentication and
          users privilege or security levels are needed in authorization process
        </li>
      </div>
      <div>
        <h2>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <div>
          <h4>Why use firebase?</h4>
          <p>
            For dynamic apps, Firebase provides a less technical and time-saving
            option to building full-fledged backend code. If we ever want to
            host and administer our app on the cloud, we might want to consider
            using this technology. Because Firebase is serverless, it eliminates
            the need to bother about cloud server configuration details. It also
            allows us access to other Google goods and capabilities, such as
            Google Drive and Sheets, as a Google Cloud service. For example, we
            may import fake data from Google Sheets and utilize it to serve your
            app momentarily.
          </p>
          <h4>What other options do you have to
          implement authentication?</h4>
          <p>There are quite a few authentication products that we could also use such as 
              <li>WatchGuard AuthPoint.</li>
              <li>Cisco Secure Access by Duo.</li>
              <li>Google Authenticator.</li>
              <li>HID DigitalPersona.</li>
          </p>
        </div>
      </div>
      <div>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p>Firebase is mainly used for user authentication but there are various services that firebase provides.we can use firebase Hosting to host our websites which is very efficient.we can use Google analytics to know what our users are doing in our website.we can use Cloud Firestore.We can use Firebse Cloud messaging in our app.we can also use Cloud Functions,Cloud Storage etc.So there are much more thing that firebase provide us other than authentication.We can use these services as per our need.</p>
        </div>
    </div>
  );
};

export default Blogs;
