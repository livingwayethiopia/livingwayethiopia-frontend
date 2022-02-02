import React, { useState } from "react";
import {
  BackgroundImage,
  SubscriptionFormButton,
  SubscriptionFormInput,
  SubscriptionBox,
  SubscriptionContainer,
} from "./style";
import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ReactHtmlParser from "react-html-parser";

const Subscription = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL as string;
  const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />;
  return (
    <SubscriptionContainer id="subscription">
      <BackgroundImage>
        <Image
          loading="eager"
          width={200}
          height={200}
          src="/icons/books.svg"
          alt="books"
        />
      </BackgroundImage>
      <SubscriptionBox>
        <span className="title">
          {process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "Subscribe to get notified about update"
            : "ለአዳዲስ መረጃ ሰብስክራይብ ያድርጉ"}
        </span>
        <span className="subText">
          {process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? ReactHtmlParser(`By subscribing with your mail, <br /> You will get updates about
          things to come.`)
            : ReactHtmlParser(`ቤተሰብ ሲሆኑ አዳዲስ መረጃዎችን ያገኛሉ።`)}
        </span>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => {
            return (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData: any) => subscribe(formData)}
              />
            );
          }}
        />
      </SubscriptionBox>
    </SubscriptionContainer>
  );
};

export default Subscription;

const CustomForm = ({ status, message, onValidated }: any) => {
  const [newCycle, setNewCycle] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const submit = () => {
    if (!email) return setError("Please input Your Email Address");
    if (!email.includes("@") || !email.includes("."))
      return setError("Please Provide a valid Email Address");
    setNewCycle(false);
    return onValidated({
      EMAIL: email,
    });
  };
  return (
    <div className="form">
      <SubscriptionFormInput
        id="subInput"
        value={email}
        placeholder="Enter your email"
        type="email"
        onChange={(event: any) => {
          if (event.target.value.length > 0) setError("");
          setNewCycle(true);
          setEmail(event.target.value);
        }}
      />

      <SubscriptionFormButton
        className="px-6"
        disabled={status === "sending"}
        onClick={submit}
        style={{ cursor: status === "sending" ? "progress" : "pointer" }}
      >
        <p>{status === "sending" ? "Subscribing..." : "Subscribe"}</p>
      </SubscriptionFormButton>
      {error.length > 0 && newCycle && (
        <div className="w-full text-center text-md text-orange-600">
          {error}
        </div>
      )}
      {status === "error" && !newCycle && (
        <div className="w-full text-center text-md text-orange-600">
          {error.length > 0 ? error : "SomeThing went wrong. Please try again!"}
        </div>
      )}
      {status === "success" && !newCycle && (
        <div
          className="text-md px-2 w-full text-center "
          style={{ color: "green" }}
        >
          Welcome to Living Way Ethiopia Church!
        </div>
      )}
    </div>
  );
};
