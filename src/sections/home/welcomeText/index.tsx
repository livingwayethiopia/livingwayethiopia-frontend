import React from "react";
import {
  Container,
} from "./style";

const WelcomeText = () => {
  return (
    <Container className='flex-col mt-4 pt-4 pb-20'>
      <p className='text-4xl font-extrabold text-center'>
        {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "Welcome!" : "እንኳን ደህና መጡ!"}
      </p>

      <div className='px-5 sm:px-10 flex flex-col mt-4 gap-y-8'>

        <p className='text-lg font-light'>

          {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "We are a community of believers aspiring to be an authentic Christian community that glorifies Christ in both proclamation and lifestyle. Though we are not a gathering of perfect people, yet as a community, we believe that we are in the process of sanctification.  This is why we strive to devote ourselves to studying Scripture, prayer, fellowship and the sharing of resources." :
            "እኛ ክርስቶስን በቃል እና በተግባር የሚያከብር እውነተኛ የአማኞች ማህበር ለመሆን የምንሻ ህብረት ነን፡፡ ምንም ያህል እንኳን ፍጹማን ሰዎች ባንሆንም፣ እንደማህበር በቅድስና ሂደት ላይ እንዳለን እና ይህ ደግሞ አጽንኦት ሊሰጠው የሚገባ ነገር እንደሆነ እናምናለን፡፡ ስለዚህም ቃሉን ለማጥናት፣ ለጸሎት፣ ለሕብረት እና ያለንን ለማካፈል እንተጋለን፡፡"}

        </p>
        <p className='text-lg font-light'>

          {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "It is our conviction that the church is the steward of the message of the Good News, the only message of hope for fallen humanity. It is through this message that people can gain salvation and have access to a personal relationship with God. It is thus our mission to spread this Good News in every way possible and make peoples disciples of Christ." :
            "ቤተክርስቲያን ለወደቀው የሰው ልጅ ብቸኛው ተስፋ የሆነውን የወንጌል መልዕክት ባለዐደራ እንደሆነች እምነታችን ነው፡፡ ሰዎች ድነትን የሚያገኙትም ሆነ ከእግዚአብሔር ጋር ህብረት ሊኖራቸው የሚችለው በእዚህ እውነት ነው፡፡ ስለዚህም ይህንን የምስራች በቻለችው መንገድ እና አቅም ማድረስ እና ሰዎችን የክርስቶስ ደቀ መዝሙር ማድረግ ተልዕኮዋ ነው፡፡ "}
        </p>
      </div>
    </Container>
  );
};

export default WelcomeText;
