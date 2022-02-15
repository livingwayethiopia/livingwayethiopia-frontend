import React from "react";
import {
  Container,
} from "./style";

const WelcomeText = () => {
  return (
    <Container className='flex-col mt-4 pt-4 pb-20'>
      <p className='text-4xl font-extrabold text-center'>
        Welcome!
      </p>

      <div className='px-5 sm:px-10 flex flex-col mt-4 gap-y-8'>

        <p className='text-lg font-normal'>
          We are a community of believers aspiring to be an authentic Christian community that glorifies Christ in both proclamation and lifestyle. Though we are not a gathering of perfect people, yet as a community, we believe that we are in the process of sanctification.  This is why we strive to devote ourselves to studying Scripture, prayer, fellowship and the sharing of resources.

        </p>
        <p className='text-lg font-normal'>
          It is our conviction that the church is the steward of the message of the Good News, the only message of hope for fallen humanity. It is through this message that people can gain salvation and have access to a personal relationship with God. It is thus our mission to spread this Good News in every way possible and make peoples disciples of Christ.
        </p>
      </div>
    </Container>
  );
};

export default WelcomeText;
